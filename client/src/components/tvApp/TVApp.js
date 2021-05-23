import './tv.css'
import axios from 'axios'
import TV from '../../models/TV'
import { connect } from 'react-redux'
import React, {Component} from 'react'
import { tvChangeVideo, tvChangeVolume, tvChangeSelector } from '../../actions'
import { bindActionCreators } from 'redux'
import Screen from '../../components/screen/Screen'
import Volume from '../../components/volume/Volume'
import NumberSelect from '../../components/numberSelect/NumberSelect'

class TVApp extends Component {
    
    constructor(props) {
        super(props)

        this.startValues()
    }

    startValues() {
        const { tvChangeVideo, tvChangeVolume, tvChangeSelector } = this.props
        this.TV = new TV(tvChangeVideo, tvChangeVolume, tvChangeSelector)
    }

    componentDidMount() {
        this.getChannels()
    }

    async getChannels() {
        try {
            const url = process.env.REACT_APP_CHANNELS
            const response = await axios.get(url)
            this.TV.updateValues(response.data)
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

        if (event.code === "ArrowUp")
            this.TV.upChannel()

        if (event.code === "ArrowDown")
            this.TV.downChannel()

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
  bindActionCreators({ tvChangeVideo, tvChangeVolume, tvChangeSelector }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TVApp)