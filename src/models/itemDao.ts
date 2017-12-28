import { Pool } from 'pg';
import Item from './item';
import Action from './action';

const items: Item[] = [
    {
        name: 'item1',
        status: true,
        action: Action.keep
    }
]
export default class ItemDao {
    pool: Pool;

    constructor() {
        // this.pool = pool;
    }

    list(): Promise<Item[]> {
        return Promise.resolve(items);
    }
}