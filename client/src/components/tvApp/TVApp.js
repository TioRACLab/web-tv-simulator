import './tv.css'
import axios from 'axios'
import TV from '../../models/TV'
import { connect } from 'react-redux'
import React, {Component} from 'react'
import { tvChangeVolume, tvChangeSelector } from '../../actions'
import { bindActionCreators } from 'redux'
import Screen from '../../components/screen/Screen'
import Volume from '../../components/volume/Volume'
import NumberSelect from '../../components/numberSelect/NumberSelect'

class TVApp extends Component {
    
    constructor(props) {
        super(props)

        /*this.volumeControl = React.createRef()
        this.numberSelect = React.createRef()
        this.screenControl = React.createRef()*/

        this.startValues()
    }

    startValues() {
        const { tvChangeVolume, tvChangeSelector } = this.props

        this.TV = new TV(tvChangeVolume, tvChangeSelector)
    }

    componentDidMount() {
        //this.getChannels()
    }

    async getChannels() {
        try {
            const url = process.env.REACT_APP_CHANNELS
            const response = await axios.get(url)
            const TV = this.state.TV
            TV.updateValues(response.data)
            this.setState({TV})

            const channel = localStorage.getItem("@TV/currentChannel")

            if (channel != null)
                this.selectChannel(channel)
        }
        catch {
            console.log("Ops!!!")
        }
    }

    onKeyUp = (event) => {
        if (event.code === "NumpadAdd"
            || event.code === "ArrowRight") {
                this.TV.upVolume()
        }

        if (event.code === "NumpadSubtract"
            || event.code === "ArrowLeft") {
                this.TV.downVolume()
        }

        if (event.code.includes("Digit"))
            this.TV.selectChannel(parseInt(event.code[5]))

        if (event.code.includes("Numpad"))
            this.TV.selectChannel(parseInt(event.code[6]))
    }

    render() {
        return (
            <div className="TV" tabIndex="0" onKeyUp={this.onKeyUp}>
                <Screen TV={this.TV} />
                <Volume TV={this.TV} />
                <NumberSelect TV={this.TV} />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    volume: store.tvState.volume
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ tvChangeVolume, tvChangeSelector }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TVApp)