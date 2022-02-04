/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
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