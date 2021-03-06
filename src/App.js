import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponent';
// eslint-disable-next-line
import Apps from './LearnApps';

class App extends Component {
  componentDidMount() {
    console.log('App has mounted.');
  }

  consoleLog() {
    console.log('Extra click.');
    this.setState({
      user_name: 'Gianfranco'
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      user_name: 'Daniel',
    };
  }

  render() {
    // eslint-disable-next-line
    var testOne = Date();

    const arrayInfo = ['welcome', 'to', 'jamaica', 'motherfucker', 'eat', 'shit'];
    var arrayToRender = [];
    var i=0;
    arrayInfo.forEach(function(word) {
      arrayToRender.push(
        <p key={i++} id={i}>{word}</p>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p style={{fontSize:"35px",color:"#ff0000"}}>I allready started. Now go away.</p>
          <p>{this.state.user_name}</p>
        </div>

        <NameComponent user_name={this.state.user_name} />

        <button onClick={() => {this.setState({user_name: 'Lore Lebadoi'})}}>
          Press Me!
        </button>
        <button onClick={this.consoleLog.bind(this)}>
          Extra click!
        </button>

        {arrayInfo.map(word => {
          return (
            <p key={i++} id={i}>{word}</p>
          )
        })}
      </div>
    );
  }
}

export default App;
