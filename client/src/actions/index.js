import { 
          TV_CHANGE_VOLUME,
          TV_CHANGE_SELECTOR } from './actionTypes';



export const tvChangeVolume = value => ({
    type: TV_CHANGE_VOLUME,
    volume: value
})

export const tvChangeSelector = value => ({
    type: TV_CHANGE_SELECTOR,
    selector: value
})