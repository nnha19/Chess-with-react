import React, { Component } from "react";

import ChessBoard from "../components/ChessBoard/ChessBoard";
import piecesState from "./piecesContainer";

class chessBoard extends Component {
  state = {
    pieces: "",
    pickedPiece: "",
    moveAbleSquares: "",
    killAble: "",
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
    const { killOpponent: killAble } = piece;
    this.setState({ moveAbleSquares, pickedPiece, killAble });
  };

  clearMoveAbleHandler = (e) => {
    if (!e.target.closest(".board__square")) {
      let moveAbleSquares = [...this.state.moveAbleSquares];
      moveAbleSquares = [];
      const killAble = [];
      this.setState({ moveAbleSquares, killAble });
    }
  };

  moveThePieceHandler = (moveSquare) => {
    const { pickedPiece } = this.state;
    const pieces = { ...this.state.pieces };
    const piecesTeam = { ...pieces[pickedPiece.team] };

    const oldPiece = [
      ...this.state.pieces[pickedPiece.team][pickedPiece.pieceName],
    ];
    const piece = oldPiece.find((piece) => piece.id === pickedPiece.id);
    piece.initPlace = moveSquare;
    oldPiece[
      (oldPiece.findIndex = (piece) => piece.id === pickedPiece.id)
    ] = piece;
    piecesTeam[pickedPiece.pieceName] = oldPiece;
    pieces[pickedPiece.team] = piecesTeam;
    this.setState({ pieces, moveAbleSquares: [] });
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
          killAbleSquares={this.state.killAble}
          moveThePiece={(moveSquare) => this.moveThePieceHandler(moveSquare)}
        />
      </>
    ) : null;
  }
}

export default chessBoard;
