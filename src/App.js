/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Header from './components/Header'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'

class App extends Component {
  
  render() {
    
    return(
      <div className='App'>
        <Header title='CV-Generator' />
        <ApplicationForm />
        <Footer author='Sakurai Kei' year='2022' />
      </div>
    );
  }
}


export default App;
