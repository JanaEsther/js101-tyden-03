console.log('%c CVIČENÍ: Funkce ', 'background:black;color:yellow;');

/*
Cvičení 1: Speed dating
Jste na speed datingu a hledáte ❤ na celý život. Víte, že za celý večer potkáte množství potenciálních partnerů a na představení máte vždy jen pár vteřin. Musíte jednat efektivně! Napište funkci s názvem `predstaveni`, která přijímá 4 parametry - `jmeno`, `vek`, `mesto` a `konicek`. Při zavolání funkce se do konzole vypíše věta ve tvaru “Ahoj, jsem *Alena*, je mi *23* let, narodila jsem se ve městě *Kolín* a mám ráda *kite surfing*.”
S takovým představením je láska je zaručena.
*/

function predstaveni(jmeno, vek, mesto, konicek){
    console.log(`Ahoj jsem ${jmeno}, je mi ${vek}, narodila jsem se ve městě ${mesto} a mám ráda ${konicek}.`);
}

predstaveni('Jana', 50, 'Kutná Hora', 'programování');
predstaveni('Hanka', 48, 'Brno', 'vaření');
predstaveni('Edita', 52, 'Olomouc', 'bruslení');

/*
Cvičení 2: Obsah trojúhelníka
Napište funkci `obsahTrojuhelnika`, která jako parametry přijme strany `a` a `b` pravoúhlého trojúhelníka. Funkce jako výsledek vrátí jeho obsah. Obsah spočítáme jako `(a * b) / 2`.
*/
function ObsahTrojuhelniku(StranaA, StranaB){
    console.log((StranaA * StranaB) / 2)
}
ObsahTrojuhelniku(20, 40)
ObsahTrojuhelniku(120, 150)
ObsahTrojuhelniku(80, 140)


/*
Cvičení 3: Maximum ze dvou čísel
Napište funkce s názvem `max2`, která vrátí větší ze dvou zadaných čísel, které přijímá jako parametry. Pokud jsou si obě čísla rovna, vrátí se libovolné z nich.

Např. při zavolání `max2(7, 13)` funkce vrátí hodnotu `13`. Volání  `max2(4, 4)` vrátí 4.

Pro účely příkladu předstírejme, že nevíme, že v JavaScriptu už existuje funkce `Math.max`, která dělá to samé. Naprogramujte vlastní funkci, která porovná dvě čísla a vrátí to větší z nich.
*/

function max2(number1, number2){
    if (number1 > number2){
        console.log(number1);
    } else {
        console.log(number2);
    }
} 

max2(25, 5)
max2(1200, 25000)

function max3(a, b){
	return a > b ? a : b;
}



/*
Cvičení 4: Přestupný rok
Napište funkci, která jako parametr přijme `rok` a vrátí `true` nebo `false` podle toho, zda je zadaný rok přestupný.
Přestupný rok je dělitelný číslem `4`. Roky dělitelné číslem `100` jsou ale přestupné jen tehdy, pokud jsou zároveň dělitelné číslem `400`.
*/

function PrestupnyRok(rok){
if (rok % 4 === 0 && rok % 100 !==0 || rok % 400){
console.log (true);
} else{
    console.log(false);
    }
}

PrestupnyRok(prompt('Zadej rok:\n'))

function jePrestupnyRok(rok) {
	if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
		return true
	}
	return false;
}







