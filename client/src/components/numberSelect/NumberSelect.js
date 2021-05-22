import React from 'react'
import './NumberSelect.css'
import { connect } from 'react-redux'
import TimingShow from '../TimingShow'

class NumberSelect extends TimingShow {
    constructor(props) {
        super(props)
        const { selector } = this.props
        this.selector = selector
    }
    
    render() {
        const { selector } = this.props

        if (selector && this.selector !== selector) {
            this.selector = selector
            this.show()
        }



        return (
            <div className={`NumberSelect ${this.state.show && "show"}`}>
                <p>{selector}</p>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    selector: store.tvState.selector
})

export default connect(mapStateToProps)(NumberSelect)