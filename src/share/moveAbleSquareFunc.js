import movePawn from "../movePieces/movePawn";
import moveCastle from "../movePieces/moveCastle";
import moveBishop from "../movePieces/moveBishop";
import moveKing from "../movePieces/moveKing";

import findAllyAndEnimies from "../share/findAllyAndEnemies";

const squareColEnds = [7, 15, 23, 31, 39, 47, 55, 63];
const squareColEndsLeft = [0, 8, 16, 24, 32, 40, 48, 56];

const squareRowEnds = [0, 1, 2, 3, 4, 5, 6, 7];
const squareRowEndsBtn = [56, 57, 58, 59, 60, 61, 62, 63];

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
    moveCastle(
      squareColEnds,
      "plus",
      curSquare,
      moveAbleArr,
      state,
      type,
      killOpponent
    );
    moveCastle(
      squareColEndsLeft,
      "minus",
      curSquare,
      moveAbleArr,
      state,
      type,
      killOpponent
    );

    moveCastle(
      squareRowEndsBtn,
      "plusmultiply",
      curSquare,
      moveAbleArr,
      state,
      type,
      killOpponent
    );
    moveCastle(
      squareRowEnds,
      "minusmultiply",
      curSquare,
      moveAbleArr,
      state,
      type,
      killOpponent
    );
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
    moveKing(type, curSquare, state, moveAbleArr, killOpponent, squareType);
  }
  return moveAbleArr;
};
