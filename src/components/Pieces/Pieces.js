import React from "react";

import "./Pieces.css";

const Pieces = (props) => {
  const pawns = props.pieces.pawns.map((pawn) => {
    return (
      pawn.initPlace === props.i && <img className="piece" src={pawn.img} />
    );
  });
  return pawns;
};
export default Pieces;
