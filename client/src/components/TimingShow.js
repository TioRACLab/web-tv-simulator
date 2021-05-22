import { Component } from 'react'

class TimingShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            startDate: new Date()
        }

        this.showTiming = 4
        this.looping = null
    }

    show() {
        setTimeout(() => { this.setState({show: true, startDate: new Date()}) }, 10)

        if (!this.looping) {
            this.looping = setInterval(this.showLooping, 250)
        }
    }

    showLooping = () => {
        const diff = ((new Date()).getTime() - this.state.startDate.getTime()) / 1000

        if (diff > this.showTiming) {
            clearInterval(this.looping)
            this.looping = null
            this.setState({show: false})
        }
    }

}

export default TimingShow