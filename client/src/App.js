import './App.css'
import Screen from './components/screen/Screen'
import Volume from './components/volume/Volume'
import Channel from './components/channel/Channel'

function App() {
    return (
        <div className="App">
            <Screen />
            <Channel />
            <Volume />
        </div>
    );
}

export default App;