import moveCastle from "./moveCastle";
import { mathTypes, arrs } from "../share/moveCastleTools";

import moveBishop from "./moveBishop";

export default function moveQueen(
  type,
  curSquare,
  state,
  moveAbleArr,
  killOpponent,
  squareType
) {
  // castle movement
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

  //=============

  //bishop movement
  moveBishop(type, curSquare, state, moveAbleArr, killOpponent, squareType);
  //==============
}
