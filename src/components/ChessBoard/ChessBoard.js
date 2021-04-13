import React from "react";

import "./ChessBoard.css";

import Pieces from "../Pieces/Pieces";

const ChessBoard = (props) => {
  const white = [
    1,
    3,
    5,
    7,
    8,
    10,
    12,
    14,
    17,
    19,
    21,
    23,
    24,
    26,
    28,
    30,
    33,
    35,
    37,
    39,
    40,
    42,
    44,
    46,
    49,
    51,
    53,
    55,
    56,
    58,
    60,
    62,
  ];

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
   ${white.some((white) => white === i) ? "white" : ""} `.split(" ");
    props.moveAbleSquares.forEach((square) => {
      if (square === i) {
        squareClsName.push("moveable");
      }
    });

    return (
      <div
        onClick={() => moveThePieceHandler(i)}
        key={i}
        className={squareClsName.join(" ")}
      >
        <Pieces
          clicked={(piece) => props.showMoveAbleSquares(piece)}
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
