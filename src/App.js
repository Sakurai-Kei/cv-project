import React, { Component } from 'react'
import Header from './components/Header'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'some value'
    }
  }

  render() {
    const { placeholder } = this.state
    
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
