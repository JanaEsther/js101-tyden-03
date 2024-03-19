console.log('%c Objekty a pole jsou referenční typy', 'background:black;color:yellow;');

/*
## Konstanty obsahující pole nebo objekt můžeme měnit

Proměnná nadefinovaná jako **konstanta** znamená, že do ní **nemůžeme přiřadit novou hodnotu**. 
Již přiřazenou hodnotu ale můžeme změnit.

**Toto ↓↓↓ nejde. Snažíme se přiřadit do proměnné novou hodnotu:**
*/ 

const cisla= [1, 2, 3];
cisla = [4, 5, 6];  // chyba

const osoba = { jmeno: 'Alena', vek: 19 };
osoba = { jmeno: 'Petr', vek: 24 };  // chyba

//Toto ↓↓↓ naopak jde. Nepřiřazujeme do proměnné novou hodnotu, ale měníme obsah již existujícího pole nebo objektu:
const cisla1 = [1, 2, 3];
cisla1.push(4,5);
// přidáváme prvek do existujícího pole
// výsledek: [1, 2, 3, 4]

const osoba1 = { jmeno: 'Alena', vek: 19 };
osoba.jmeno = 'Petr';
// měníme vlastnost existujícího objektu
// výsledek: { jmeno: 'Petr', vek: 19 }

//## Dvě proměnné mohou ukazovat na stejné pole nebo objekt

//Protože proměnná typu pole nebo objekt přímo neobsahuje hodnotu, ale pouze odkaz (referenci) na tuto hodnotu, 
//může se jednoduše stát, že dvě proměnné budou obsahovat stejný odkaz.## Dvě proměnné mohou ukazovat na stejné pole nebo objekt

const cisla2 = [10, 25, 30];
const jinaCisla = cisla;

console.log( cisla2);         // [10, 20, 30]
console.log( cisla2[1] );      // 20
console.log( jinaCisla );     // [10, 20, 30]
console.log( jinaCisla[1] );  // 20
console.log( jinaCisla[2] );  // 30

/*
Na první pohled to vypadá, že máme dvě samostatné pole, která shodou náhod obsahují stejné hodnoty. Není to ale pravda!

Protože pole je referenční datový typ, tak proměnná `cisla` obsahuje **odkaz** na místo, kde jsou hodnoty pole uložené v paměti. 
Když uděláme `jinaCisla = cisla`, znamená to, že jsme odkaz z proměnné čísla uložili i do proměnné `jinaCisla`. 
Takže obě proměnné nyní ukazují v paměti na stejné hodnoty našeho pole.

To můžeme jednoduše ověřit tak, že změníme jedno pole a uvidíme, že se nám změní i to druhé.
*/ 



















































































