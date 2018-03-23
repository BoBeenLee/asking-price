import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'react-emotion';

const Root = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Root className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Root>
    );
  }
}

export default App;
