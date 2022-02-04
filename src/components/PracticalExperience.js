/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class PracticalExperience extends Component {

    render() {

        return(
            <div className='PracExp'>
                <div>Work Experience</div>
                <input className='position' placeholder='Position' />
                <input className='company' placeholder='Company' />
                <input className='workAddress' placeholder='Address' />
                <input className='workFrom' placeholder='From' />
                <input className='workTo' placeholder='To' />
            </div>
        );
    }
}

export default PracticalExperience