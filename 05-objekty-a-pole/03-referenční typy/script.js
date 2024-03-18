console.log('%c Destrukturování ', 'background:black;color:yellow;');

//Toto ↓↓↓ nejde. Snažíme se přiřadit do proměnné novou hodnotu:
const cisla1= [1, 2, 3];
cisla1 = [4, 5, 6];  // chyba

const osoba1 = { jmeno: 'Alena', vek: 19 };
osoba1 = { jmeno: 'Petr', vek: 24 };  // chyba

//Toto ↓↓↓ naopak jde. Nepřiřazujeme do proměnné novou hodnotu, ale měníme obsah již existujícího pole nebo objektu:
const cisla2 = [1, 2, 3];
cisla2.push(4);
// přidáváme prvek do existujícího pole
// výsledek: [1, 2, 3, 4]

const osoba2 = { jmeno: 'Alena', vek: 19 };
osoba2.jmeno = 'Petr';
// měníme vlastnost existujícího objektu
// výsledek: { jmeno: 'Petr', vek: 19 }

const cisla = [10, 20, 30];
const jinaCisla = cisla;

console.log( cisla );         // [10, 20, 30]
console.log( cisla[1] );      // 20
console.log( jinaCisla );     // [10, 20, 30]
console.log( jinaCisla[1] );  // 20


























































