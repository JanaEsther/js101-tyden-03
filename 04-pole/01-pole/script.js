console.log('%c Pole ', 'background:black;color:yellow;');

// // pole - array
const vyherniCisla = [7, 12, 21, 3, 36, 19, 4];

 const jmena = [
 	'Petr',
 	'Alena',
 	'Jana',
 	'Emil',
 	'Julie',
 ];

const pristupy = [true, false, true, true, false];

// // indexy
jmena[3] = 'Barbora';
console.log( jmena[3] );
console.log(jmena);
// // přidání prvku na neexistující index
jmena[6] = 'Ludmila';


// // počet prvků v poli / délka pole
console.log(jmena.length);
console.log(   jmena[5]  );
console.log(jmena);

 // prázdné pole - 
const ukoly = [];
console.log( ukoly.length );


// // míchání datových typů v poli
const ruzne = ['Jana', 17, true, 'Praha', 'učitelka'];
console.log( ruzne[0] );
console.log( ruzne[1] );
console.log(ruzne[3])

// pole objektů
const osoby = [
{ jmeno: 'Alena', vek: 18 },
{ jmeno: 'Lenka', vek: 27 },
{ jmeno: 'Karel', vek: 31 },
{ jmeno: 'Lucie', vek: 24 },
{ jmeno: 'Jana', vek: 50},
{ jmeno: 'Franta', vek: 49},
];

osoby[1].jmeno = 'Lída';
console.log( osoby[1].jmeno);
console.table( osoby );




// pole uvnitř objektu
const osoba = {
jmeno: 'Jana',
prijmeni: 'Nováková',
vek: 12,
kamaradi: [
{ jmeno: 'Ela', vek: 11 },
{ jmeno: 'Jitka', vek: 9 },
{ jmeno: 'Pavel', vek: 12 },
{ jmeno: 'Bětka',vek: 10 },
],
}
console.log(osoba.kamaradi)
console.log(osoba.kamaradi[0])
console.log(  osoba.kamaradi[1].jmeno  )
osoba.kamaradi[2].vek = 10
console.log(osoba.kamaradi)

// pole uvnitř pole / vícerozměrná pole
const hraciPlocha = [
	['x', ' ', 'o'],
	[' ', 'x', 'o'],
	[' ', ' ', 'x'],
	['o', ' ', 'x'],
];

console.log(hraciPlocha);
console.log( hraciPlocha[0][2]);
