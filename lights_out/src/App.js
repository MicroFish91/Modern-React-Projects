import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Board rows={5} cols={5} startNum={5} />
      </div>
    );
  }
}

export default App;
