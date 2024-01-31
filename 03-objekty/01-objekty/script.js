console.log('%c Objekty ', 'background:black;color:yellow;');


// samostatné proměnné
const jmeno = 'Alena';
const prijmeni = 'Nováková';
const rokNarozeni = 1996;
const email = 'alena.novakova@neznam.cz';
const adresa = 'Dvorská 6, Městečko nad Řekou, 199 37';
const svobodna = true;


// objekt a jeho vlastnosti
// object literal
const osoba = {
	jmeno: 'Alena',
	prijmeni: 'Nováková',
	rokNarozeni: 1996,
	email: 'alena.novakova@neznam.cz',
	adresa: {
		ulice: 'Dvorská',
		cislo: 6,
		mesto: 'Městečko nad Řekou',
		psc: '199 37',
	},
	svobodna: true,
};


// tečková notace
osoba.jmeno = 'Jana';
console.log( osoba.jmeno );


// závorková notace
osoba['rokNarozeni'] = 2001;
console.log( osoba['rokNarozeni'] );



// závorková notace umožňuje mít
// název vlastnosti uložený v proměnné
const vlastnost = 'jmeno';
console.log( osoba[vlastnost] );


// vnořené objekty
console.log( osoba.adresa.mesto );
console.log( osoba['adresa']['mesto'] );


// přidávání vlastností
// prostě vlastnost nastavíme
// když na objektu neexistuje, tak se přidá

osoba.vzdelani = 'VŠ';


// smazání vlastnosti objektu
delete osoba['rokNarozeni'];
delete osoba.adresa.psc;
console.log(osoba);