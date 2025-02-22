//#region get elements
// Squares
const square_11 = document.getElementById("square_11");
const square_12 = document.getElementById("square_12");
const square_13 = document.getElementById("square_13");
const square_14 = document.getElementById("square_14");
const square_21 = document.getElementById("square_21");
const square_22 = document.getElementById("square_22");
const square_23 = document.getElementById("square_23");
const square_24 = document.getElementById("square_24");
const square_31 = document.getElementById("square_31");
const square_32 = document.getElementById("square_32");
const square_33 = document.getElementById("square_33");
const square_34 = document.getElementById("square_34");
const square_41 = document.getElementById("square_41");
const square_42 = document.getElementById("square_42");
const square_43 = document.getElementById("square_43");
const square_44 = document.getElementById("square_44");
const square_51 = document.getElementById("square_51");
const square_52 = document.getElementById("square_52");
const square_53 = document.getElementById("square_53");
const square_54 = document.getElementById("square_54");
const square_61 = document.getElementById("square_61");
const square_62 = document.getElementById("square_62");
const square_63 = document.getElementById("square_63");
const square_64 = document.getElementById("square_64");

// Buttons group 1
const button_1H = document.getElementById("button_1H");
const button_1A = document.getElementById("button_1A");
const button_2H = document.getElementById("button_2H");
const button_2A = document.getElementById("button_2A");

// Buttons group 2
const button_4H = document.getElementById("button_4H");
const button_4A = document.getElementById("button_4A");
const button_5H = document.getElementById("button_5H");
const button_5A = document.getElementById("button_5A");

// Buttons group 3
const button_7H = document.getElementById("button_7H");
const button_7A = document.getElementById("button_7A");
const button_8H = document.getElementById("button_8H");
const button_8A = document.getElementById("button_8A");
//#endregion get elements

//#region variables
square_11.style.backgroundColor = "red";
square_12.style.backgroundColor = "red";
square_13.style.backgroundColor = "red";
square_14.style.backgroundColor = "red";
square_21.style.backgroundColor = "green";
square_22.style.backgroundColor = "green";
square_23.style.backgroundColor = "green";
square_24.style.backgroundColor = "green";
square_31.style.backgroundColor = "yellow";
square_32.style.backgroundColor = "yellow";
square_33.style.backgroundColor = "yellow";
square_34.style.backgroundColor = "yellow";
square_41.style.backgroundColor = "black";
square_42.style.backgroundColor = "black";
square_43.style.backgroundColor = "black";
square_44.style.backgroundColor = "black";
square_51.style.backgroundColor = "orange";
square_52.style.backgroundColor = "orange";
square_53.style.backgroundColor = "orange";
square_54.style.backgroundColor = "orange";
square_61.style.backgroundColor = "blue";
square_62.style.backgroundColor = "blue";
square_63.style.backgroundColor = "blue";
square_64.style.backgroundColor = "blue";
// #endregion variables

//#region functions

function rotateRow(row, clockwise) {
  let square1, square2, square3, square4;
  let square5, square6, square7, square8;
  let squareA, squareB, squareC, squareD;
  switch (row) {
    case 1:
      square1 = square_31;
      square2 = square_34;
      square3 = square_51;
      square4 = square_54;
      square5 = square_42;
      square6 = square_41;
      square7 = square_12;
      square8 = square_11;
      squareA = square_21;
      squareB = square_22;
      squareC = square_23;
      squareD = square_24;
      break;
    case 2:
      square1 = square_32;
      square2 = square_33;
      square3 = square_52;
      square4 = square_53;
      square5 = square_43;
      square6 = square_44;
      square7 = square_13;
      square8 = square_14;
      squareA = square_61;
      squareB = square_62;
      squareC = square_63;
      squareD = square_64;
      break;
    case 4:
      square1 = square_62;
      square2 = square_61;
      square3 = square_43;
      square4 = square_42;
      square5 = square_23;
      square6 = square_22;
      square7 = square_34;
      square8 = square_33;
      squareA = square_51;
      squareB = square_52;
      squareC = square_53;
      squareD = square_54;
      break;
    case 5:
      square1 = square_63;
      square2 = square_64;
      square3 = square_44;
      square4 = square_41;
      square5 = square_24;
      square6 = square_21;
      square7 = square_31;
      square8 = square_32;
      squareA = square_11;
      squareB = square_12;
      squareC = square_13;
      squareD = square_14;
      break;
    case 7:
      square1 = square_13;
      square2 = square_12;
      square3 = square_24;
      square4 = square_23;
      square5 = square_54;
      square6 = square_53;
      square7 = square_61;
      square8 = square_64;
      squareA = square_41;
      squareB = square_42;
      squareC = square_43;
      squareD = square_44;
      break;
    case 8:
      square1 = square_14;
      square2 = square_11;
      square3 = square_21;
      square4 = square_22;
      square5 = square_51;
      square6 = square_52;
      square7 = square_62;
      square8 = square_63;
      squareA = square_31;
      squareB = square_32;
      squareC = square_33;
      squareD = square_34;
      break;
    }

  let temp1 = square1.style.backgroundColor;
  let temp2 = square2.style.backgroundColor;
  let temp3 = squareA.style.backgroundColor;
  if (clockwise) {
    square2.style.backgroundColor = square8.style.backgroundColor;
    square1.style.backgroundColor = square7.style.backgroundColor;
    square8.style.backgroundColor = square6.style.backgroundColor;
    square7.style.backgroundColor = square5.style.backgroundColor;
    square6.style.backgroundColor = square4.style.backgroundColor;
    square5.style.backgroundColor = square3.style.backgroundColor;
    square4.style.backgroundColor = temp2;
    square3.style.backgroundColor = temp1;
    squareA.style.backgroundColor = squareD.style.backgroundColor;
    squareD.style.backgroundColor = squareC.style.backgroundColor;
    squareC.style.backgroundColor = squareB.style.backgroundColor;
    squareB.style.backgroundColor = temp3;
  } else {
    square1.style.backgroundColor = square3.style.backgroundColor;
    square2.style.backgroundColor = square4.style.backgroundColor;
    square3.style.backgroundColor = square5.style.backgroundColor;
    square4.style.backgroundColor = square6.style.backgroundColor;
    square5.style.backgroundColor = square7.style.backgroundColor;
    square6.style.backgroundColor = square8.style.backgroundColor;
    square7.style.backgroundColor = temp1;
    square8.style.backgroundColor = temp2;
    squareA.style.backgroundColor = squareB.style.backgroundColor;
    squareB.style.backgroundColor = squareC.style.backgroundColor;
    squareC.style.backgroundColor = squareD.style.backgroundColor;
    squareD.style.backgroundColor = temp3;
  }
}
//#endregion functions

//#region event listeners
// Buttons line 1
button_1H.addEventListener("click", () => {
    rotateRow(1, true);
});
button_1A.addEventListener("click", () => {
    rotateRow(1, false);
});
// Buttons line 2
button_2H.addEventListener("click", () => {
    rotateRow(2, true);
});
button_2A.addEventListener("click", () => {
    rotateRow(2, false);
});
// Buttons line 4
button_4H.addEventListener("click", () => {
    rotateRow(4, true);
});
button_4A.addEventListener("click", () => {
    rotateRow(4, false);
});
// Buttons line 5
button_5H.addEventListener("click", () => {
    rotateRow(5, true);
});
button_5A.addEventListener("click", () => {
    rotateRow(5, false);
});
// Buttons line 7
button_7H.addEventListener("click", () => {
    rotateRow(7, true);
});
button_7A.addEventListener("click", () => {
    rotateRow(7, false);
});
// Buttons line 8
button_8H.addEventListener("click", () => {
    rotateRow(8, true);
});
button_8A.addEventListener("click", () => {
    rotateRow(8, false);
});
//#endregion event listeners
