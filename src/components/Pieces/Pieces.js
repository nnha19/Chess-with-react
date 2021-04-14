import React from "react";

import "./Pieces.css";

const Pieces = (props) => {
  const renderPieces = (teamObj) => {
    const teamKeys = Object.keys(teamObj);
    const pieces = teamKeys.map((key) => {
      return teamObj[key];
    });
    return pieces.flat().map((piece) => {
      if (piece.initPlace === props.index) {
        return (
          <img
            key={props.index + new Date()}
            className="piece"
            src={piece.img}
            onClick={() => props.clicked(piece, props.index)}
          />
        );
      }
    });
  };

  const white = props.pieces.white;
  const black = props.pieces.black;
  const whitePieces = renderPieces(white);
  const blackPieces = renderPieces(black);
  return (
    <>
      {whitePieces}
      {blackPieces}
    </>
  );
};

export default Pieces;
