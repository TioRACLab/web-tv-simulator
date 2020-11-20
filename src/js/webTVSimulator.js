import VideoTV from "./videoTV.js"
import Channel from "./channel.js"

export class WebTVSimulator {
    constructor() {
        this.videoTV = new VideoTV(this),
        this.channel = new Channel(this)
    }
}

window.webTVSimulator = WebTVSimulator()

export default window.webTVSimulator