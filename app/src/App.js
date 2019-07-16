import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestComponent value="hello"/>
    </div>
  );
}

class TestComponent extends React.Component {
  render(){
    var value = this.props.value;
    return (
      <div>
        Text : {value}
      </div>      
    );
  }
}

export default App;
