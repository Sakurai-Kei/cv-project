import React, { Component } from 'react'

class Submit extends Component {

    render(){
        const { submit } = this.props

        return(
            <div>
                <button onClick={submit}>Add</button>
            </div>
        );
    }
}

export default Submit