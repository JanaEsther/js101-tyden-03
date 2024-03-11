console.log('%c Zastínění proměnných ', 'background:blue;color:yellow; font-weight:bold');

/**/ 
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



// zastínění proměnných

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

const x1 = 'globální';

const mojeFunkce1 = () => {
	const x1= 'lokální pro funkci';
 
	if (true) {
		const x = "lokální pro podmínku";
		console.log(x);
	}
	console.log(x1);
}

mojeFunkce();

console.log(x);

// zastínění proměnných ve více vnořených blocích

const xs = 'globalni';
console.log(xs);

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

const s = 1;

const myFunc = (s) => {
	console.log(s);
}

myFunc(999);
console.log(s);