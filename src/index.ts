
import * as yargs from 'yargs';
import * as server from './server';
import logger from './util/logger';


let a = yargs
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
        .help();
}

function serverFunc(args) {
    let opts: server.ServerOpts = {
        port: +args['p']
    };
    server.start(opts);

}


function _getEnv(envVar: string, defaulter?: any): string {
    return process.env[envVar] || '' + defaulter || '';
}
