import React, { Component } from "react";

import ChessBoard from "../components/ChessBoard/ChessBoard";

class chessBoard extends Component {
  pawns = Array.from(Array(8)).map((pawn, i) => {
    return {
      img:
        "https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/black_pawn.png",
      initPlace: i + 8,
      move: "",
    };
  });
  state = {
    pieces: { pawns: this.pawns },
  };
  render() {
    return (
      <>
        <ChessBoard pieces={this.state.pieces} />
      </>
    );
  }
}

export default chessBoard;
