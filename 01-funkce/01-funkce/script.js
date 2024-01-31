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
// alert('Ahoj');

// metoda - funkce, která patří nějakému objektu
// objekt console má metodu log()
// console.log('Ahoj');
// console.log(  'ahoj'.toUpperCase() );

// vlastní funkce
// základní funkce bez parametrů
function pozdrav() {
  console.log('Ahoj');
}

// spuštění / volání funkce
pozdrav();


// funkce s parametry
function secti(cisloA, cisloB) {
  console.log(cisloA + cisloB);
}

secti(2, 3);
secti(7, 13);


// parametry vs. argumenty
// názvy proměnných v závorce jsou parametry
function predstavSe(jmeno, vek) {
  console.log(`Ahoj, já jsem ${jmeno} a je mi ${vek} let.`);
}

// hodnoty, které do parametrů předáváme,
// jsou argumenty
predstavSe('Luděk', 19);
predstavSe('Luděk', 17);



// návratová hodnota
// return vrací hodnotu z funkce ven
function vynasob(cisloA, cisloB) {
  return cisloA * cisloB;
}

// výsledek funkce si můžeme třeba
// uložit do proměnné
const vysledek = vynasob(4, 8);
console.log(vysledek);

// nebo s ním pracovat přímo uvnitř dalších výrazů
console.log( 100 + vynasob(6, 2) );
