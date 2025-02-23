//#region get elements
// Squares
const squares = [];
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 9; j++) {
    squares.push(document.getElementById(`square_${i}${j}`));
  }
}

// Buttons
const buttonsH = [];
const buttonsA = [];
for (let i = 1; i <= 9; i++) {
  buttonsH.push(document.getElementById(`button_${i}H`));
  buttonsA.push(document.getElementById(`button_${i}A`));
}

//#endregion get elements

//#region colors

for (let i = 0; i <= 8; i++) {
  squares[i].style.backgroundColor = "red";
}
for (let i = 9; i <= 17; i++) {
  squares[i].style.backgroundColor = "green";
}
for (let i = 18; i <= 26; i++) {
  squares[i].style.backgroundColor = "yellow";
}
for (let i = 27; i <= 35; i++) {
  squares[i].style.backgroundColor = "black";
}
for (let i = 36; i <= 44; i++) {
  squares[i].style.backgroundColor = "orange";
}
for (let i = 45; i <= 53; i++) {
  squares[i].style.backgroundColor = "blue";
}

// #endregion colors

//#region variables

let squares_rows = [];

squares_rows[0] = [24, 25, 26,  33, 34, 35,  53, 50, 47,   8,  5,  2];
squares_rows[1] = [21, 22, 23,  30, 31, 32,  52, 49, 46,   7,  4,  1];
squares_rows[2] = [18, 19, 20,  27, 28, 29,  51, 48, 45,   6,  3,  0];

squares_rows[3] = [42, 43, 44,  51, 52, 53,  17, 14, 11,  26, 23, 20];
squares_rows[4] = [39, 40, 41,  48, 49, 50,  16, 13, 10,  25, 22, 19];
squares_rows[5] = [36, 37, 38,  45, 46, 47,  15, 12,  9,  24, 21, 18];

squares_rows[6] = [ 6,  7,  8,  15, 16, 17,  35, 32, 29,  44, 41, 38];
squares_rows[7] = [ 3,  4,  5,  12, 13, 14,  34, 31, 28,  43, 40, 37];
squares_rows[8] = [ 0,  1,  2,   9, 10, 11,  33, 30, 27,  42, 39, 36];

let squares_face_rows = [];

squares_face_rows[0] = [ 9, 10, 11, 14, 17, 16, 15, 12];
squares_face_rows[1] = [-1];
squares_face_rows[2] = [39, 42, 43, 44, 41, 38, 37, 36];
squares_face_rows[3] = [27, 28, 29, 32, 35, 34, 33, 30];
squares_face_rows[4] = [-1];
squares_face_rows[5] = [ 3,  6,  7,  8,  5,  2,  1,  0];
squares_face_rows[6] = [45, 46, 47, 50, 53, 52, 51, 48];
squares_face_rows[7] = [-1];
squares_face_rows[8] = [21, 24, 25, 26, 23, 20, 19, 18];

//#endregion variables

//#region functions

function getSquares_rows(row) {
  let rowSquares = [];
  for (let i = 0; i < squares_rows[row - 1].length; i++) {
    rowSquares.push(squares[squares_rows[row - 1][i]]);
  }
  return rowSquares;
}

function getSquaresFace_rows(row) {
  let rowSquaresFace = [];
  for (let i = 0; i < squares_face_rows[row - 1].length; i++) {
    if (squares_face_rows[row - 1][i] == -1) {
      return rowSquaresFace;
    } else {
      rowSquaresFace.push(squares[squares_face_rows[row - 1][i]]);
    }
  }
  return rowSquaresFace;
}

function rotateRow(row, clockwise) {
  let rowSquares = getSquares_rows(row);
  let rowSquaresFace = getSquaresFace_rows(row);
  
  if (clockwise) {
    let temp2 = rowSquares[11].style.backgroundColor;
    let temp1 = rowSquares[10].style.backgroundColor;
    let temp0 = rowSquares[9].style.backgroundColor;
    for (let i = 11; i > 2; i--) {
      rowSquares[i].style.backgroundColor = rowSquares[i - 3].style.backgroundColor;
    }
    rowSquares[2].style.backgroundColor = temp2;
    rowSquares[1].style.backgroundColor = temp1;
    rowSquares[0].style.backgroundColor = temp0;
    if (rowSquaresFace.length > 0) {
      let tempA = rowSquaresFace[6].style.backgroundColor;
      let tempB = rowSquaresFace[7].style.backgroundColor;
      for (let i = 7; i > 1; i--) {
        rowSquaresFace[i].style.backgroundColor = rowSquaresFace[i - 2].style.backgroundColor;
      }
      rowSquaresFace[1].style.backgroundColor = tempB;
      rowSquaresFace[0].style.backgroundColor = tempA;
    }
    
  } else {
    let temp0 = rowSquares[0].style.backgroundColor;
    let temp1 = rowSquares[1].style.backgroundColor;
    let temp2 = rowSquares[2].style.backgroundColor;
    for (let i = 0; i < 9; i++) {
      rowSquares[i].style.backgroundColor = rowSquares[i + 3].style.backgroundColor;
    }
    rowSquares[9].style.backgroundColor = temp0;
    rowSquares[10].style.backgroundColor = temp1;
    rowSquares[11].style.backgroundColor = temp2;
    if (rowSquaresFace.length > 0) {
      let tempA = rowSquaresFace[0].style.backgroundColor;
      let tempB = rowSquaresFace[1].style.backgroundColor;
      for (let i = 0; i < 6; i++) {
        rowSquaresFace[i].style.backgroundColor = rowSquaresFace[i + 2].style.backgroundColor;
      }
      rowSquaresFace[6].style.backgroundColor = tempA;
      rowSquaresFace[7].style.backgroundColor = tempB;
    }
  }
}
//#endregion functions

//#region event listeners

for (let i = 0; i < buttonsH.length; i++) {
  buttonsH[i].addEventListener("click", () => {
    rotateRow(i + 1, true);
  });
}

for (let i = 0; i < buttonsA.length; i++) {
  buttonsA[i].addEventListener("click", () => {
    rotateRow(i + 1, false);
  });
}

//#endregion event listeners
