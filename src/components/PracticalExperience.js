import React, { Component } from 'react'

class PracticalExperience extends Component {

    render() {

        return(
            <div className='PracExp'>
                <div>Work Experience</div>
                <input className='position' placeholder='Position'></input>
                <input className='company' placeholder='Company'></input>
                <input className='workAddress' placeholder='Address'></input>
                <input className='workFrom' placeholder='From'></input>
                <input className='workTo' placeholder='To'></input>
            </div>
        );
    }
}

export default PracticalExperience