import * as koa from 'koa';
import * as koaRouter from 'koa-router';

import ItemsHandler from './handlers/itemsHandler';
import { ItemDao } from './models';
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


    const itemDao = new ItemDao(opts.pool);
    const itemsHandler = new ItemsHandler(itemDao);

    router.get('/', async (ctx: koa.Context) => {
        ctx.header
        ctx.body = {"hi": "hello world"};
    });

    router.get('/v1/items', itemsHandler.list)

    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(opts.port, () => {
        logger.info(`example starting at ${opts.port}`);
    });
}
