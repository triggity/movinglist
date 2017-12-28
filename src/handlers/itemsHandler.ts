import * as koa from 'koa';

import ItemMemoryDao  from '../models/itemMemoryDao';
import logger from '../util/logger';



export default class ItemsHandler {
    dao: ItemMemoryDao;
    constructor(dao: ItemMemoryDao) {
        this.dao = dao;
    }
    list = async (ctx: koa.Context) => {
        try {
            ctx.body = await this.dao.list();
        } catch (e ) {
            logger.error('error while retrieving maps', e);
            ctx.response.status = 400;
            return;
        }
    }
}