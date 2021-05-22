import { CLICK_UPDATE_VALUE, 
          TV_CHANGE_VOLUME,
          TV_CHANGE_SELECTOR } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
})

export const tvChangeVolume = value => ({
    type: TV_CHANGE_VOLUME,
    volume: value
})

export const tvChangeSelector = value => ({
    type: TV_CHANGE_SELECTOR,
    selector: value
})