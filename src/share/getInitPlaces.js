export default function getInitPlaces(team, state, killOpponent) {
  const { pieces } = state;
  const piecesKey = Object.keys(pieces.white);
  let initPlaces = piecesKey.map((piecesKey) => {
    return pieces[team][piecesKey];
  });
  initPlaces = initPlaces.map((piece) => {
    return piece.map((piece) => {
      return !killOpponent ? piece.initPlace : piece[killOpponent];
    });
  });
  initPlaces = initPlaces.flat();
  return initPlaces;
}
