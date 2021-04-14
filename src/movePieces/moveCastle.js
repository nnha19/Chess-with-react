export default function moveCastle(endArr, type, curSquare, moveAbleArr) {
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
