'use strict';
const circle = document.querySelector('.board__field--circle');
const cross = document.querySelector('.board__field--cross');
const buttons = document.querySelector('button');
const hraje = document.querySelector('.white');

/* hraje.classList.toggle('board__field--cross'); */

const play = () => {
  if (hraje === circle) {
    buttons.className = 'board__field--circle';
  } else {
    buttons.className = 'board__field--cross';
  }
};

buttons.addEventListener('click', play);
