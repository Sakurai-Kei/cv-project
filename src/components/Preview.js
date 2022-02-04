import React, { Component } from 'react'

class Preview extends Component {

    render() {
        const {} = this.props;

        return(
            <div className='Preview'>
                <div className='GenInfoPreview'>
                    <div className='NamePreview'>Sakurai Kei</div>
                    <div>Phone Number</div>
                    <div>Email</div>
                </div>
                <div className='PracExpTitle'>
                    Experience
                </div>
                <div className='PracExpPreview'>
                    <div>Jan, 2021 - Jan, 2022</div>
                    <div>
                        <div>Jr Programmer</div>
                        <div>Fake Company Ltd, Google Map</div>
                    </div>
                </div>
                <div className='EduExpTitle'>
                    Education
                </div>
                <div className='EduExpPreview'>
                    <div>Jan, 2016 - Jan, 2021</div>
                    <div>
                        <div>University TOP</div>
                        <div>Bachelor Degree in Google Self Study</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preview