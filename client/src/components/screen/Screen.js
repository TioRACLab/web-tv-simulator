import './Screen.css'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class Screen extends Component {

    constructor(props) {
        super(props)

        this.videoControl = React.createRef()        
    }

    onVideoEnded = () => {
        this.props.TV?.onChangeVideo()

        if (this.videoControl.current) {
            this.videoControl.current.currentTime = 0
            this.videoControl.current.play()
        }
    }
    
    render() {
        const { video, volume } = this.props

        if (this.videoControl.current)
            this.videoControl.current.volume = volume

        return <video className="Screen" ref={this.videoControl} autoPlay={true} onEnded={this.onVideoEnded} src={video} />
    }
}

const mapStateToProps = store => ({
    video: store.tvState.video,
    volume: store.tvState.volume
})

export default connect(mapStateToProps)(Screen)