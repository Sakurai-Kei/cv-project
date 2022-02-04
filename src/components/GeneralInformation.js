import React, { Component } from 'react'

class GeneralInformation extends Component {

    render() {
        const {} = this.props

        return(
            <div className='GenInfo'>
                <div>General Information</div>
                <input placeholder='Name'></input>
                <input placeholder='Phone Number'></input>
                <input placeholder='Email'></input>

            </div>
        );
    }
}

export default GeneralInformation