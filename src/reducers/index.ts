import { combineReducers } from 'redux'
import items from './items'
import columns from './columns'

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    items: any[],
    columns: any[]
}

export const rootReducer = combineReducers({
    items,
    columns
})


export default rootReducer;