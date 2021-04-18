import movePawn from "../movePieces/movePawn";
import moveCastle from "../movePieces/moveCastle";
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
  const moveAbleArr = [];
  if (pieceName === "pawn") {
    movePawn(type, curSquare, moveAbleArr, id, state);
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
    const arr = [17, 15, 10, 6, -6, -10, -17, -15];
    arr.forEach((arr) => {
      const square = arr + curSquare;
      const [ally, enemy] = findAllyAndEnimies(
        type,
        state,
        curSquare,
        square,
        killOpponent,
        moveAbleArr
      );
      !ally && moveAbleArr.push(square);
    });
  } else if (pieceName === "biShop") {
    moveBishop(type, curSquare, state, moveAbleArr, killOpponent, squareType);
  } else if (pieceName === "king") {
    moveKing(type, curSquare, state, moveAbleArr, killOpponent);
  } else if (pieceName === "queen") {
    moveQueen(type, curSquare, state, moveAbleArr, killOpponent, squareType);
  }
  return moveAbleArr;
};
