class Channel {
    constructor() {
        this.number = 0
        this.videos = []
    }

    containsSignal = () => {
        return this.videos && this.videos.length > 0
    }
}

export default Channel