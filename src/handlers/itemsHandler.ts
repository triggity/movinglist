import * as koa from 'koa';

import ItemMemoryDao  from '../models/itemMemoryDao';
import Item from '../models/item';
import logger from '../util/logger';



export class ItemsHandler {
    dao: ItemMemoryDao;
    constructor(dao: ItemMemoryDao) {
        this.dao = dao;
    }
    list = async (ctx: koa.Context) => {
        try {
            const data = await this.dao.list();
            ctx.body = { data: data };
        } catch (e ) {
            logger.error('error while retrieving maps', e);
            ctx.response.status = 400;
            return;
        }
    }
}

export interface ListItemsResponse {
    data: Item[];
}

export default ItemsHandler;