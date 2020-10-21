'use strict';
// proměnná buttons vybírá pole všech tlačítek
//proměnná hraje vybírá ze stránky <p> s třídami white a board__field--circle, kde se zobrazuje, kdo je na tahu
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');

/* Funkce, která přidává na event.target třídy podle toho, jaká třída je na proměnné "hraje", zároveň se u "hraje" přidává a odebírá třída "board__field--cross"(toggle).
Chyba - po opětovném kliknutí na políčko již obsahující křížek (když je na tahu kolečko) se přidá třída kolečka k buttonu a prohodí se, kdo je na tahu */
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
