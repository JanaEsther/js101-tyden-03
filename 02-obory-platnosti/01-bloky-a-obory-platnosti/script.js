console.log('%c Bloky kódu a obory platnosti ', 'background:black;color:yellow;');

// blok kódu je uzavřený do složených závorek
// obaluje příkazy javascriptu (statements)
// v podmínce
/*
if (vek >= 18) {
 	console.log('dospela osoba');
}
*/

// v cyklu
/*
for (let i = 0; i < 5; i++) {
	console.log('cyklus');
}
*/

// ve funkci
/*
function mojeFunkce() {
 	console.log('ahoj z funkce');
}

const mojeFunkce2 = () => {
	console.log('ahoj z funkce');
}
*/

// samostatný blok
/*
{
	console.log('ahoj z bloku');
	console.log('ahoj z bloku');
}
*/

// výjimka - object literal není blok kódu
/*
const osoba = {
	jmeno: 'Alena',
	vek: 23
}
*/


// obory platnosti - scope
// global scope - globální
/*
const cislo = 1;

const pozdrav = () => {
	console.log('Ahoj');
};

console.log(cislo);
pozdrav();


const jinaFunkce = () => {
	console.log(cislo);
	if (cislo === 1) {
		pozdrav();
	}
};
jinaFunkce()
*/

// function scope - ve funkci
/*
const globalniPromenna = 'globalni';

const mojeFunkce = () => {
	const lokalniPromenna = 'lokalni';

	console.log(globalniPromenna);
	console.log(lokalniPromenna);
}

mojeFunkce();
console.log(globalniPromenna);
console.log(lokalniPromenna);
*/

// lokální pro funkci jsou i její parametry
/*
const secti = (a, b) => {
	console.log(a + b);
}

secti(3, 8);
console.log(a); // chyba
*/


// block scope - uvnitř bloku
// proměnné založené uvnitř jakéhokoliv bloku
// jsou lokální pro tento blok, ať je to
// uvnitř podmínky, cyklu, samostatného bloku
/*
{
 	const napoj = 'pivo';
 	console.log(napoj);
}

console.log(napoj);
*/


// vnořené obory platnosti
// pokud máme do sebe vnořených více bloků,
// tak proměnné z vnějších bloků jsou dostupné
// ve vnořených blocích, ale ne obráceně
/*
const globalni = 'globalni';

const mojeFunkce = () => {
	const lokalniProFunkci = 'lokalni pro funkci';

	console.log(globalni);
	console.log(lokalniProFunkci);

	if (true) {
		const lokalniProBlok = 'lokalni pro blok';
		console.log(lokalniProBlok);
		console.log(lokalniProFunkci);
	}

}

mojeFunkce();
console.log(globalni);
*/


// obor platnosti modulu - module scope
// proměnné nadefinované v jednom modulu
// nejsou dostupné v jiných modulech
