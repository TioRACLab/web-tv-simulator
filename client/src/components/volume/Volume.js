import React from 'react'
import TimingShow from '../TimingShow'
import './Volume.css'

class Volume extends TimingShow {

    getCurrentVolume = () => {
        const volumeArray = []
        const realVolume = this.props.volume * 10

        for (let i = 0; i < 10; i++) {
            if (i < realVolume)
                volumeArray.push("█")
            else
                volumeArray.push("■")
        }
        
        return volumeArray.join(" ")
    }
    
    render() {
        return (
            <div className={`Volume ${this.state.show && "show"}`}>
                <div className="volumePosition">
                    <p className="title">Volume</p>
                    <p className="current">{this.getCurrentVolume()}</p>
                </div>
            </div>
        )
    }
}

export default Volume