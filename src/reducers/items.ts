import { itemActions, actionsItemsIFace } from '../actions/items';
// import Item from '../models/item';
// import logger from '../util/logger';

const defaultItems = [
    {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    },
    {
        name: 'Michael Truong',
        age: 28,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }
]

const defaultState = {
    isFetching: false,
    didInvalidate: false,
    items: defaultItems,
}
export interface itemState {
    isFetching: boolean,
    didInvalidate: boolean,
    items: any[],
    lastUpdated?: number
}

export const items = (state: itemState = defaultState, action: actionsItemsIFace): itemState => {
    switch (action.type) {
        case itemActions.requestItems:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case itemActions.invalidateItems:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case itemActions.receiveItems:
            console.log("FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", action.items);
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: defaultItems,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default items