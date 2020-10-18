'use strict';
const circle = document.querySelector('.board__field--circle');
const cross = document.querySelector('.board__field--cross');
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');

const play = (event) => {
  if (hraje === circle) {
    event.target.classList.add('board__field--circle');
  } else {
    event.target.classList.add('board__field--cross');
  }
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}
