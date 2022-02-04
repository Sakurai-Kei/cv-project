/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class EducationalExperience extends Component {

    render() {

        return(
            <div className='EduExp'>
                <div>Education History</div>
                <input className='institution' placeholder='Institution Name' />
                <input className='degree' placeholder='Degree' />
                <input className='eduFrom' placeholder='From' />
                <input className='eduTo' placeholder='To' />
            </div>
        );
    }
}

export default EducationalExperience