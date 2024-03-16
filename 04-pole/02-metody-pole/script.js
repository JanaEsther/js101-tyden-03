console.log('%c Metody pole ', 'background:black;color:yellow;');

const jmena1 = ['Petr', 'Alena','Jana', 'Emil', 'Julie'];
//jmena1[jmena1.length] = 'Klara';

// Přidávání prvků do pole
// push, unshift
//push = přidat na konec
jmena1.push('Klara');
jmena1.push('Jitka');
jmena1.push('Karel');
console.log(jmena1);

//unshift = přidat na začátek

jmena1.unshift('Jitka');
jmena1.unshift('Milan');
console.log(jmena1);

// Odebírání prvků z pole
// pop, shift
//pop = odebrat z konce
//shift = odebrat ze začátku
console.table(jmena1);
jmena1.pop();
console.table(jmena1);
jmena1.shift();
console.table(jmena1);
// console.table(jmena)

const odebranoKonec = jmena1.pop();
const odebranoZacatek = jmena1.shift();

console.table(jmena1);

console.log('Z konce jsme odstranili: ' + odebranoKonec);
console.log('Ze zacatku jsme odstranili: ' + odebranoZacatek);

// hodnota odebraného prvku



// Vyjmout z pole nebo nahradit
// splice - nahrazení/smazání prvku uvnitř pole
console.table(jmena1);

jmena1.splice(1, 2); // ostranit
console.table(jmena1);
jmena.splice(1, 2, 'Karel', 'Gábina', 'Denisa');  // nahrazeni
jmena.splice(1, 0, 'Karel', 'Gábina', 'Denisa'); // pridat




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
