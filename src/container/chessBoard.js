import React, { Component } from "react";

import ChessBoard from "../components/ChessBoard/ChessBoard";
import piecesState from "./piecesContainer";

import moveAbleSquareFunc from "../share/moveAbleSquareFunc";
import getInitPlaces from "../share/getInitPlaces";

class chessBoard extends Component {
  state = {
    pieces: "",
    pickedPiece: "",
    moveAbleSquares: "",
    killAble: [],
    turn: "white",
    chess: false,
  };

  componentDidMount() {
    const { pieces, moveAbleSquares, pickedPiece } = piecesState;
    this.setState({ pieces, moveAbleSquares, pickedPiece });
  }

  checkChess = (killAble) => {
    const state = this.state;
    const opponentTeam = state.pickedPiece.team === "white" ? "black" : "white";
    const kingSquare = state.pieces[opponentTeam].king[0].initPlace;
    const allKillAbles = getInitPlaces(
      state.pickedPiece.team,
      this.state,
      "killOpponent"
    ).flat();
    const chess = allKillAbles.some((killAble) => killAble === kingSquare);
    if (chess) {
      const stateChess = { team: opponentTeam, kingSquare };
      this.setState({ chess: stateChess });
    } else {
      this.setState({ chess: false });
    }
  };

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
    // turn = turn === "white" ? "black" : "white";
    this.setState({
      pieces,
      pickedPiece: {},
      turn,
    });
    const [, killAble] = piece.move(
      moveAbleSquareFunc,
      this.state,
      piece.killOpponent
    );
    this.checkChess(killAble);
  };

  showMoveAbleSquaresHandler = (piece, moveIndex) => {
    const pp = this.state.pickedPiece;
    piece.killOpponent = [];
    const pickedPiece = Object.keys(pp).length > 0;
    if (piece.team !== this.state.turn && !pickedPiece) {
      return;
    }

    if (!pickedPiece || pp.team === piece.team) {
      const [moveAble] = piece.move(
        moveAbleSquareFunc,
        this.state,
        piece.killOpponent
      );
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
    console.log(this.state.chess);
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
          chess={this.state.chess}
        />
      </>
    ) : null;
  }
}

export default chessBoard;
