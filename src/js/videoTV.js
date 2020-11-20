export default class VideoTV {
    constructor(webTVSimulator) {
        this.webTVSimulator = webTVSimulator
        this.element = document.querySelector('[data-type="VideoTV"]')
        this.element.addEventListener('ended', this.onEndedMedia)
        this.muteVolume = false
    }

    onEndedMedia(event) {

    }

    playMedia(mediaUrl) {
        this.element.src = mediaUrl
        this.element.load()
        this.element.play()
    }

    volumeUp() {
        if (this.element.volume < 1.0)
            this.element.volume += .1
    }

    volumeDown() {
        if (this.element.volume > 0)
        this.element.volume -= .1
    }

    toggleMute() {
        if (this.muteVolume == false) {
            this.muteVolume = this.element.volume
            this.element.volume = 0.0
        }
        else {
            this.element.volume = this.muteVolume
            this.muteVolume = false
        }
    }
}