import getInitPlaces from "../share/getInitPlaces";

const findAllyAndEnimies = (
  team,
  state,
  curSquare,
  square,
  killOpponent,
  moveAbleArr
) => {
  const typeInitPlaces = getInitPlaces(team, state);

  typeInitPlaces.forEach((occupied) => {
    if (occupied === curSquare) {
      typeInitPlaces.splice(typeInitPlaces.indexOf(curSquare), 1);
    }
  });

  const enemyInitPlaces = getInitPlaces(
    team === "white" ? "black" : "white",
    state
  );

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
  (enemyOccupied || enemyOccupied === 0) &&
    enemyOccupied > -1 &&
    killOpponent.push(enemyOccupied);

  !allyOccupied && enemyOccupied !== square && moveAbleArr.push(square);

  return [allyOccupied, enemyOccupied];
};

export default findAllyAndEnimies;
