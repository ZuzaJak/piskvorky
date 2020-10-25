'use strict';
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');
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
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}
