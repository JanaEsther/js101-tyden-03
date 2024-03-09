console.log('%c Arrow function ', 'background:black;color:yellow;');

/*
Základní syntaxe arrow function:
- zmizelo slovo function
- mezi parametry v kulatých závorkách
-a mezi tělem funkce je tzv. tlustá šipka =>
- jinak se funkce chová a volá stejně
*/

function staryZpusob(a, b) {
	return a+b;
}

const secti = (a, b) => {
	return a + b;
}

console.log(secti(100, 350));


// Zkracování/zjednodušování zápisu funkce

/*
Implicitní return. Pokud funkce JENOM vrací hodnotu
a není v ní žádný jiný kód (tj.v těle funkce je
jen jeden řádek se slovem return), tak můžeme:
- vypustit složené závorky
- vypustit slovo return
Za šipkou bude jen hodnota/výraz, který funkce vrací.
*/
const odecti = (a, b) => a - b;



/*
Pokud má funkce pouze jeden parametr,
můžeme odstranit kulaté závorky kolem parametru.
Ale nemusíme - většinou je lepší být konzistentní
a psát je i kolem jednoho parametru.
*/
const pozdrav = jmeno => {
	console.log(`Ahoj, jsem ${jmeno}`);
}

pozdrav("Jana");

/*
Pokud máme funkci jen s jedním parametrem,
která jen vrací hodnotu, můžeme použít
obě zjednodušení zároveň.
*/
const zdvojnasob = cislo => cislo * 2;
console.log(zdvojnasob(10))

