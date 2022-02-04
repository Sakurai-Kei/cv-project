import React, { Component } from 'react'

class EducationalExperience extends Component {

    render() {
        const {} = this.props

        return(
            <div className='EduExp'>
                <div>Education History</div>
                <input placeholder='Institution Name'></input>
                <input placeholder='Degree'></input>
                <input placeholder='From'></input>
                <input placeholder='To'></input>

            </div>
        );
    }
}

export default EducationalExperience