import findAllyAndEnimies from "../share/findAllyAndEnemies";
import { colObj, rowObj } from "../share/colOrRowObj";

export default function moveHorse(
  type,
  curSquare,
  state,
  moveAbleArr,
  killOpponent
) {
  const arr = [17, 15, 10, 6, -6, -10, -17, -15];
  const checkSameCol = [-16, -16, -8, -8, 8, 8, 16, 16];
  arr.forEach((arr, i) => {
    const square = arr + curSquare;
    const curCol = colObj[curSquare];
    const moveCol = colObj[square + checkSameCol[i]];
    if (curCol !== moveCol) {
      return;
    }
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
}
