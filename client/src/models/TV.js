import Channel from './Channel'

class TV {
    constructor(onChangeVideoEvent, onChangeVolumeEvent, onChangeSelectorEvent) {
        this.channel = new Channel()
        this.volume = .7
        this.select = ""
        this.timeSelect = null
        this.channels = []

        this.onChangeVideoEvent = onChangeVideoEvent
        this.onChangeVolumeEvent = onChangeVolumeEvent
        this.onChangeSelectorEvent = onChangeSelectorEvent
        
        this.onChangeVideo()
        this.onChangeVolume()
        this.onChangeSelector()
    }

    updateValues(data) {
        /*+if (data.channels) 
            this.channels = data.channels.map((item) => {
                const c = new Channel()

                c.number = parseInt(item.number)
                c.videos = item.videos

                return c
            })

        if (data.volume)
            this.volume = parseFloat(data.volume)*/
    }

    upVolume() {
        this.volume += 0.1
        this.volume = parseFloat(this.volume.toFixed(1))

        if (this.volume > 1)
            this.volume = 1

        this.onChangeVolume()
    }

    downVolume() {
        this.volume -= 0.1
        this.volume = parseFloat(this.volume.toFixed(1))

        if (this.volume < 0)
            this.volume = 0

        this.onChangeVolume()
    }

    selectChannel(number) {
        this.clearTimeSelect()

        if (this.select.length >= 2)
            this.select = ""

        this.select += number.toString()

        if (this.select?.length >= 2) {
            this.changeChannel(parseInt(this.select))
        }
        else {
            this.timeSelect = setTimeout(() => {
                this.changeChannel(parseInt(this.select))
                this.clearTimeSelect()
            }, 3000)

            this.onChangeSelector()
        }
    }

    changeChannel(number) {
        this.select = number.toString().padStart(2, '0')
        this.onChangeSelector()
    }

    clearTimeSelect() {
        if (this.timeSelect) {
            clearTimeout(this.timeSelect)
            this.timeSelect = null
        }
    }

    onChangeVideo() {
        if (this.onChangeVideoEvent)
            this.onChangeVideoEvent(this.channel.getNextVideo())
    }

    onChangeVolume() {
        if (this.onChangeVolumeEvent)
            this.onChangeVolumeEvent(this.volume)
    }

    onChangeSelector() {
        if (this.onChangeSelectorEvent)
            this.onChangeSelectorEvent(this.select)
    }
}

export default TV