//#region get elements
// Squares
const squares = [];
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 9; j++) {
    squares.push(document.getElementById(`square_${i}${j}`));
  }
}

// Buttons group 1
const button_1H = document.getElementById("button_1H");
const button_1A = document.getElementById("button_1A");
const button_2H = document.getElementById("button_2H");
const button_2A = document.getElementById("button_2A");
const button_3H = document.getElementById("button_3H");
const button_3A = document.getElementById("button_3A");

// Buttons group 2
const button_4H = document.getElementById("button_4H");
const button_4A = document.getElementById("button_4A");
const button_5H = document.getElementById("button_5H");
const button_5A = document.getElementById("button_5A");
const button_6H = document.getElementById("button_6H");
const button_6A = document.getElementById("button_6A");

// Buttons group 3
const button_7H = document.getElementById("button_7H");
const button_7A = document.getElementById("button_7A");
const button_8H = document.getElementById("button_8H");
const button_8A = document.getElementById("button_8A");
const button_9H = document.getElementById("button_9H");
const button_9A = document.getElementById("button_9A");
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

squares_row1 = [24, 25, 26,  33, 34, 35,  53, 50, 47,   8,  5,  2];
squares_row2 = [21, 22, 23,  30, 31, 32,  52, 49, 46,   7,  4,  1];
squares_row3 = [18, 19, 20,  27, 28, 29,  51, 48, 45,   6,  3,  0];

squares_row4 = [42, 43, 44,  51, 52, 53,  17, 14, 11,  26, 23, 20];
squares_row5 = [39, 40, 41,  48, 49, 50,  16, 13, 10,  25, 22, 19];
squares_row6 = [36, 37, 38,  45, 46, 47,  15, 12,  9,  24, 21, 18];

squares_row7 = [ 6,  7,  8,  15, 16, 17,  35, 32, 29,  44, 41, 38];
squares_row8 = [ 3,  4,  5,  12, 13, 14,  34, 31, 28,  43, 40, 37];
squares_row9 = [ 0,  1,  2,   9, 10, 11,  33, 30, 27,  42, 39, 36];

squares_row1_face = [ 9, 10, 11, 14, 17, 16, 15, 12];
squares_row3_face = [39, 42, 43, 44, 41, 38, 37, 36];
squares_row4_face = [27, 28, 29, 32, 35, 34, 33, 30];
squares_row6_face = [ 3,  6,  7,  8,  5,  2,  1,  0];
squares_row7_face = [45, 46, 47, 50, 53, 52, 51, 48];
squares_row9_face = [21, 24, 25, 26, 23, 20, 19, 18];

//#endregion variables

//#region functions

function rotateRow(row, clockwise) {
  let rowSquares = [];
  let rowSquaresFace = [];
  switch (row) {
    case 1:
      for (let i = 0; i < squares_row1.length; i++) {
        rowSquares.push(squares[squares_row1[i]]);
      }
      for (let i = 0; i < squares_row1_face.length; i++) {
        rowSquaresFace.push(squares[squares_row1_face[i]]);
      }
      break;
    case 2:
      for (let i = 0; i < squares_row2.length; i++) {
        rowSquares.push(squares[squares_row2[i]]);
      }
      break;
    case 3:
      for (let i = 0; i < squares_row3.length; i++) {
        rowSquares.push(squares[squares_row3[i]]);
      }
      for (let i = 0; i < squares_row3_face.length; i++) {
        rowSquaresFace.push(squares[squares_row3_face[i]]);
      }
      break;
    case 4:
      for (let i = 0; i < squares_row4.length; i++) {
        rowSquares.push(squares[squares_row4[i]]);
      }
      for (let i = 0; i < squares_row4_face.length; i++) {
        rowSquaresFace.push(squares[squares_row4_face[i]]);
      }
      break;
    case 5:
      for (let i = 0; i < squares_row5.length; i++) {
        rowSquares.push(squares[squares_row5[i]]);
      }
      break;
    case 6:
      for (let i = 0; i < squares_row6.length; i++) {
        rowSquares.push(squares[squares_row6[i]]);
      }
      for (let i = 0; i < squares_row6_face.length; i++) {
        rowSquaresFace.push(squares[squares_row6_face[i]]);
      }
      break;
    case 7:
      for (let i = 0; i < squares_row7.length; i++) {
        rowSquares.push(squares[squares_row7[i]]);
      }
      for (let i = 0; i < squares_row7_face.length; i++) {
        rowSquaresFace.push(squares[squares_row7_face[i]]);
      }
      break;
    case 8:
      for (let i = 0; i < squares_row8.length; i++) {
        rowSquares.push(squares[squares_row8[i]]);
      }
      break;
    case 9:
      for (let i = 0; i < squares_row9.length; i++) {
        rowSquares.push(squares[squares_row9[i]]);
      }
      for (let i = 0; i < squares_row9_face.length; i++) {
        rowSquaresFace.push(squares[squares_row9_face[i]]);
      }
      break;
    }

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
    if (row == 1 || row == 3 || row == 4 || row == 6 || row == 7 || row == 9) {
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
    if (row == 1 || row == 3 || row == 4 || row == 6 || row == 7 || row == 9) {
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

// Buttons group 1
button_1H.addEventListener("click", () => {
  rotateRow(1, true);
});
button_1A.addEventListener("click", () => {
  rotateRow(1, false);
});
button_2H.addEventListener("click", () => {
  rotateRow(2, true);
});
button_2A.addEventListener("click", () => {
  rotateRow(2, false);
});
button_3H.addEventListener("click", () => {
  rotateRow(3, true);
});
button_3A.addEventListener("click", () => {
  rotateRow(3, false);
});

// Buttons group 2
button_4H.addEventListener("click", () => {
  rotateRow(4, true);
});
button_4A.addEventListener("click", () => {
  rotateRow(4, false);
});
button_5H.addEventListener("click", () => {
  rotateRow(5, true);
});
button_5A.addEventListener("click", () => {
  rotateRow(5, false);
});
button_6H.addEventListener("click", () => {
  rotateRow(6, true);
});
button_6A.addEventListener("click", () => {
  rotateRow(6, false);
});

// Buttons group 3
button_7H.addEventListener("click", () => {
  rotateRow(7, true);
});
button_7A.addEventListener("click", () => {
  rotateRow(7, false);
});
button_8H.addEventListener("click", () => {
  rotateRow(8, true);
});
button_8A.addEventListener("click", () => {
  rotateRow(8, false);
});
button_9H.addEventListener("click", () => {
  rotateRow(9, true);
});
button_9A.addEventListener("click", () => {
  rotateRow(9, false);
});

//#endregion event listeners
