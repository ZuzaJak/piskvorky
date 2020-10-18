'use strict';
const circle = document.querySelector('.board__field--circle');
const cross = document.querySelector('.board__field--cross');
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');

const tah = () => {
  hraje.classList.toggle('board__field--circle');
  hraje.classList.toggle('board__field--cross');
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', tah);
}

const play = (event) => {
  if (hraje === cross) {
    event.target.classList.add('board__field--cross');
  } else {
    event.target.classList.add('board__field--circle');
  }
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}
