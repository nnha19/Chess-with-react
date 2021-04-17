import findAllyAndEnemies from "../share/findAllyAndEnemies";

export default function moveBishop(
  type,
  curSquare,
  state,
  moveAbleArr,
  killOpponent
) {
  const bishopEndArr = [0, 2, 4, 6, 16, 32, 48, 15, 31, 47, 63, 61, 59, 57];
  const leftEndArr = [0, 16, 32, 48];
  const rightEndArr = [15, 31, 47, 63];

  function moveAbleBiShop(num) {
    let prevSquare = curSquare + num;
    for (let i = 0; i <= 8; i++) {
      const square = prevSquare;
      const curPieceIsOnEnd = leftEndArr.some((endArr) => endArr === curSquare);
      const curPieceRightEnd = rightEndArr.some(
        (endArr) => endArr === curSquare
      );
      if (curPieceIsOnEnd && (num === -9 || num === 7)) return;
      if (curPieceRightEnd && (num === 9 || num === -7)) return;
      const [ally, enemy] = findAllyAndEnemies(
        type,
        state,
        curSquare,
        square,
        killOpponent
      );
      if (ally) return;
      moveAbleArr.push(square);
      if (bishopEndArr.some((end) => end === square)) {
        return;
      }
      prevSquare = prevSquare + num;
    }
  }
  moveAbleBiShop(-9);
  moveAbleBiShop(-7);
  moveAbleBiShop(9);
  moveAbleBiShop(7);
}
