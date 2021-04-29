import React from 'react'
import TimingShow from '../TimingShow'
import './Channel.css'

class Channel extends TimingShow {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => {
            this.show()
        }, 5000)

        setTimeout(() => {
            this.show()
        }, 30000)
    }
    
    render() {
        return (
            <div className={`Channel ${this.state.show && "show"}`}>
                <p>12</p>
            </div>
        )
    }
}

export default Channel