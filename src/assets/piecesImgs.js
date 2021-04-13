const piecesImg = {
  pawn: (team) =>
    `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_pawn.png`,
  castle: (team) =>
    `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_rook.png`,
  biShop: (team) =>
    `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_bishop.png`,
  horse: (team) =>
    `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_knight.png`,
  king: (team) =>
    `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_king.png`,
  queen: (team) =>
    `https://raw.githubusercontent.com/austinChappell/chess-game-react/master/src/assets/images/pieces/${team}_queen.png`,
};

export { piecesImg };
