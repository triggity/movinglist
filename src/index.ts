import { Pool } from 'pg';
const knex = require('knex');

import * as yargs from 'yargs';
import * as server from './server';
import logger from './util/logger';


yargs
    .command('server', 'start the server', serverOpts, serverFunc)
    .help()
    .argv;

function serverOpts(yargs) {
    return yargs
        .option('p', {
            alias: 'port',
            type: 'number',
            default: +_getEnv('PORT0', 8000),
        })
        .option('d', {
            alias: 'databaseUrl',
            type: 'string',
            default: _getEnv('DATABASE_URL', 'postgres://postgres@127.0.0.1:5432/postgres'),
        })
        .option('migrationTable', {
            type: 'string',
            default: 'knex_migrations',
        })
        .help();
}

async function serverFunc(args) {
    const pool = await getDB(args);
    let opts: server.ServerOpts = {
        port: +args['p'],
        pool: pool
    };
    server.start(opts);
}

function _getEnv(envVar: string, defaulter?: any): string {
    return process.env[envVar] || '' + defaulter || '';
}

function migrate(connectionString: string, migrationTable: string): Promise<any> {
    const k = knex({
        client: 'pg',
        connection: connectionString || { user: 'postgres', database: 'postgres', host: '127.0.0.1' },
        migrations: {
            tableName: migrationTable
        }
    })
    return k.migrate.latest();
}

async function getDB(args) {
    logger.info(`connecting to db at ${args['databaseUrl']}`);
    await migrate(args['databaseUrl'], args['migrationTable']);
    return new Pool({
        connectionString: args['databaseUrl']
    });
}
