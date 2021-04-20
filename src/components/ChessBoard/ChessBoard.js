import React from "react";

import "./ChessBoard.css";

import whiteBoardArr from "./WhiteBoardArr";

import Pieces from "../Pieces/Pieces";

const ChessBoard = (props) => {
  const squareArray = Array.from(Array(64));

  const moveThePieceHandler = (index) => {
    props.moveAbleSquares.forEach((square) => {
      if (square === index) {
        props.moveThePiece(index);
      }
    });
  };

  const square = squareArray.map((square, i) => {
    const squareClsName = `board__square
   ${whiteBoardArr.some((white) => white === i) ? "white" : ""} `.split(" ");
    props.chess && props.chess.kingSquare === i && squareClsName.push("kill");
    props.moveAbleSquares.forEach((square) => {
      if (square === i) {
        squareClsName.push("moveable");
      }
    });
    props.killAbleSquares &&
      props.killAbleSquares.forEach((square) => {
        if (square === i) {
          squareClsName.push("kill");
        }
      });

    return (
      <div
        onClick={() => moveThePieceHandler(i)}
        key={i}
        className={squareClsName.join(" ")}
      >
        <Pieces
          clicked={(piece, curIndex) =>
            props.showMoveAbleSquares(piece, curIndex)
          }
          index={i}
          pieces={props.pieces}
        />
      </div>
    );
  });
  return (
    <>
      <div onClick={props.clearMoveAble} className="board-container">
        <div className="board">{square}</div>
      </div>
    </>
  );
};

export default ChessBoard;
