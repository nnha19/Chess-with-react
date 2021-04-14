export default function findPieceById(pieceId, pieces) {
  const keys = Object.keys(pieces);
  let foundPiece = [];
  keys.forEach((piece) => {
    foundPiece.push(pieces[piece].filter((p) => p.id === pieceId)[0]);
  });
  return foundPiece[0];
}
