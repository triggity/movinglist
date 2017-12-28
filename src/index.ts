import { Pool } from 'pg';

import * as yargs from 'yargs';
import * as server from './server';


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
            default: +_getEnv('DATABASE_URL', 'postgres://postgres@127.0.0.1:5432/postgres'),
        })
        .help();
}

function serverFunc(args) {
    const pool = getDB(args);
    let opts: server.ServerOpts = {
        port: +args['p'],
        pool: pool
    };
    server.start(opts);
}

function _getEnv(envVar: string, defaulter?: any): string {
    return process.env[envVar] || '' + defaulter || '';
}

function getDB(args) {
    return new Pool({
        connectionString: args['databaseUrl']
    });
}
