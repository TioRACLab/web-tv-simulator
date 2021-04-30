import './App.css'
import axios from 'axios'
import TV from './models/TV'
import React, {Component} from 'react'
import Screen from './components/screen/Screen'
import Volume from './components/volume/Volume'
import NumberSelect from './components/numberSelect/NumberSelect'

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            TV: new TV()
        }

        this.volumeControl = React.createRef()
        this.numberSelect = React.createRef()   
    }

    async componentDidMount() {
        try {
            const url = process.env.REACT_APP_CHANNELS
            const response = await axios.get(url)
            const TV = this.state.TV
            TV.updateValues(response.data)
            this.setState({TV})
        }
        catch {
            console.log("Ops!!!")
        }
    }

    onKeyUp = (event) => {
        if (event.code === "NumpadAdd"
            || event.code === "ArrowRight") {
                this.upVolume()
        }

        if (event.code === "NumpadSubtract"
            || event.code === "ArrowLeft") {
                this.downVolume()
        }

        if (event.code.includes("Digit"))
            this.selectChannel(parseInt(event.code[5]))

        if (event.code.includes("Numpad"))
            this.selectChannel(parseInt(event.code[6]))
    }

    selectChannel(number) {
        const TV = this.state.TV
        TV.selectChannel(number)
        this.setState({TV})
        this.numberSelect?.current.show()
    }

    upVolume = () => {
        const TV = this.state.TV
        TV.upVolume()
        this.setState({TV})
        this.volumeControl.current.show()
    }

    downVolume = () => {
        const TV = this.state.TV
        TV.downVolume()
        this.setState({TV})
        this.volumeControl.current.show()
    }

    render() {
        return (
            <div className="App" tabIndex="0" onKeyUp={this.onKeyUp}>
                <Screen volume={this.state.TV.volume} />
                <NumberSelect ref={this.numberSelect} value={this.state.TV.getSelector()} />
                <Volume ref={this.volumeControl} volume={this.state.TV.volume} />
            </div>
        );
    }
}

export default App