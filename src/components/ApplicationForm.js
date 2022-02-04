import React, { Component } from 'react'
import GeneralInformation from './GeneralInformation'
import PracticalExperience from './PracticalExperience'
import EducationalExperience from './EducationalExperience'
import Preview from './Preview'

class ApplicationForm extends Component {

    render() {
        const {} = this.props

        return(
            <div className='AppContainer'>
                <div className='ApplicationFormModal'>
                    <div className='Form'>
                        <GeneralInformation />
                        <PracticalExperience />
                        <EducationalExperience />
                    </div>
                </div>
                <div className='Preview'>
                    <Preview />
                </div>
            </div>
        );
    }
}

export default ApplicationForm