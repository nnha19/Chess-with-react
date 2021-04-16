import getInitPlaces from "../share/getInitPlaces";

export default function moveCastle(
  endArr,
  type,
  curSquare,
  moveAbleArr,
  state,
  team,
  killOpponent
) {
  const enemyInitPlaces = getInitPlaces(
    team === "white" ? "black" : "white",
    state
  );
  const typeInitPlaces = getInitPlaces(team, state);

  typeInitPlaces.forEach((occupied) => {
    if (occupied === curSquare) {
      typeInitPlaces.splice(typeInitPlaces.indexOf(curSquare), 1);
    }
  });

  for (let i = 0; i <= 8; i++) {
    let square;
    if (type === "plus") {
      square = curSquare + i;
    } else if (type === "minus") {
      square = curSquare - i;
    } else if (type === "plusmultiply") {
      square = curSquare + 8 * i;
    } else if (type === "minusmultiply") {
      square = curSquare - 8 * i;
    }

    function stopTheLoop(initPlaces) {
      let squareOccupied;
      initPlaces.forEach((occupied) => {
        if (occupied === square) {
          squareOccupied = square;
        }
      });
      return squareOccupied;
    }
    const allyOccupied = stopTheLoop(typeInitPlaces);
    const enemyOccupied = stopTheLoop(enemyInitPlaces);
    killOpponent.push(enemyOccupied);
    if (allyOccupied || enemyOccupied) return;

    const sameSquare = endArr.some((end) => end === square);
    i = sameSquare ? 8 : i;
    curSquare !== square && moveAbleArr.push(square);
  }
}
