import './styles/App.css';
import React, { Component } from 'react'

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
        
      </div>
    );
  }
}


export default App;
