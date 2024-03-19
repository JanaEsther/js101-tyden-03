console.log('%c Spread operátor ', 'background:black;color:yellow;');

// spread operátor

const maxa  = Math.max(12, 7, 39, 16, 5);
console.log(maxa);

const cisla = [12, 7, 39, 16, 5];
const max = Math.max(cisla[0], cisla[1], cisla[2], cisla[3], cisla[4]);




/* použijeme spread operator, abychom hodnoty
 z pole rozprostřeli jako argumenty do volání*/
 //funkce Math.max
 const max1 = Math.max( ...cisla );
 console.log(max);



//ukážeme si i na vlastní funkci
const vypisCisel = (a, b, c, d, e) => {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
}

const cisla3 = [10, 20, 30];

vypisCisel(...cisla3);


// rozprostřené hodnoty můžeme doplnit
// i o další hodnoty na obou stranách



// kopie poleconst pole = [1, 2, 3]const novePole = pole;pole[0] = 999console.log(pole)console.log(novePole);

//referenční typy: objekty, pole a funkce

// kopie pole pomocí metody slice

//const pole = [1, 2, 3]; 
//const novePole = pole.slice(0, pole.length);

pole[0] = 999;
console.log(pole);
console.log(novePole);

const pole = [1, 2, 3];
const novePole = [...pole];

pole[0] = 999;
console.log(pole);
// console.log(novePole);


// kopie objektu pomocí spread operátoru

const osoba = { jmeno: 'Alena', vek: 27 };
const novaOsoba = {
	...osoba,
	vek: 50,
	mesto: 'Praha',
	telefon: '123 456 789'
};

osoba.jmeno = 'Petr';

console.log(osoba);
console.log(novaOsoba);
