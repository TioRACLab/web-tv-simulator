import React, { Component } from 'react'
import './Screen.css'

class Screen extends Component {

    getVideoUrl = () => {
        return "/videos/noSignal.mp4"
    }
    
    render() {
        return <video className="Screen" autoPlay={true} loop={true} src={this.getVideoUrl()} />
    }
}

export default Screen