console.log('%c Metody pole ', 'background:black;color:yellow;');




// Přidávání prvků do pole
// push, unshift

// jmena.push('Klára');
// jmena.push('Karel');

// jmena.unshift('Jitka');
// jmena.unshift('Milan');



// Odebírání prvků z pole
// pop, shift

// console.table(jmena)

// const odebranoKonec = jmena.pop();
// const odebranoZacatek = jmena.shift();

// console.table(jmena);

// console.log('Z konce jsme odstranili: ' + odebranoKonec);
// console.log('Ze zacatku jsme odstranili: ' + odebranoZacatek);

// hodnota odebraného prvku



// Vyjmout z pole nebo nahradit
// splice - nahrazení/smazání prvku uvnitř pole
// console.table(jmena);

// jmena.splice(1, 2); // ostranit
// jmena.splice(1, 2, 'Karel', 'Gábina', 'Denisa');  // nahrazeni
// jmena.splice(1, 0, 'Karel', 'Gábina', 'Denisa'); // pridat




// slice - nové pole vytvořené z části původního

// const novaJmena1 = jmena.slice(1, 3)
// console.table(novaJmena1);

// const novaJmena2 = jmena.slice(2)
// console.table(novaJmena2);

// const novaJmena3 = jmena.slice(-2)
// console.table(novaJmena3);

// const novaJmena4 = jmena.slice(-3, 4)
// console.table(novaJmena4);



// Hledání v poli
// includes
// console.log(  jmena.includes('Alena')   )

const jmena = ['Petr', 'Alena', 'Jana', 'Emil', 'Julie'];

// indexOf
const jmeno = 'Marek';

const pozice = jmena.indexOf(jmeno);
if (pozice === -1) {
	console.log(`Hodnota ${jmeno} nebyla nalezena`);
} else {
	console.log(`${jmeno} je v poli na indexu ${pozice}`)
}
