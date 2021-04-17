export default function moveBishop(
  type,
  curSquare,
  state,
  moveAbleArr,
  killOpponent
) {
  let prevSquare = curSquare - 9;
  for (let i = 0; i <= 8; i++) {
    moveAbleArr.push(prevSquare);
    prevSquare = prevSquare - 9;
  }
}
