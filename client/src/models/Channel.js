class Channel {
    constructor() {
        this.number = 3
        this.videos = []
        this.randomVideos = []
    }

    containsSignal = () => {
        return this.videos && this.videos.length > 0
    }

    getNextVideo() {
        if (this.containsSignal()) {
            if (this.randomVideos.length <= 0) {
                this.randomVideos = [...this.videos]
                this.randomVideos = this.randomVideos.sort(() => Math.random() - 0.5)
            }

            return this.randomVideos.shift()
        }

        return NoSignalVideo
    }
}

const NoSignalVideo = "/videos/noSignal.mp4"

export default Channel