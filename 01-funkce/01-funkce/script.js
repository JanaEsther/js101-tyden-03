console.log('%c Funkce ', 'background:black;color:yellow;');

/*
Základní syntaxe funkce:

function nazevFunkce(parametr1, parametr2, ...) {
  // kod
  return hodnota;
}
*/

// zabudované funkce v JavaScriptu
// funkce vs. metoda
//alert('Ahoj');

// metoda - funkce, která patří nějakému objektu
// objekt console má metodu log()

console.log('Ahoj');
console.log( 'ahoj'.toUpperCase());
console.log('AHOJ'.toLowerCase());

// vlastní funkce
// základní funkce bez parametrů
function pozdrav() {
  console.log('Ahoj');
} 

function ahoj() {
  console.log('AHOJ'.toLowerCase());
}


// spuštění / volání funkce
pozdrav();
ahoj();
pozdrav();
ahoj();
pozdrav();
ahoj();


// funkce s parametry
function secti(cisloA, cisloB, cisloC) {
  console.log(cisloA + cisloB + cisloC);
}

secti(2, 3, 4);
secti(8, 12, 20);
secti(80, 120, 200);


// parametry vs. argumenty
// názvy proměnných v závorce jsou parametry
(function predstavSe(jmeno, vek) {
  console.log(`Ahoj, já jsem ${jmeno} a je mi ${vek} let.`);
}
)()
// hodnoty, které do parametrů předáváme,
// jsou argumenty
predstavSe('Luděk', 19);
predstavSe('Luděk', 17);
predstavSe('Rusco', 3);
predstavSe('Jana', 25);
predstavSe('Jana', 23);




// návratová hodnota
// return vrací hodnotu z funkce ven
function vynasob(cisloA, cisloB, cisloC) {
  return cisloA * cisloB * cisloC;
}

function vynasobx(cisloA, cisloB, cisloC) {
  vysledek = cisloA * cisloB * cisloC;
  console.log(vysledek);
}

vynasob(2, 4, 10)
vynasob(15, 20, 30)
vynasob(30, 40, 60)

// výsledek funkce si můžeme třeba
// uložit do proměnné
const vysledek = vynasob(2, 4, 10);
console.log(vysledek);

// nebo s ním pracovat přímo uvnitř dalších výrazů

console.log(100 + vynasob(15, 20, 30));

console.log(vynasob(5,10,20));
console.log(vynasob(2,3,4));