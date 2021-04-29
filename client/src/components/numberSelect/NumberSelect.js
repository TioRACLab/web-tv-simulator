import React from 'react'
import TimingShow from '../TimingShow'
import './NumberSelect.css'

class NumberSelect extends TimingShow {

    componentDidMount() {
        /*setTimeout(() => {
            this.show()
        }, 5000)

        setTimeout(() => {
            this.show()
        }, 30000)*/
    }
    
    render() {
        return (
            <div className={`NumberSelect ${this.state.show && "show"}`}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default NumberSelect