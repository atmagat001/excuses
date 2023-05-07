
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Excuses from './components/Excuses';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      excuses: [],
    }
  }


  componentDidMount(){
    
    fetch('http://localhost:3000/excuses.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        excuses: data
      })
    }
    )
    
  }



  render (){
    
    return (
      <div className="App">
        <Header/>
        <Excuses
          excuses={this.state.excuses}
        />
      </div>
    );
  }
 
}

export default App;
