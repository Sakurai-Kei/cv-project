import React, { Component } from 'react'

class Footer extends Component {

    render() {
        const { author, year } = this.props

        return(
            <div className='Footer'>Copyright © { year } { author }</div>
        );
    }
}

export default Footer