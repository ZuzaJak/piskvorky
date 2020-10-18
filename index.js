'use strict';
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');

const play = (event) => {
  hraje.classList.toggle('board__field--cross');
  if (hraje.classList.contains('board__field--cross')) {
    event.target.classList.add('board__field--circle');
  } else {
    event.target.classList.add('board__field--cross');
  }
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}
