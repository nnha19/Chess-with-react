import React, { Component } from "react";

import ChessBoard from "../components/ChessBoard/ChessBoard";
import piecesState from "./piecesContainer";

class chessBoard extends Component {
  state = {
    pieces: "",
    pickedPiece: "",
    moveAbleSquares: "",
  };

  componentDidMount() {
    const { pieces, moveAbleSquares, pickedPiece } = piecesState;
    this.setState({ pieces, moveAbleSquares, pickedPiece });
  }

  showMoveAbleSquaresHandler = (piece) => {
    const moveAble = piece.move();
    let moveAbleSquares = [...this.state.moveAbleSquares];
    moveAbleSquares = moveAble;
    const pickedPiece = piece;
    this.setState({ moveAbleSquares, pickedPiece });
  };

  clearMoveAbleHandler = (e) => {
    if (!e.target.closest(".board__square")) {
      let moveAbleSquares = [...this.state.moveAbleSquares];
      moveAbleSquares = [];
      this.setState({ moveAbleSquares });
    }
  };

  moveThePieceHandler = (moveSquare) => {
    const pieces = { ...this.state.pieces };
    const team = { ...pieces[this.state.pickedPiece.team] };
    const pawns = [...team.pawns];
    const pawn = { ...pawns[6] };
    pawn.initPlace = moveSquare;
    pawns[6] = pawn;
    team.pawns = pawns;
    pieces[this.state.pickedPiece.team] = team;
    this.setState({ pieces: pieces });
  };

  render() {
    const { pieces, moveAbleSquares, pickedPiece } = this.state;
    return pieces && moveAbleSquares && pickedPiece ? (
      <>
        <ChessBoard
          clearMoveAble={this.clearMoveAbleHandler}
          showMoveAbleSquares={(piece) =>
            this.showMoveAbleSquaresHandler(piece)
          }
          pieces={pieces}
          moveAbleSquares={moveAbleSquares}
          moveThePiece={(moveSquare) => this.moveThePieceHandler(moveSquare)}
        />
      </>
    ) : null;
  }
}

export default chessBoard;
