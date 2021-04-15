export default function getInitPlaces(team, state) {
  const { pieces } = state;
  const piecesKey = Object.keys(pieces.white);
  let initPlaces = piecesKey.map((piecesKey) => {
    return pieces[team][piecesKey];
  });
  initPlaces = initPlaces.map((piece) => {
    return piece.map((piece) => {
      return piece.initPlace;
    });
  });
  initPlaces = initPlaces.flat();
  return initPlaces;
}
