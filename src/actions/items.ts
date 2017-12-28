// import fetch from 'node-fetch';
// import * as _ from 'ramda';
import { ListItemsResponse } from '../handlers/itemsHandler';
import item from '../models/item';

export enum itemActions {
  requestItems = 'REQUEST_ITEMS',
  receiveItems = 'RECEIVE_ITEMS',
  invalidateItems = 'INVALIDATE_ITEMS'
}

export interface actionsItemsIFace {
  type: itemActions
  items?: item[],
  receivedAt?: number
}

function requestItems(): actionsItemsIFace {
  return {
    type: itemActions.requestItems
  }
}

function receiveItems(json: ListItemsResponse): actionsItemsIFace {
  return {
    type: itemActions.receiveItems,
    items: json.data,
    receivedAt: Date.now()
  }
}

export function invalidateItems(): actionsItemsIFace {
  return {
    type: itemActions.invalidateItems
  }
}

export function fetchItems() {
  return dispatch => {
    dispatch(requestItems())
    return fetch(`/v1/items`)
      .then(response => response.json())
      .then((json: ListItemsResponse) => dispatch(receiveItems(json)))
  }
}

/*
function shouldFetchItems(state) {
  const items = state.itemsBySubreddit[subreddit]
  if (!items) {
    return true
  } else if (items.isFetching) {
    return false
  } else {
    return items.didInvalidate
  }
}
*/

export function fetchItemsIfNeeded() {
  return (dispatch) => {
    return dispatch(fetchItems());

  }
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  // return (dispatch, getState) => {
  //   if (shouldFetchItems(getState(), subreddit)) {
  //     // Dispatch a thunk from thunk!
  //     return dispatch(fetchItems(subreddit))
  //   } else {
  //     // Let the calling code know there's nothing to wait for.
  //     return Promise.resolve()
  //   }
  // }
}