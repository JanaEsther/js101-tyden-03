console.log('%c Destrukturování ', 'background:black;color:yellow;');

// destrukturování pole

// const a = cisla[0];
// const b = cisla[1];

const cisla = [4, 9];
let [a, b] = cisla;

cisla[0] = 7;
console.log( a + b );
console.log(cisla);


// přeskakování hodnot
// pole destrukturujeme do proměnných x, y, z,
// ale přeskočíme třetí hodnotu

// const [x, y, , z] = jinaCisla;

// console.log(x, y, z);


// zbytek destrukturovaného pole
// resp operátor
const jinaCisla = [4, 9, 13, 6, 27, 1];

// const [a, b, ...dalsi] = jinaCisla;

// console.log(a, b);
// console.log(dalsi);



// destrukturování objektu
const osoba = {
  jmeno: 'Alena',
  prijmeni: 'Nováková',
  vek: 27,
}

// const jmeno = osoba.jmeno;
// const prijmeni = osoba.prijmeni;
// const vek = osoba.vek;

// const { jmeno, prijmeni, vek } = osoba;


// console.log(`Ahoj. Jsem ${jmeno} ${prijmeni} a je mi ${vek} let.`);




// destrukturování v parametrech funkce
// const eva = {
// 	jmeno: 'Eva',
// 	prijmeni: 'Krátká',
// 	vek: 27,
// }
// const pavel = {
// 	jmeno: 'Pavel',
// 	prijmeni: 'Dlouhý',
// 	vek: 31,
// }

// const pozdrav = ({jmeno, prijmeni, vek}) => {

// 	console.log(`Ahoj. Jsem ${jmeno} ${prijmeni} a je mi ${vek} let.`);

// }

// pozdrav(eva);



// const hodnoty = [1, 2, 3];

// const soucet = ([a, b, c]) => {
// 	console.log(a + b + c);
// }

// soucet(hodnoty);