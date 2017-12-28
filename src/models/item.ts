import Action from './action';

interface Item {
    id: number;
    name: string;
    status: boolean;
    action: Action;
}

export default Item;