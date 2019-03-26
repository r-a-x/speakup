import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  addListener(props){
    console.log("Listener called !!");
  }

  render() {
    return (
      <div>
        <div className="Header">
          <button onClick={ () => {this.addListener();}  }>
            Become a Listener
          </button>
        </div>
        <div className="Body">
          It's ok to speak up sometime.....
        </div>
        <div className="Footer"></div>
      </div>


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
