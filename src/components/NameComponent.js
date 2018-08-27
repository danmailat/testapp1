import React, { Component } from 'react';

class NameComponent extends Component {
  componentDidMount() {
    console.log('NameComponent has mounted.');
  }
  
  render() {

    return (
      <div className="App">
        <p style={{color:"blue"}}>Dan</p>
      </div>
    );
  }
}

export default NameComponent;
