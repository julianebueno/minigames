//#region get elements
// Squares
const square_11 = document.getElementById("square_11");
const square_12 = document.getElementById("square_12");
const square_13 = document.getElementById("square_13");
const square_14 = document.getElementById("square_14");
const square_15 = document.getElementById("square_15");
const square_16 = document.getElementById("square_16");
const square_17 = document.getElementById("square_17");
const square_18 = document.getElementById("square_18");
const square_19 = document.getElementById("square_19");

const square_21 = document.getElementById("square_21");
const square_22 = document.getElementById("square_22");
const square_23 = document.getElementById("square_23");
const square_24 = document.getElementById("square_24");
const square_25 = document.getElementById("square_25");
const square_26 = document.getElementById("square_26");
const square_27 = document.getElementById("square_27");
const square_28 = document.getElementById("square_28");
const square_29 = document.getElementById("square_29");

const square_31 = document.getElementById("square_31");
const square_32 = document.getElementById("square_32");
const square_33 = document.getElementById("square_33");
const square_34 = document.getElementById("square_34");
const square_35 = document.getElementById("square_35");
const square_36 = document.getElementById("square_36");
const square_37 = document.getElementById("square_37");
const square_38 = document.getElementById("square_38");
const square_39 = document.getElementById("square_39");

const square_41 = document.getElementById("square_41");
const square_42 = document.getElementById("square_42");
const square_43 = document.getElementById("square_43");
const square_44 = document.getElementById("square_44");
const square_45 = document.getElementById("square_45");
const square_46 = document.getElementById("square_46");
const square_47 = document.getElementById("square_47");
const square_48 = document.getElementById("square_48");
const square_49 = document.getElementById("square_49");

const square_51 = document.getElementById("square_51");
const square_52 = document.getElementById("square_52");
const square_53 = document.getElementById("square_53");
const square_54 = document.getElementById("square_54");
const square_55 = document.getElementById("square_55");
const square_56 = document.getElementById("square_56");
const square_57 = document.getElementById("square_57");
const square_58 = document.getElementById("square_58");
const square_59 = document.getElementById("square_59");

const square_61 = document.getElementById("square_61");
const square_62 = document.getElementById("square_62");
const square_63 = document.getElementById("square_63");
const square_64 = document.getElementById("square_64");
const square_65 = document.getElementById("square_65");
const square_66 = document.getElementById("square_66");
const square_67 = document.getElementById("square_67");
const square_68 = document.getElementById("square_68");
const square_69 = document.getElementById("square_69");

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

//#region variables
square_11.style.backgroundColor = "red";
square_12.style.backgroundColor = "red";
square_13.style.backgroundColor = "red";
square_14.style.backgroundColor = "red";
square_15.style.backgroundColor = "red";
square_16.style.backgroundColor = "red";
square_17.style.backgroundColor = "red";
square_18.style.backgroundColor = "red";
square_19.style.backgroundColor = "red";

square_21.style.backgroundColor = "green";
square_22.style.backgroundColor = "green";
square_23.style.backgroundColor = "green";
square_24.style.backgroundColor = "green";
square_25.style.backgroundColor = "green";
square_26.style.backgroundColor = "green";
square_27.style.backgroundColor = "green";
square_28.style.backgroundColor = "green";
square_29.style.backgroundColor = "green";

square_31.style.backgroundColor = "yellow";
square_32.style.backgroundColor = "yellow";
square_33.style.backgroundColor = "yellow";
square_34.style.backgroundColor = "yellow";
square_35.style.backgroundColor = "yellow";
square_36.style.backgroundColor = "yellow";
square_37.style.backgroundColor = "yellow";
square_38.style.backgroundColor = "yellow";
square_39.style.backgroundColor = "yellow";

square_41.style.backgroundColor = "black";
square_42.style.backgroundColor = "black";
square_43.style.backgroundColor = "black";
square_44.style.backgroundColor = "black";
square_45.style.backgroundColor = "black";
square_46.style.backgroundColor = "black";
square_47.style.backgroundColor = "black";
square_48.style.backgroundColor = "black";
square_49.style.backgroundColor = "black";

square_51.style.backgroundColor = "orange";
square_52.style.backgroundColor = "orange";
square_53.style.backgroundColor = "orange";
square_54.style.backgroundColor = "orange";
square_55.style.backgroundColor = "orange";
square_56.style.backgroundColor = "orange";
square_57.style.backgroundColor = "orange";
square_58.style.backgroundColor = "orange";
square_59.style.backgroundColor = "orange";

square_61.style.backgroundColor = "blue";
square_62.style.backgroundColor = "blue";
square_63.style.backgroundColor = "blue";
square_64.style.backgroundColor = "blue";
square_65.style.backgroundColor = "blue";
square_66.style.backgroundColor = "blue";
square_67.style.backgroundColor = "blue";
square_68.style.backgroundColor = "blue";
square_69.style.backgroundColor = "blue";
// #endregion variables

//#region functions

function rotateRow(row, clockwise) {
  let square1, square2, square3, square4;
  let square5, square6, square7, square8;
  let square9, square10, square11, square12;
  let squareA, squareB, squareC, squareD;
  let squareE, squareF, squareG, squareH;
  switch (row) {
    case 1:
      square1 = square_37;
      square2 = square_38;
      square3 = square_39;
      square4 = square_47;
      square5 = square_48;
      square6 = square_49;
      square7 = square_69;
      square8 = square_66;
      square9 = square_63;
      square10 = square_19;
      square11 = square_16;
      square12 = square_13;
      squareA = square_21;
      squareB = square_22;
      squareC = square_23;
      squareD = square_26;
      squareE = square_29;
      squareF = square_28;
      squareG = square_27;
      squareH = square_24;
      break;
    case 2:
      square1 = square_34;
      square2 = square_35;
      square3 = square_36;
      square4 = square_44;
      square5 = square_45;
      square6 = square_46;
      square7 = square_68;
      square8 = square_65;
      square9 = square_62;
      square10 = square_18;
      square11 = square_15;
      square12 = square_12;
      break;
    case 3:
      square1 = square_31;
      square2 = square_32;
      square3 = square_33;
      square4 = square_41;
      square5 = square_42;
      square6 = square_43;
      square7 = square_67;
      square8 = square_64;
      square9 = square_61;
      square10 = square_17;
      square11 = square_14;
      square12 = square_11;
      squareA = square_51;
      squareB = square_52;
      squareC = square_53;
      squareD = square_56;
      squareE = square_59;
      squareF = square_58;
      squareG = square_57;
      squareH = square_54;
      break;
    case 4:
      square1 = square_57;
      square2 = square_58;
      square3 = square_59;
      square4 = square_67;
      square5 = square_68;
      square6 = square_69;
      square7 = square_29;
      square8 = square_26;
      square9 = square_23;
      square10 = square_39;
      square11 = square_36;
      square12 = square_33;
      squareA = square_41;
      squareB = square_42;
      squareC = square_43;
      squareD = square_46;
      squareE = square_49;
      squareF = square_48;
      squareG = square_47;
      squareH = square_44;
      break;
    case 5:
      square1 = square_54;
      square2 = square_55;
      square3 = square_56;
      square4 = square_64;
      square5 = square_65;
      square6 = square_66;
      square7 = square_28;
      square8 = square_25;
      square9 = square_22;
      square10 = square_38;
      square11 = square_35;
      square12 = square_32;
      break;
    case 6:
      square1 = square_51;
      square2 = square_52;
      square3 = square_53;
      square4 = square_61;
      square5 = square_62;
      square6 = square_63;
      square7 = square_27;
      square8 = square_24;
      square9 = square_21;
      square10 = square_37;
      square11 = square_34;
      square12 = square_31;
      squareA = square_11;
      squareB = square_12;
      squareC = square_13;
      squareD = square_16;
      squareE = square_19;
      squareF = square_18;
      squareG = square_17;
      squareH = square_14;
      break;
    case 7:
      square1 = square_17;
      square2 = square_18;
      square3 = square_19;
      square4 = square_27;
      square5 = square_28;
      square6 = square_29;
      square7 = square_49;
      square8 = square_46;
      square9 = square_43;
      square10 = square_59;
      square11 = square_56;
      square12 = square_53;
      squareA = square_61;
      squareB = square_62;
      squareC = square_63;
      squareD = square_66;
      squareE = square_69;
      squareF = square_68;
      squareG = square_67;
      squareH = square_64;
      break;
    case 8:
      square1 = square_14;
      square2 = square_15;
      square3 = square_16;
      square4 = square_24;
      square5 = square_25;
      square6 = square_26;
      square7 = square_48;
      square8 = square_45;
      square9 = square_42;
      square10 = square_58;
      square11 = square_55;
      square12 = square_52;
      break;
    case 9:
      square1 = square_11;
      square2 = square_12;
      square3 = square_13;
      square4 = square_21;
      square5 = square_22;
      square6 = square_23;
      square7 = square_47;
      square8 = square_44;
      square9 = square_41;
      square10 = square_57;
      square11 = square_54;
      square12 = square_51;
      squareA = square_31;
      squareB = square_32;
      squareC = square_33;
      squareD = square_36;
      squareE = square_39;
      squareF = square_38;
      squareG = square_37;
      squareH = square_34;
      break;
    }

  let temp1 = square1.style.backgroundColor;
  let temp2 = square2.style.backgroundColor;
  let temp3 = square3.style.backgroundColor;
  if (clockwise) {
    square3.style.backgroundColor = square12.style.backgroundColor;
    square2.style.backgroundColor = square11.style.backgroundColor;
    square1.style.backgroundColor = square10.style.backgroundColor;
    square12.style.backgroundColor = square9.style.backgroundColor;
    square11.style.backgroundColor = square8.style.backgroundColor;
    square10.style.backgroundColor = square7.style.backgroundColor;
    square9.style.backgroundColor = square6.style.backgroundColor;
    square8.style.backgroundColor = square5.style.backgroundColor;
    square7.style.backgroundColor = square4.style.backgroundColor;
    square6.style.backgroundColor = temp3;
    square5.style.backgroundColor = temp2;
    square4.style.backgroundColor = temp1;

    if (row == 1 || row == 3 || row == 4 || row == 6 || row == 7 || row == 9) {
      let tempA = squareA.style.backgroundColor;
      let tempB = squareB.style.backgroundColor;
      squareB.style.backgroundColor = squareH.style.backgroundColor;
      squareA.style.backgroundColor = squareG.style.backgroundColor;
      squareH.style.backgroundColor = squareF.style.backgroundColor;
      squareG.style.backgroundColor = squareE.style.backgroundColor;
      squareF.style.backgroundColor = squareD.style.backgroundColor;
      squareE.style.backgroundColor = squareC.style.backgroundColor;
      squareD.style.backgroundColor = tempB;
      squareC.style.backgroundColor = tempA;
    }
    
  } else {
    square1.style.backgroundColor = square4.style.backgroundColor;
    square2.style.backgroundColor = square5.style.backgroundColor;
    square3.style.backgroundColor = square6.style.backgroundColor;
    square4.style.backgroundColor = square7.style.backgroundColor;
    square5.style.backgroundColor = square8.style.backgroundColor;
    square6.style.backgroundColor = square9.style.backgroundColor;  
    square7.style.backgroundColor = square10.style.backgroundColor;
    square8.style.backgroundColor = square11.style.backgroundColor;
    square9.style.backgroundColor = square12.style.backgroundColor;
    square10.style.backgroundColor = temp1;
    square11.style.backgroundColor = temp2;
    square12.style.backgroundColor = temp3;

    if (row == 1 || row == 3 || row == 4 || row == 6 || row == 7 || row == 9) {
      let tempA = squareA.style.backgroundColor;
      let tempB = squareB.style.backgroundColor;
      squareA.style.backgroundColor = squareC.style.backgroundColor;
      squareB.style.backgroundColor = squareD.style.backgroundColor;
      squareC.style.backgroundColor = squareE.style.backgroundColor;
      squareD.style.backgroundColor = squareF.style.backgroundColor;
      squareE.style.backgroundColor = squareG.style.backgroundColor;
      squareF.style.backgroundColor = squareH.style.backgroundColor;
      squareG.style.backgroundColor = tempA;
      squareH.style.backgroundColor = tempB;
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
