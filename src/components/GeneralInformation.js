/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class GeneralInformation extends Component {

    render() {

        return(
            <div className='GenInfo'>
                <div>General Information</div>
                <input className='name' placeholder='Name' />
                <input className='phone' placeholder='Phone Number' />
                <input className='email' placeholder='Email' />
            </div>
        );
    }
}

export default GeneralInformation