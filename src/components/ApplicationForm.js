import React, { Component } from 'react'
import GeneralInformation from './GeneralInformation'
import PracticalExperience from './PracticalExperience'
import EducationalExperience from './EducationalExperience'
import Submit from './Submit'
import Preview from './Preview'

class ApplicationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            phone: "",
            email: "",
            workExp: {
                position: "",
                company: "",
                address: "",
                period: "",
            },
            workExpLists: [],
            eduExp: {
                institution: "",
                degree: "",
                period: "",
            },
            eduExpLists: []
        }

        this.submitInfo = this.submitInfo.bind(this);
    }


    submitInfo() {
        this.setState({
            name: isEmpty(document.querySelector('.name').value, this.state.name),
            phone: isEmpty(document.querySelector('.phone').value, this.state.phone),
            email: isEmpty(document.querySelector('.email').value, this.state.email),
            workExp: {
                position: isEmpty(document.querySelector('.position').value, this.state.workExp.position),
                company: isEmpty(document.querySelector('.company').value, this.state.workExp.company),
                address: isEmpty(document.querySelector('.workAddress').value, this.state.workExp.address),
                period: isEmpty(`${document.querySelector('.workFrom').value} - ${document.querySelector('.workTo').value}`, this.state.workExp.period),
            },
            eduExp: {
                institution: isEmpty(document.querySelector('.institution').value, this.state.eduExp.institution),
                degree: isEmpty(document.querySelector('.degree').value, this.state.eduExp.degree),
                period: isEmpty(`${document.querySelector('.eduFrom').value} - ${document.querySelector('.eduTo').value}`, this.state.eduExp.period),
            }
        });
        Array.from(document.querySelectorAll('input')).forEach( input => input.value = "")
        console.log(this.workExp.address)
    }

    render() {

        return(
            <div className='AppContainer'>
                <div className='ApplicationFormModal'>
                    <div className='Form'>
                        <GeneralInformation />
                        <PracticalExperience />
                        <EducationalExperience />
                        <Submit submit={this.submitInfo} />
                    </div>
                </div>
                <div className='Preview'>
                    <Preview obj={ this.state } />
                </div>
            </div>
        );
    }
}

function isEmpty(value, original) {
    if(value === "" || value === " - ") {
        return original
    }
    else {
        return value
    }
}

export default ApplicationForm