import './Volume.css'
import React from 'react'
import { connect } from 'react-redux'
import TimingShow from '../TimingShow'

class Volume extends TimingShow {
    constructor(props) {
        super(props)
        const { volume } = this.props
        this.volume = volume
    }

    getCurrentVolume = (volume) => {
        const volumeArray = []
        const realVolume = volume * 10

        for (let i = 0; i < 10; i++) {
            if (i < realVolume)
                volumeArray.push("█")
            else
                volumeArray.push("■")
        }

        return volumeArray.join(" ")
    }
    
    render() {
        const { volume } = this.props

        if (this.volume !== volume) {
            this.volume = volume
            this.show()
        }

        return (
            <div className={`Volume ${this.state.show && "show"}`}>
                <div className="volumePosition">
                    <p className="title">Volume</p>
                    <p className="current">{this.getCurrentVolume(volume)}</p>         
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    volume: store.tvState.volume
})

export default connect(mapStateToProps)(Volume)