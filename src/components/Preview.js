/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class Preview extends Component {

    render() {
        const { obj } = this.props;

        return(
            <div className='Preview'>
                <div className='GenInfoPreview'>
                    <div className='NamePreview'>{ obj.name }</div>
                    <div>{ obj.phone }</div>
                    <div>{ obj.email }</div>
                </div>
                <div className='PracExpTitle'>
                    Experience
                </div>
                <div className='PracExpPreview'>
                    <div>{ obj.workExp.period }</div>
                    <div>
                        <div>{ obj.workExp.position }</div>
                        <div>{ obj.workExp.company }, { obj.workExp.address }</div>
                    </div>
                </div>
                <div className='EduExpTitle'>
                    Education
                </div>
                <div className='EduExpPreview'>
                    <div>{ obj.eduExp.period }</div>
                    <div>
                        <div>{ obj.eduExp.institution }</div>
                        <div>{ obj.eduExp.degree }</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preview