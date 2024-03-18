console.log('%c Destrukturování ', 'background:black;color:yellow;');

// destrukturování pole

//const a = cisla[0];
//const b = cisla[1];

const cisla = [4, 9];
let [a, b] = cisla;

// const [a,b] = [4, 9]
//const [a,b]  = cisla

cisla[0] = 7;
console.log( a + b );
console.log(cisla);


// přeskakování hodnot
// pole destrukturujeme do proměnných x, y, z,
// ale přeskočíme třetí hodnotu

const jinaCisla = [4, 9, 13, 6, 27, 1];

const [x, y, ,z] = jinaCisla;

console.log(x, y, z);


// zbytek destrukturovaného pole
// resp operátor - spread operátor
const jinaCisla1 = [4, 9, 13, 6, 27, 1];


const jinaCisla2 = [4, 9, 13, 6, 27, 1];
const [s, d, ...dalsi] = jinaCisla2;
console.log(s, d);
console.log(dalsi);

// destrukturování objektu
const osoba = {
  jmeno: 'Jana',
  prijmeni: 'Obendraufová',
  vek: 50,
}


//const jmeno = osoba.jmeno;
//const prijmeni = osoba.prijmeni;
//const vek = osoba.vek;
const { jmeno, prijmeni, vek } = osoba;


console.log(`Ahoj. Jsem ${jmeno} ${prijmeni} a je mi ${vek} let.`);


// destrukturování v parametrech funkce
const eva = {
jmeno: 'Eva',
prijmeni: 'Krátká',
vek: 27,
}

const pavel = {
jmeno: 'Pavel',
prijmeni: 'Dlouhý',
vek: 31,
}

const franta = {
  jmeno: 'František',
  prijmeni: 'Král',
  vek: 49,
  }

const pozdrav = ({jmeno, prijmeni, vek}) => {

	console.log(`Ahoj. Jsem ${jmeno} ${prijmeni} a je mi ${vek} let.`);

 };

pozdrav(eva);
pozdrav(pavel);
pozdrav(franta);



const hodnoty = [1, 2, 3];

const soucet = ([a, b, c]) => {
	console.log(a + b + c);
}
 soucet(hodnoty);