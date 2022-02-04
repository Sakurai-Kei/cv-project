/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class Header extends Component {

    render() {
        const { title } = this.props;

        return(
            <div className='Header'>{ title }</div>
        );
    }
}

export default Header