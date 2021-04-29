import './App.css'
import TV from './models/TV'
import React, {Component} from 'react'
import Screen from './components/screen/Screen'
import Volume from './components/volume/Volume'
import Channel from './components/channel/Channel'

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            TV: new TV()
        }
    }

    onKeyUp = (event) => {
        const TV = this.state.TV

        if (event.code === "NumpadAdd"
            || event.code === "ArrowRight") {
                TV.upVolume()
                this.setState({TV})
        }

        if (event.code === "NumpadSubtract"
            || event.code === "ArrowLeft") {
                TV.downVolume()
                this.setState({TV})
        }

        //console.log(event.code)
    }

    render() {
        return (
            <div className="App" tabIndex="0" onKeyUp={this.onKeyUp}>
                <Screen volume={this.state.TV.volume} />
                <Channel />
                <Volume volume={this.state.TV.volume} />
            </div>
        );
    }
}

export default App