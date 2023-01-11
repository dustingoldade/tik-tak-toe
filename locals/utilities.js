export const checkIfGameWonCustomLen = (board, inARow) => {
  let tilesThatWon = [];
  const length = board.length;
  for (let y = 0; y < length; y++) {
    for (let x = 0; x < length; x++) {
      if (board[y][x] === null) {
        continue;
      }
      //Check Row
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (x + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y][x + i]) {
          tilesThatWon = [];
          break;
        }
        tilesThatWon[i] = [y, x + i];
        if (i === inARow - 1) {
          return tilesThatWon;
        }
      }
      //Check Col
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (y + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y + i][x]) {
          tilesThatWon = [];
          break;
        }
        tilesThatWon[i] = [y + i, x];
        if (i === inARow - 1) {
          return tilesThatWon;
        }
      }
      // Check Diag top left to bottom right
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (y + inARow > length || x + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y + i][x + i]) {
          break;
        }
        tilesThatWon[i] = [y + i, x + i];
        if (i === inARow - 1) {
          return tilesThatWon;
        }
      }
      // Check Diag bottom left to top right
      for (let i = 0; i < inARow; i++) {
        //elimiate rows that are out of bounds
        if (y - inARow < -1 || x + inARow > length) {
          break;
        }
        if (board[y][x] !== board[y - i][x + i]) {
          break;
        }
        tilesThatWon[i] = [y - i, x + i];
        if (i === inARow - 1) {
          return tilesThatWon;
        }
      }
    }
  }
  return false;
};

export const createGridObj = (length) => {
  const arry = [];
  for (let i = 0; i < length; i++) {
    arry[i] = [];
    for (let y = 0; y < length; y++) {
      arry[i][y] = null;
    }
  }
  return arry;
};

export const checkIfGameOver = (array) => {
  const flatMap = array.flatMap((e) => e);
  if (!flatMap.includes(null)) {
    return true;
  }
  return false;
};
