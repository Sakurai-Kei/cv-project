import React, { Component } from 'react'

class EducationalExperience extends Component {

    render() {

        return(
            <div className='EduExp'>
                <div>Education History</div>
                <input className='institution' placeholder='Institution Name'></input>
                <input className='degree' placeholder='Degree'></input>
                <input className='eduFrom' placeholder='From'></input>
                <input className='eduTo' placeholder='To'></input>

            </div>
        );
    }
}

export default EducationalExperience