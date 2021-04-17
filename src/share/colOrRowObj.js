const colObj = {};
const rowObj = {};

let col = 1;
let row = 1;
for (let i = 0; i < 64; i++) {
  if (i === 8 * col) {
    row = 1;
  }
  if (i === 8 * col) {
    col = col + 1;
  }

  colObj[i] = col;
  rowObj[i] = row;
  row++;
}

export { colObj, rowObj };
