import Channel from './Channel'

class TV {
    constructor() {
        this.channel = new Channel()
        this.volume = 1
        this.select = null
        this.timeSelect = null
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

    getSelector() {
        if (this.select)
            return this.select
        
        return this.channel.number
    }

    selectChannel(number) {
        if (this.select == null)
            this.select = number.toString()
        else
            this.select += number.toString()

        if (this.select?.length >= 2) {
            this.channel.number = this.select
            this.select = null
            this.clearTimeSelect()
        }
        else {
            this.clearTimeSelect()

            this.timeSelect = setTimeout(() => {
                this.channel.number = this.select
                this.select = null
                clearTimeout(this.timeSelect)
                this.timeSelect = null
            }, 3000)
        }
    }

    clearTimeSelect() {
        if (this.timeSelect) {
            clearTimeout(this.timeSelect)
            this.timeSelect = null
        }
    }
}

export default TV