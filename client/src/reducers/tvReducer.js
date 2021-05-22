import { TV_CHANGE_VOLUME, TV_CHANGE_SELECTOR } from '../actions/actionTypes'

const initialState = {
  volume: 0,
  selector: ""
}

export const tvReducer = (state = initialState, action) => {

  switch (action.type) {
    case TV_CHANGE_VOLUME:
        return {
            ...state,
            volume: action.volume
        }
    case TV_CHANGE_SELECTOR:
        return {
            ...state,
            selector: action.selector
        }

    default:
        return state
  }
};