import findPieceById from "../share/findPieceById";
import getInitPlaces from "../share/getInitPlaces";

export default function movePawn(type, curSquare, moveAbleArr, id, state) {
  pawnKillOpponentFunc(type, curSquare, id, state);

  const whiteInitPlaces = getInitPlaces("white", state);
  const blackInitPlaces = getInitPlaces("black", state);

  const allInitPlaces = [...whiteInitPlaces, ...blackInitPlaces];
  const curSquareIndex = allInitPlaces.indexOf(curSquare);
  allInitPlaces.splice(curSquareIndex, 1);

  for (let i = 1; i <= 2; i++) {
    const obj = {
      white: curSquare + 8 * i,
      black: curSquare - 8 * i,
    };
    const moveAbleSquare = obj[type];
    !allInitPlaces.some((initPlace) => initPlace === moveAbleSquare)
      ? moveAbleArr.push(moveAbleSquare)
      : (i = 2);
  }
}

function pawnKillOpponentFunc(type, curSquare, id, state) {
  const piece = findPieceById(id, state.pieces[type]);
  piece.killOpponent = [];
  const obj = {
    white: [curSquare + 9, curSquare + 7],
    black: [curSquare - 9, curSquare - 7],
  };
  const opponentTeamSquare = getInitPlaces(
    type === "white" ? "black" : "white",
    state
  );
  for (let i = 0; i < obj[type].length; i++) {
    opponentTeamSquare.forEach((square) => {
      if (square === obj[type][i]) {
        piece.killOpponent.push(obj[type][i]);
      }
    });
  }
}