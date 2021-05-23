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
        if (data.channels) {
            this.channels = data.channels.map((item) => {
                const c = new Channel()

                c.number = parseInt(item.number)
                c.videos = item.videos

                return c
            })

            this.changeChannel(this.channel.number)
        }

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

    upChannel() {
        if (this.channels.length > 0) {
            const channelsNumber = this.channels.map(c =>  c.number )
            channelsNumber.sort()
            
            for (let x = 0; x < channelsNumber.length; x++) {
                let channelNumber = channelsNumber[x]
                if (channelNumber > this.channel.number) {
                    this.changeChannel(channelNumber)
                    return
                }
            }

            this.changeChannel(channelsNumber[0])
        }
        else {
            this.changeChannel(this.channel.number + 1)
        }
    }

    downChannel() {

        if (this.channels.length > 0) {
            const channelsNumber = this.channels.map(c =>  c.number )
            channelsNumber.sort()
            
            for (let x = channelsNumber.length - 1; x >= 0; x--) {
                let channelNumber = channelsNumber[x]
                if (channelNumber < this.channel.number) {
                    this.changeChannel(channelNumber)
                    return
                }
            }

            this.changeChannel(channelsNumber[channelsNumber.length - 1])
        }
        else {
            this.changeChannel(this.channel.number + 1)
        }
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
        const channelsFiltered = this.channels.filter(c => c.number === number)
        
        if (channelsFiltered.length <= 0) {
            const noSignalChannel = new Channel()
            noSignalChannel.number = number
            this.channel = noSignalChannel
        }
        else {
            this.channel = channelsFiltered[0]
        }

        this.select = number.toString().padStart(2, '0')
        this.onChangeVideo()
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