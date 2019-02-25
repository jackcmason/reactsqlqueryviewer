import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Table from "./components/Table";


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table/>
          <Button text = "example" query = "SELECT * FROM kits" />
        </header>
      </div>
    );
  }
}

export default App;
