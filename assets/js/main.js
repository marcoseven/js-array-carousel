/* 
Dati tre array contenenti:
- una lista ordinata di 5 immagini,
- una lista ordinata dei relativi 5 luoghi e
- una lista di 5 news, creare un carosello come nella foto allegata. Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi
titolo e testo. 
- allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.

BONUS:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

STRUMENTI:
- 2 EventListener;
- 3 array;
- 1 ciclo for;
- if (bonus).
*/

// array
const items = [
	"img/01.jpg",
	"img/02.jpg",
	"img/03.jpg",
	"img/04.jpg",
	"img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
	"Lorem ipsum",
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
	"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

// variabili
let arrowUp = document.getElementById("button_up>i");
let arrowDown = document.getElementById("button_down>i");

// for
for (let index = 0; index < array.length; index++) {}
