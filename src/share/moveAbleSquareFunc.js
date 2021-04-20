import movePawn from "../movePieces/movePawn";
import moveCastle from "../movePieces/moveCastle";
import moveHorse from "../movePieces/moveHorse";
import moveBishop from "../movePieces/moveBishop";
import moveKing from "../movePieces/moveKing";
import moveQueen from "../movePieces/moveQueen";

import { mathTypes, arrs } from "./moveCastleTools";

import findAllyAndEnimies from "../share/findAllyAndEnemies";

export default (
  type,
  curSquare,
  pieceName,
  id,
  state,
  killOpponent,
  squareType
) => {
  killOpponent.splice(0);
  const moveAbleArr = [];
  let killAble;
  if (pieceName === "pawn") {
    killAble = movePawn(type, curSquare, moveAbleArr, id, state, killOpponent);
  } else if (pieceName === "castle") {
    arrs.forEach((arr, i) => {
      moveCastle(
        arrs[i],
        mathTypes[i],
        curSquare,
        moveAbleArr,
        state,
        type,
        killOpponent
      );
    });
  } else if (pieceName === "horse") {
    moveHorse(type, curSquare, state, moveAbleArr, killOpponent);
  } else if (pieceName === "biShop") {
    moveBishop(type, curSquare, state, moveAbleArr, killOpponent, squareType);
  } else if (pieceName === "king") {
    moveKing(type, curSquare, state, moveAbleArr, killOpponent);
  } else if (pieceName === "queen") {
    moveQueen(type, curSquare, state, moveAbleArr, killOpponent, squareType);
  }
  return [moveAbleArr, killOpponent];
};
