import Item from './item';
import Action from './action';

const items: Item[] = [
    {
        id: 1,
        name: 'item1',
        status: true,
        action: Action.keep
    },
    {
        id: 2,
        name: 'item2',
        status: false,
        action: Action.give
    }
]
export default class ItemMemoryDao {
    async list(): Promise<Item[]> {
        return items;
    }
}