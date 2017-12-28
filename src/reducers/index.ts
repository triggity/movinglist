import { combineReducers } from 'redux'
import items, { itemState } from './items'
import columns from './columns'

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    items: itemState,
    columns: any[]
}

export const rootReducer = combineReducers({
    items,
    columns
})


export default rootReducer;