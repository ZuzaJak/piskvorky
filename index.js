'use strict';
// proměnná buttons vybírá pole všech tlačítek
//proměnná hraje vybírá ze stránky <p> s třídami white a board__field--circle, kde se zobrazuje, kdo je na tahu
const buttons = document.querySelectorAll('button');
const hraje = document.querySelector('.white');

/* 1) funkce, která přidává na event.target (tlačítka) třídy podle toho, jaká třída je na proměnné hraje, zároveň se třídy u hraje mění pomocí toggle
2.verze) přidání vnořené podmínky, aby se nedala měnit třída tlačítka, které už třída přidána byla (přepisovalo se kolečko na křížek)
3.verze) vnoření hraje.classList.toggle do podmínky, ale ještě to blbne při opětovném kliknutí na křížek (přidá to dvě třídy buttonu, zatím nevidím proč...) */
const play = (event) => {
  if (hraje.classList.contains('board__field--cross')) {
    if (
      event.target.classList.contains(
        'board__field--circle' || 'board__field--cross',
      )
    ) {
      return null;
    } else {
      event.target.classList.add('board__field--cross');
      hraje.classList.toggle('board__field--cross');
    }
  } else {
    if (
      event.target.classList.contains(
        'board__field--circle' || 'board__field--cross',
      )
    ) {
      return null;
    } else {
      event.target.classList.add('board__field--circle');
      hraje.classList.toggle('board__field--cross');
    }
  }
};

//cyklus, který zavolá funkci play na click
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}
