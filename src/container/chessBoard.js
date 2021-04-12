import React, { Component } from "react";

import ChessBoard from "../components/ChessBoard/ChessBoard";

class chessBoard extends Component {
  piecesImg = {
    pawn: (team) =>
      `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_pawn.png`,
    castle: (team) =>
      `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_rook.png`,
    biShop: (team) =>
      `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_bishop.png`,
    horse: (team) =>
      `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_knight.png`,
    king: (team) =>
      `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_king.png`,
    queen: (team) =>
      `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_queen.png`,
  };
  pawns = (num, type) => {
    let result = Array.from(Array(8)).map((pawn, i) => {
      return {
        img: this.piecesImg.pawn(type),
        initPlace: i + num,
        move: function () {
          const moveAbleArr = [];
          for (let i = 1; i <= 2; i++) {
            moveAbleArr.push(
              type === "white" ? this.initPlace + 8 * i : this.initPlace - 8 * i
            );
          }
          return moveAbleArr;
        },
      };
    });
    return result;
  };
  state = {
    pieces: {
      white: {
        pawns: this.pawns(8, "white"),
        castle: [
          { img: this.piecesImg.castle("white"), initPlace: 0, move: "" },
          { img: this.piecesImg.castle("white"), initPlace: 7, move: "" },
        ],
        biShop: [
          { img: this.piecesImg.biShop("white"), initPlace: 2, move: "" },
          { img: this.piecesImg.biShop("white"), initPlace: 5, move: "" },
        ],
        horse: [
          { img: this.piecesImg.horse("white"), initPlace: 1, move: "" },
          { img: this.piecesImg.horse("white"), initPlace: 6, move: "" },
        ],
        king: [{ img: this.piecesImg.king("white"), initPlace: 4, move: "" }],
        queen: [{ img: this.piecesImg.queen("white"), initPlace: 3, move: "" }],
      },
      black: {
        pawns: this.pawns(48, "black"),
        castle: [
          { img: this.piecesImg.castle("black"), initPlace: 63, move: "" },
          { img: this.piecesImg.castle("black"), initPlace: 56, move: "" },
        ],
        biShop: [
          { img: this.piecesImg.biShop("black"), initPlace: 61, move: "" },
          { img: this.piecesImg.biShop("black"), initPlace: 58, move: "" },
        ],
        horse: [
          { img: this.piecesImg.horse("black"), initPlace: 62, move: "" },
          { img: this.piecesImg.horse("black"), initPlace: 57, move: "" },
        ],
        king: [{ img: this.piecesImg.king("black"), initPlace: 60, move: "" }],
        queen: [
          { img: this.piecesImg.queen("black"), initPlace: 59, move: "" },
        ],
      },
    },
    moveAbleSquares: [],
  };

  moveThePiece = (piece) => {
    const moveAble = piece.move();
    console.log(moveAble);
    let moveAbleSquares = [...this.state.moveAbleSquares];
    moveAbleSquares = moveAble;
    this.setState({ moveAbleSquares });
  };

  render() {
    console.log(this.state.moveAbleSquares);
    return (
      <>
        <ChessBoard
          moveThePiece={(piece) => this.moveThePiece(piece)}
          pieces={this.state.pieces}
          moveAbleSquares={this.state.moveAbleSquares}
        />
      </>
    );
  }
}

export default chessBoard;
