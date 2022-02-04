import React, { Component } from 'react'

class PracticalExperience extends Component {

    render() {
        const {} = this.props

        return(
            <div className='PracExp'>
                <div>Work Experience</div>
                <input placeholder='Position'></input>
                <input placeholder='Company'></input>
                <input placeholder='Address'></input>
                <input placeholder='From'></input>
                <input placeholder='To'></input>
            </div>
        );
    }
}

export default PracticalExperience