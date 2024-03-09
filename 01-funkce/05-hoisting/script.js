console.log('%c Hoisting ', 'background:black;color:yellow;');

// hoisting

// volání funkce funguje, i když ji
// voláme předtím, než ji deklarujeme
/*javascript analyzuje celý kód a pokud narazí na deklaraci 
funkce, tak ji vyzvedne na začátek.Je to stejné jakoby byla na
začátku kódu*/

pozdrav();

function pozdrav() {
	console.log('Ahoj');
}


/*nefunguje pro function expression
musíme funkci nejprve deklarovat, než ji zavoláme
na začátek kódu se vyzdvihne pouze povědomí o tom,
že ta proměnná bude existovat, bude založena*/

const uvitani = function () {
	console.log('Dobrý den');
};

uvitani();
