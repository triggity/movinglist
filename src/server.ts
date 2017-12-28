import * as koa from 'koa';
import * as koaRouter from 'koa-router';

import logger from './util/logger';

export interface ServerOpts {
    port: number;
    environment?: string;
}

export function start(opts: ServerOpts) {
    const app = new koa();
    const router = new koaRouter();


    router.get('/', async (ctx: koa.Context) => {
        ctx.header
        ctx.body = {"hi": "hello world"};

    });
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(opts.port, () => {
        logger.info(`example starting at ${opts.port}`);
    });
}
