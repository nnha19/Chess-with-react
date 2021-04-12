import "./App.css";
import React, { Component } from "react";

import ChessBoard from "./container/chessBoard";

class App extends Component {
  render() {
    return (
      <div className="chess-board">
        <h1>Chess Game</h1>
        <ChessBoard />
      </div>
    );
  }
}

export default App;
