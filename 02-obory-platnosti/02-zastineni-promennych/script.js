console.log('%c Zastínění proměnných ', 'background:black;color:yellow;');

/*
const secti = (a, b) => {
	const x = 100;
	return x + a + b;
}

const odecti = (a, b) => {
	const x = 200;
	return x - a - b;
}


console.log( secti(3, 5) );
console.log( odecti(4, 7) );
*/


// zastínění proměnných
/*
const x = 'globální';
const a = 999;
console.log(x);

const mojeFunkce = (a) => {
	const x = 'lokální';
	console.log(x);
	console.log(a);
}

console.log(x);
console.log(a);
mojeFunkce(1);
console.log(x);
*/


// zastínění proměnných ve více vnořených blocích
/*
const x = 'globalni';
console.log(x);
{
	const x = 'blok1';
	console.log(x);
	{
		const x = 'blok2';
		console.log(x);
	}
	console.log(x);
}
console.log(x);
*/