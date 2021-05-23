class Channel {
    constructor() {
        this.number = 0
        this.videos = []
    }

    containsSignal = () => {
        return this.videos && this.videos.length > 0
    }

    getNextVideo() {
        if (this.containsSignal()) {

        }

        return NoSignalVideo
    }
}

const NoSignalVideo = "/videos/noSignal.mp4"

export default Channel