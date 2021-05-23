import {    TV_CHANGE_VIDEO,
            TV_CHANGE_VOLUME,
            TV_CHANGE_SELECTOR } from './actionTypes';

export const tvChangeVideo = value => ({
    type: TV_CHANGE_VIDEO,
    video: value
})

export const tvChangeVolume = value => ({
    type: TV_CHANGE_VOLUME,
    volume: value
})

export const tvChangeSelector = value => ({
    type: TV_CHANGE_SELECTOR,
    selector: value
})