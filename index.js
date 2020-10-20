'use strict';
// proměnná buttons vybírá pole všech tlačítek
//proměnná hraje vybírá ze stránky <p> s třídami white a board__field--circle, kde se zobrazuje, kdo je na tahu
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');

//funkce, která přidává na event.target (tlačítka) třídy podle toho, jaká třída je na proměnné hraje, zároveň se třídy u hraje mění pomocí toggle
//přidání vnořené podmínky, aby se nedala měnit třída tlačítka, které už třída přidána byla (přepisovalo se kolečko na křížek)
const play = (event) => {
  hraje.classList.toggle('board__field--cross');
  if (hraje.classList.contains('board__field--cross')) {
    if (
      event.target.classList.contains(
        'board__field--circle' || 'board__field--cross',
      )
    ) {
      return null;
    } else {
      event.target.classList.add('board__field--circle');
    }
  } else {
    if (
      event.target.classList.contains(
        'board__field--circle' || 'board__field--cross',
      )
    ) {
      return null;
    } else {
      event.target.classList.add('board__field--cross');
    }
  }
};

//cyklus, který zavolá funkci play na click
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}
