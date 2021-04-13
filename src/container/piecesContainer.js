import { v4 as uuidv4 } from "uuid";
import { piecesImg } from "../assets/piecesImgs";

const pawns = (num, type) => {
  let result = Array.from(Array(8)).map((pawn, i) => {
    return {
      img: piecesImg.pawn(type),
      initPlace: i + num,
      team: type,
      pieceName: "pawn",
      id: uuidv4(),
      move: function () {
        const moveAbleArr = [];
        for (let i = 1; i <= 2; i++) {
          moveAbleArr.push(
            type === "white" ? this.initPlace + 8 * i : this.initPlace - 8 * i
          );
        }
        return moveAbleArr;
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
          initPlace: 0,
          move: "",
          pieceName: "castle",
          id: uuidv4(),
          team: "white",
        },
        {
          img: piecesImg.castle("white"),
          initPlace: 7,
          move: "",
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
          move: "",
          team: "black",
          id: uuidv4(),
          pieceName: "castle",
        },
        {
          img: piecesImg.castle("black"),
          initPlace: 56,
          move: "",
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
