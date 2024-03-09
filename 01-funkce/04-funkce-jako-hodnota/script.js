console.log('%c Funkce jako hodnota ', 'background:black;color:yellow;');

/*
Funkce je v JavaScriptu datový typ.
Chová se, jako jakákoliv jiná hodnota.

const nazevFunkce = function() { ... };
*/
//anonymní funkce = fuknce bez názvu
// function expression
// anonymní funkci přiřadíme do proměnné
// a tím ji pojmenujeme

const secti = function (a, b) {
	console.log(a + b);
}

secti(3, 4);

/*výraz, který vrací funkci jako hodnotu
můžeme ji spustit, tím že za výraz přidáme kulaté závorky a přidáme
do nich čísla*/
(function (a, b) {
	console.log(a + b);
})(2, 3)



// funkce jako hodnota

// existující funkci můžeme přiřadit do další proměnné
const scitani = secti;
// a pak ji zavolat
scitani(6, 5);

// funkce je hodnota jako jakákoliv jiná
const cislo = 17;
const jmeno = 'Alena';
const jeZena = true;
const odecti = function(a, b) {
	console.log(a - b);
}

odecti(10,5)

const odecitani = odecti;
odecitani(10,5)

// pozor na:
// přiřazení funkce do proměnné vs. volání funkce

// do proměnné soucetFunkce přiřazuji funkci
// tj. mohu pak volat soucetFunkce(1, 2)
const soucetFunkce = secti;

// do proměnné soucetCislo přířazuji výsledek volání funkce
// tj. do soucetCislo se uloží 8
const soucetCislo = secti(3, 5);
