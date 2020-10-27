'use strict';
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');

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
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
