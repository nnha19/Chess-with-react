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

  const square = squareArray.map((square, i) => {
    return (
      <div
        key={i}
        className={`board__square ${
          white.some((white) => white === i) ? "white" : ""
        }`}
      >
        <Pieces i={i} pieces={props.pieces} />
      </div>
    );
  });
  console.log(props.pieces);
  return (
    <>
      <div className="board-container">
        <div className="board">{square}</div>
      </div>
    </>
  );
};

export default ChessBoard;
