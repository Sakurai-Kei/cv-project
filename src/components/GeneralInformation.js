import React, { Component } from 'react'

class GeneralInformation extends Component {

    render() {

        return(
            <div className='GenInfo'>
                <div>General Information</div>
                <input className='name' placeholder='Name'></input>
                <input className='phone' placeholder='Phone Number'></input>
                <input className='email' placeholder='Email'></input>

            </div>
        );
    }
}

export default GeneralInformation