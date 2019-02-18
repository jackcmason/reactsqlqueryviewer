import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Table from "./components/Table";
//import TableRow from './components/TableRow'
//import TableHeaderRow from "./components/TableHeaderRow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button/>
          {/*<TableHeaderRow header = {{id:1, name:"jack"}}/>*/}
          {/*<TableRow row = {{id:1, name:"jack"}}/>*/}
          <Table rows = {[{id: 1, name: "jack"},{id: 2, name:"john"}]}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
