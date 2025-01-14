console.log('%c Metody objektů ', 'background:black;color:yellow;');

// Metoda je funkce uvnitř objektu.

// Metody, které už známe a používáme
console.log('ahoj');
console.log( Math.PI  );
console.log( Math.round(1.76));



// metody v našich vlastních objektech

const pes1 = {
	jmeno: 'Alík',
	barva: 'hnědá',

	// metoda pomocí arrow function
	stekej: () => {
		console.log('stek stek stek');
	},

	// metoda pomocí slova function
	hafej: function() {
		console.log('haf haf haf');
	},

	// metoda s parametrem
	vrtOcasem: (pocet) => {
		console.log(`Vrtim ${pocet}x ocasem`);
	},

};

pes1.stekej();
pes1.hafej();
pes1.vrtOcasem(10);




// Jak uvnitř metod přistupovat
// k vlasnostem  objektu

const pes = {
	jmeno: 'Alík',
	barva: 'hnědá',

	stekej: function() {
		console.log('stek stek, ja jsem ' + this.jmeno )//this odkazuje na objekt uvnitř kterého jsem
	},

/*	hafej: () => {
		console.log('haf haf, ja jsem ' + this.jmeno )
	},*/


};

pes1.stekej();
//pes.hafej();