import * as koa from 'koa';

import Action from '../models/action';
import Item from '../models/Item';
import logger from '../util/logger';


const items: Item[] = [
    {
        name: 'item1',
        status: true,
        action: Action.keep
    }
]


export default class ItemsHandler {
    list = async (ctx: koa.Context) => {
        try {
            ctx.body = items;
        } catch (e ) {
            logger.error('error while retrieving maps', e);
            ctx.response.status = 400;
            return;
        }
    }
}