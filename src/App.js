import React, { Component } from 'react';
import './App.css';
import Table from "./components/Table";


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table/>
        </header>
      </div>
    );
  }
}

export default App;
