import { combineReducers } from 'redux'
import { tvReducer } from './tvReducer'
import { clickReducer } from './clickReducer'


export const Reducers = combineReducers({
  clickState: clickReducer,
  tvState: tvReducer
})