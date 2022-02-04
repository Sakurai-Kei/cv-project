/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class Submit extends Component {

    render(){
        const { submit } = this.props

        return(
            <div>
                <button onClick={submit}>Add</button>
            </div>
        );
    }
}

export default Submit