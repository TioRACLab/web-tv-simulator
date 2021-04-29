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

        this.volumeControl = React.createRef()
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
            console.log(event.code[5])

            if (event.code.includes("Numpad"))
            console.log(event.code[6])
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
                <Channel />
                <Volume ref={this.volumeControl} volume={this.state.TV.volume} />
            </div>
        );
    }
}

export default App