import { Pool } from 'pg';
import Item from './item';

// const items: Item[] = [
//     {
//         name: 'item1',
//         status: true,
//         action: Action.keep
//     }
// ]
export default class ItemDao {
    pool: Pool;
    tableName: String = 'items';

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async list(): Promise<Item[]> {
        const client = await this.pool.connect();
        const result  = await client.query(`SELECT * FROM ${this.tableName}`);
        client.release();
        const items: Item[] = result.rows;
        return items;
    }
}