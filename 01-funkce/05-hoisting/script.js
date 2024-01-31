console.log('%c Hoisting ', 'background:black;color:yellow;');

// hoisting

// volání funkce funguje, i když ji
// voláme předtím, než ji deklarujeme
pozdrav();

function pozdrav() {
	console.log('Ahoj');
}


// nefunguje pro function expression
// musíme funkci nejprve deklarovat, než ji zavoláme
const uvitani = function () {
	console.log('Dobrý den');
};

uvitani();
