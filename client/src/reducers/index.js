import { combineReducers } from 'redux'
import { tvReducer } from './tvReducer'

export const Reducers = combineReducers({
  tvState: tvReducer
})