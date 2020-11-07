'use strict';
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');
const cross = document.querySelector('.board__field--cross');
const circle = document.querySelector('.board__field--circle');

const boardSize = 10;
const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < buttons.length) {
    if (field === buttons[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const getField = (row, column) => buttons[row * boardSize + column];

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return cross;
  } else if (field.classList.contains('board__field--circle')) {
    return circle;
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }
  let diagonalRow;
  let diagonalColumn;

  let diagonalRight = 1;

  diagonalRow = origin.row;
  diagonalColumn = origin.column;

  while (
    diagonalColumn < boardSize - 1 &&
    diagonalRow > 0 &&
    symbol === getSymbol(getField(diagonalRow - 1, diagonalColumn + 1))
  ) {
    diagonalRight += 1;
    diagonalRow -= 1;
    diagonalColumn += 1;
  }

  diagonalRow = origin.row;
  diagonalColumn = origin.column;

  while (
    diagonalRow < boardSize - 1 &&
    diagonalColumn > 0 &&
    symbol === getSymbol(getField(diagonalRow + 1, diagonalColumn - 1))
  ) {
    diagonalRight += 1;
    diagonalRow += 1;
    diagonalColumn -= 1;
  }

  if (diagonalRight >= symbolsToWin) {
    return true;
  }

  let diagonalLeft = 1;

  diagonalRow = origin.row;
  diagonalColumn = origin.column;

  while (
    diagonalColumn < boardSize - 1 &&
    diagonalRow > 0 &&
    symbol === getSymbol(getField(diagonalRow - 1, diagonalColumn - 1))
  ) {
    diagonalLeft += 1;
    diagonalRow -= 1;
    diagonalColumn -= 1;
  }

  diagonalRow = origin.row;
  diagonalColumn = origin.column;

  while (
    diagonalRow < boardSize - 1 &&
    diagonalColumn > 0 &&
    symbol === getSymbol(getField(diagonalRow + 1, diagonalColumn + 1))
  ) {
    diagonalLeft += 1;
    diagonalRow += 1;
    diagonalColumn += 1;
  }

  if (diagonalLeft >= symbolsToWin) {
    return true;
  }
  return false;
};

const play = (event) => {
  if (hraje.classList.contains('board__field--cross')) {
    event.target.classList.add('board__field--cross');
    event.target.setAttribute('disabled', true);
    hraje.classList.toggle('board__field--cross');
  } else {
    event.target.classList.add('board__field--circle');
    event.target.setAttribute('disabled', true);
    hraje.classList.toggle('board__field--cross');
  }
  if (isWinningMove(event.target)) {
    console.log('isWinningMove je true');
    if (event.target.classList.contains('board__field--cross')) {
      confirm('Vyhrává křížek!');
      location.reload();
    } else if (event.target.classList.contains('board__field--circle')) {
      confirm('Vyhrává kolečko!');
      location.reload();
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
