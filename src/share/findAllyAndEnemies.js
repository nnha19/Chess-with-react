import getInitPlaces from "../share/getInitPlaces";

const findAllyAndEnimies = (team, state, curSquare, square, killOpponent) => {
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
  killOpponent.push(enemyOccupied);
  return [allyOccupied, enemyOccupied];
};

export default findAllyAndEnimies;
