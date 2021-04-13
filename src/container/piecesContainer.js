import { v4 as uuidv4 } from "uuid";
import { piecesImg } from "../assets/piecesImgs";

const squareColEnds = [7, 15, 23, 31, 39, 47, 55, 63];
const squareColEndsLeft = [0, 8, 16, 24, 32, 40, 48, 56];

const squareRowEnds = [0, 1, 2, 3, 4, 5, 6, 7];
const squareRowEndsBtn = [56, 57, 58, 59, 60, 61, 62, 63];

const moveAbleSquareFunc = (type, curSquare, pieceName) => {
  const moveAbleArr = [];
  if (pieceName === "pawn") {
    console.log("Hello");
    for (let i = 1; i <= 2; i++) {
      type === "white"
        ? moveAbleArr.push(curSquare + 8 * i)
        : moveAbleArr.push(curSquare - 8 * i);
    }
  } else if (pieceName === "castle") {
    function checkMoveAbleSquares(endArr, type) {
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
        const sameSquare = endArr.some((end) => end === square);
        i = sameSquare ? 8 : i;
        curSquare !== square && moveAbleArr.push(square);
      }
    }
    checkMoveAbleSquares(squareColEnds, "plus");
    checkMoveAbleSquares(squareColEndsLeft, "minus");
    checkMoveAbleSquares(squareRowEnds, "plusmultiply");
    checkMoveAbleSquares(squareRowEndsBtn, "minusmultiply");
  }

  return moveAbleArr;
};

const pawns = (num, type) => {
  let result = Array.from(Array(8)).map((pawn, i) => {
    return {
      img: piecesImg.pawn(type),
      initPlace: i + num,
      team: type,
      pieceName: "pawn",
      id: uuidv4(),
      move: function () {
        return moveAbleSquareFunc(type, this.initPlace, this.pieceName);
      },
    };
  });
  return result;
};

const state = {
  pieces: {
    white: {
      pawn: pawns(8, "white"),
      castle: [
        {
          img: piecesImg.castle("white"),
          initPlace: 35,
          move: function () {
            return moveAbleSquareFunc(
              this.team,
              this.initPlace,
              this.pieceName
            );
          },
          pieceName: "castle",
          id: uuidv4(),
          team: "white",
        },
        {
          img: piecesImg.castle("white"),
          initPlace: 7,
          move: function () {
            return moveAbleSquareFunc(
              this.team,
              this.initPlace,
              this.pieceName
            );
          },
          pieceName: "castle",
          id: uuidv4(),
          team: "white",
        },
      ],
      biShop: [
        {
          img: piecesImg.biShop("white"),
          initPlace: 2,
          move: "",
          pieceName: "biShop",
          id: uuidv4(),
          team: "white",
        },
        {
          img: piecesImg.biShop("white"),
          initPlace: 5,
          move: "",
          pieceName: "biShop",
          id: uuidv4(),
          team: "white",
        },
      ],
      horse: [
        {
          img: piecesImg.horse("white"),
          initPlace: 1,
          move: "",
          pieceName: "horse",
          id: uuidv4(),
          team: "white",
        },
        {
          img: piecesImg.horse("white"),
          initPlace: 6,
          move: "",
          pieceName: "horse",
          id: uuidv4(),
          team: "white",
        },
      ],
      king: [
        {
          img: piecesImg.king("white"),
          initPlace: 4,
          move: "",
          team: "white",
          id: uuidv4(),
          pieceName: "king",
        },
      ],
      queen: [
        {
          img: piecesImg.queen("white"),
          initPlace: 3,
          move: "",
          team: "white",
          id: uuidv4(),
          pieceName: "queen",
        },
      ],
    },
    black: {
      pawn: pawns(48, "black"),
      castle: [
        {
          img: piecesImg.castle("black"),
          initPlace: 63,
          move: function () {
            return moveAbleSquareFunc(
              this.team,
              this.initPlace,
              this.pieceName
            );
          },
          team: "black",
          id: uuidv4(),
          pieceName: "castle",
        },
        {
          img: piecesImg.castle("black"),
          initPlace: 56,
          move: function () {
            return moveAbleSquareFunc(
              this.team,
              this.initPlace,
              this.pieceName
            );
          },
          team: "black",
          id: uuidv4(),
          pieceName: "castle",
        },
      ],
      biShop: [
        {
          img: piecesImg.biShop("black"),
          initPlace: 61,
          move: "",
          team: "black",
          id: uuidv4(),
          pieceName: "biShop",
        },
        {
          img: piecesImg.biShop("black"),
          initPlace: 58,
          move: "",
          team: "black",
          id: uuidv4(),
          pieceName: "biShop",
        },
      ],
      horse: [
        {
          img: piecesImg.horse("black"),
          initPlace: 62,
          move: "",
          team: "black",
          id: uuidv4(),
          pieceName: "horse",
        },
        {
          img: piecesImg.horse("black"),
          initPlace: 57,
          move: "",
          team: "black",
          id: uuidv4(),
          pieceName: "horse",
        },
      ],
      king: [
        {
          img: piecesImg.king("black"),
          initPlace: 60,
          move: "",
          team: "black",
          id: uuidv4(),
          pieceName: "king",
        },
      ],
      queen: [
        {
          img: piecesImg.queen("black"),
          initPlace: 59,
          move: "",
          team: "black",
          id: uuidv4(),
          pieceName: "queen",
        },
      ],
    },
  },
  moveAbleSquares: [],
  pickedPiece: {},
};

export default state;
