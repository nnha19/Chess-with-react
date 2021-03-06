import findPieceById from "../share/findPieceById";
import getInitPlaces from "../share/getInitPlaces";
import { colObj, rowObj } from "../share/colOrRowObj";

export default function movePawn(
  type,
  curSquare,
  moveAbleArr,
  id,
  state,
  killOpponent
) {
  const piece = findPieceById(id, state.pieces[type]);

  const whiteInitPlaces = getInitPlaces("white", state);
  const blackInitPlaces = getInitPlaces("black", state);

  const allInitPlaces = [...whiteInitPlaces, ...blackInitPlaces];
  const curSquareIndex = allInitPlaces.indexOf(curSquare);
  allInitPlaces.splice(curSquareIndex, 1);
  const pawnMoveAble = piece.moved === piece.initPlace ? 2 : 1;
  for (let i = 1; i <= pawnMoveAble; i++) {
    const obj = {
      white: curSquare + 8 * i,
      black: curSquare - 8 * i,
    };
    const moveAbleSquare = obj[type];
    !allInitPlaces.some((initPlace) => initPlace === moveAbleSquare)
      ? moveAbleArr.push(moveAbleSquare)
      : (i = 2);
  }
  pawnKillOpponentFunc(type, curSquare, id, state, piece, killOpponent);
}

function pawnKillOpponentFunc(type, curSquare, id, state, piece, killOpponent) {
  const obj = {
    white: [curSquare + 9, curSquare + 7],
    black: [curSquare - 9, curSquare - 7],
  };
  const opponentTeamSquare = getInitPlaces(
    type === "white" ? "black" : "white",
    state
  );
  const col = type === "white" ? 8 : -8;
  for (let i = 0; i < obj[type].length; i++) {
    opponentTeamSquare.forEach((square) => {
      if (square === obj[type][i]) {
        const validCol = colObj[curSquare + col];
        const killSquareCol = colObj[obj[type][i]];

        validCol === killSquareCol && killOpponent.push(obj[type][i]);
      }
    });
  }
}
