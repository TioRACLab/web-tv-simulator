import React, { Component } from 'react'
import './Screen.css'

class Screen extends Component {

    constructor(props) {
        super(props)

        this.NoSignalVideo = "/videos/noSignal.mp4"
        //this.NoSignalVideo = "/videos/Teste.mp4"
        this.videoControl = React.createRef()
    }
    

    getVideoUrl = () => {
        return this.NoSignalVideo
    }
    
    render() {
        if (this.videoControl.current)
            this.videoControl.current.volume = this.props.volume

        return <video className="Screen" ref={this.videoControl} autoPlay={true} loop={true} src={this.getVideoUrl()} />
    }
}

export default Screen