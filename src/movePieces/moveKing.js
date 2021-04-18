import findAllyAndEnimies from "../share/findAllyAndEnemies";
import { colObj, rowObj } from "../share/colOrRowObj";

export default function moveKing(
  type,
  curSquare,
  state,
  moveAbleArr,
  killOpponent
) {
  const kingSquare = [1, -1, 8, -8, 9, 7, -9, -7];
  const makeSameCol = [0, 0, -8, 8, -8, -8, 8, 8];
  kingSquare.forEach(function (k, i) {
    const square = curSquare + k;
    const col = colObj[square + makeSameCol[i]];
    const curSquareCol = colObj[curSquare];
    if (col === curSquareCol) {
      const [ally, enemy] = findAllyAndEnimies(
        type,
        state,
        curSquare,
        square,
        killOpponent,
        moveAbleArr
      );
    }
  });
}
