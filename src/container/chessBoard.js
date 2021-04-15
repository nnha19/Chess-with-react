import React, { Component } from "react";

import ChessBoard from "../components/ChessBoard/ChessBoard";
import piecesState from "./piecesContainer";

class chessBoard extends Component {
  state = {
    pieces: "",
    pickedPiece: "",
    moveAbleSquares: "",
    killAble: [],
    turn: "white",
  };

  componentDidMount() {
    const { pieces, moveAbleSquares, pickedPiece } = piecesState;
    this.setState({ pieces, moveAbleSquares, pickedPiece });
  }

  clearMoveAbleHandler = (e, killed) => {
    if (killed || !e.target.closest(".board__square")) {
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
    this.clearMoveAbleHandler("", "killed");
    let { turn } = this.state;
    turn = turn === "white" ? "black" : "white";
    this.setState({
      pieces,
      pickedPiece: {},
      turn,
    });
  };

  showMoveAbleSquaresHandler = (piece, moveIndex) => {
    const pp = this.state.pickedPiece;
    const pickedPiece = Object.keys(pp).length > 0;
    if (piece.team !== this.state.turn && !pickedPiece) {
      return;
    }

    if (!pickedPiece || pp.team === piece.team) {
      const moveAble = piece.move();
      let moveAbleSquares = [...this.state.moveAbleSquares];
      moveAbleSquares = moveAble;
      const pickedPiece = piece;
      const { killOpponent: killAble } = piece;
      this.setState({ moveAbleSquares, pickedPiece, killAble });
    } else {
      const killAble = this.state.killAble.some(
        (square) => square === moveIndex
      );
      if (killAble) {
        const type = this.state.pieces[piece.team][piece.pieceName].filter(
          (type) => type.id !== piece.id
        );
        const oldState = { ...this.state.pieces };
        oldState[piece.team][piece.pieceName] = type;
        this.setState({ pieces: oldState });
        this.clearMoveAbleHandler("", "killed");
        this.moveThePieceHandler(moveIndex);
      }
    }
  };

  render() {
    const { pieces, moveAbleSquares, pickedPiece } = this.state;
    return pieces && moveAbleSquares && pickedPiece ? (
      <>
        <ChessBoard
          clearMoveAble={this.clearMoveAbleHandler}
          showMoveAbleSquares={(piece, curIndex) =>
            this.showMoveAbleSquaresHandler(piece, curIndex)
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
