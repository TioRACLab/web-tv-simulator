import Channel from './Channel'

class TV {
    constructor() {
        this.channel = new Channel()
        this.volume = 1
    }

    upVolume() {
        this.volume += 0.1

        if (this.volume > 1)
            this.volume = 1
    }

    downVolume() {
        this.volume -= 0.1

        if (this.volume < 0)
            this.volume = 0
    }
}

export default TV