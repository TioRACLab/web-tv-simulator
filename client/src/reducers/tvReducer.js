import { TV_CHANGE_VIDEO, TV_CHANGE_VOLUME, TV_CHANGE_SELECTOR } from '../actions/actionTypes'

const initialState = {
  video: "",
  volume: 0,
  selector: ""
}

export const tvReducer = (state = initialState, action) => {

  switch (action.type) {
    case TV_CHANGE_VIDEO:
      return {
          ...state,
          video: action.video
      }

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