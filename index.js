'use strict';
const circle = document.querySelector('.board__field--circle');
const cross = document.querySelector('.board__field--cross');
/* const buttons = document.querySelectorAll('button');  NEFUNGUJE */
const buttons = document.querySelector('button');
const hraje = document.querySelector('.white');

const play = () => {
  if (hraje === circle) {
    buttons.className = 'board__field--circle';
  } else {
    buttons.className = 'board__field--cross';
  }
};

buttons.addEventListener('click', play);

/* for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}
 NEFUNGUJE */
