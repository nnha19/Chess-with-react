import findAllyAndEnemies from "../share/findAllyAndEnemies";

const squareObj = {
  blackSquare: {
    biShopEndArr: [0, 2, 4, 6, 16, 32, 48, 15, 31, 47, 63, 61, 59, 57],
    leftEndArr: [0, 16, 32, 48],
    rightEndArr: [15, 31, 47, 63],
  },
  whiteSquare: {
    biShopEndArr: [1, 3, 5, 7, 23, 39, 55, 62, 60, 58, 56, 8, 24, 40],
    leftEndArr: [8, 24, 40, 56],
    rightEndArr: [7, 23, 39, 55],
  },
};

export default function moveBishop(
  type,
  curSquare,
  state,
  moveAbleArr,
  killOpponent,
  squareType
) {
  function moveAbleBiShop(num) {
    let prevSquare = curSquare + num;
    for (let i = 0; i <= 8; i++) {
      const square = prevSquare;
      const curPieceIsOnEnd = squareObj[squareType].leftEndArr.some(
        (endArr) => endArr === curSquare
      );
      const curPieceRightEnd = squareObj[squareType].rightEndArr.some(
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
      if (ally || enemy) return;
      moveAbleArr.push(square);
      if (squareObj[squareType].biShopEndArr.some((end) => end === square)) {
        return;
      }
      prevSquare = prevSquare + num;
    }
  }
  moveAbleBiShop(-9);
  moveAbleBiShop(-7);
  moveAbleBiShop(9);
  moveAbleBiShop(7);
  killOpponent.splice(1);
}
