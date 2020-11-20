

export default class Channel {
    constructor(webTVSimulator) {
        this.webTVSimulator = webTVSimulator
        this.element = document.querySelector('[data-type="ChannelLabel"]')
        this.number = 3
        this.signal = false
        this.playlist = []
    }
}