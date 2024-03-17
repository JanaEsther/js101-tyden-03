console.log('%c Metody pole ', 'background:black;color:yellow;');

const jmena1 = ['Petr', 'Alena','Jana', 'Emil', 'Julie'];
jmena1[jmena1.length] = 'Klara';
jmena1[jmena1.length] = 'Adela';
console.log(jmena1);

// Přidávání prvků do pole
// push, unshift
//push = přidat na konec
jmena1.push('Marie');
jmena1.push('Julie');
jmena1.push('Karel');
console.log(jmena1);

//unshift = přidat na začátek

jmena1.unshift('Julie');
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

// hodnota odebraného prvku
const odebranoKonec = jmena1.pop();
const odebranoZacatek = jmena1.shift();

console.table(jmena1);

console.log('Z konce jsme odstranili: ' + odebranoKonec);
console.log('Ze zacatku jsme odstranili: ' + odebranoZacatek);



// Vyjmout z pole nebo nahradit
// splice - nahrazení/smazání prvku uvnitř pole
console.table(jmena1);

jmena1.splice(1, 2); // ostranit 2 jmena 
console.table(jmena1);
jmena1.splice(1, 2, 'Franta', 'Gábina', 'Denisa');  // odstranění + nahrazeni 1 od jakého indexu, 2 - kolik prvků smazat
console.table(jmena1);
jmena1.splice(1, 0, 'Jiří', 'Tomáš', 'Jakub'); // od indexu 1 nula prvků smazat a chci od tohoto indexu pridat
console.table(jmena1);


// slice - nové pole vytvořené z části původního, nemění půvosní pole, ale vrací nějaký dílek původního pole jako nové pole

const novaJmena1 = jmena1.slice(1, 3) // od indexu 1 včetně do indexu 3 nevčetně
console.table(novaJmena1);

const novaJmena2 = jmena1.slice(2) // od indexu 2 až na konec pole
console.table(novaJmena2);

const novaJmena3 = jmena1.slice(-2)// index od druhého prvku od konce až do konce
console.table(novaJmena3);

const novaJmena4 = jmena1.slice(-3, 4) // od indexu -3 včetně až do indexu 4 nevčetně
console.table(novaJmena4);



// Hledání v poli - 2 metody 

const jmena = ['Petr', 'Alena', 'Jana', 'Emil', 'Julie'];

// 1. metoda = includes
console.log(  jmena.includes('Alena'))
console.log(  jmena.includes('Franta'))


// indexOf - vrací kde přesně prvek je , na jakém indexu

console.log(jmena.indexOf('Jana'))// jaký index má Jana v poli jmen
console.log(jmena.indexOf('Emil'))
console.log(jmena.indexOf('Marek'))// hodnota -1 znamená, že hodnota nebyla v poli nalezena


const jmeno = 'Jana';

const pozice = jmena.indexOf(jmeno);
if (pozice === -1) {
	console.log(`Hodnota ${jmeno} nebyla nalezena`);
} else {
	console.log(`${jmeno} je v poli na indexu ${pozice}`)
}

const jmeno1 = 'Herbert';

const pozice1 = jmena.indexOf(jmeno1); 
if (pozice1 === -1){
	console.log(`Hodnota ${jmeno1} nebyla nalezena`);
} else {
	console.log(`${jmeno1} je v poli na indexu ${pozice1}`);
}

//další metody pro pole - dokumentace objektu Array (pole)