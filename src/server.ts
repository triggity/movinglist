import * as koa from 'koa';
import * as koaStatic from 'koa-static';
import * as koaRouter from 'koa-router';
import * as koaLogger from 'koa-logger';

import ItemsHandler from './handlers/itemsHandler';
import ItemMemoryDao from './models/itemMemoryDao';
import logger from './util/logger';
import { Pool } from 'pg';

export interface ServerOpts {
    port: number;
    environment?: string;
    pool: Pool;
}

export function start(opts: ServerOpts) {
    const app = new koa();
    const router = new koaRouter();


    const itemDao = new ItemMemoryDao();
    const itemsHandler = new ItemsHandler(itemDao);

    router.get('/', async (ctx: koa.Context) => {
        ctx.header
        ctx.body = {"hi": "hello world"};
    });

    app.use(koaLogger());
    router.get('/v1/items', itemsHandler.list)

    app.use(koaStatic('.', { index: 'dist/index.html' }));
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(opts.port, () => {
        logger.info(`example starting at ${opts.port}`);
    });
}
