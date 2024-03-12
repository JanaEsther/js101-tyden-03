console.log('%c Objekty ', 'background:black;color:yellow;');


// samostatné proměnné
const jmeno = 'Alena';
const prijmeni = 'Nováková';
const rokNarozeni = 1996;
const email = 'alena.novakova@neznam.cz';
const adresa = 'Dvorská 6, Městečko nad Řekou, 199 37';
const svobodna = true;


//  jedna proměnná, která obsahuje objekt a ten má vlastnosti
// object literal - uvnitř není blok ale definice objektu - jmeno = key, Alena = value
const osoba = {
	jmeno: 'Alena',
	prijmeni: 'Nováková',
	rokNarozeni: 1996,
	email: 'alena.novakova@neznam.cz',
	adresa: {// hodnota vlastnosti je další objekt
		ulice: 'Dvorská',
		cislo: 6,
		mesto: 'Městečko nad Řekou',
		psc: '199 37',
		gps:{
			lon: '199',
			lat: 185,
		}
	},
	svobodna: true,
};


// tečková notace
osoba.jmeno = 'Jana';
console.log(osoba.jmeno);
console.log(osoba.adresa);
console.log(osoba.prijmeni);
console.log(osoba.email);
console.log(osoba);


/* závorková notace - jedna výhoda oproti tečkové: klíč je zde jako textový řetězec a mohu ho mít uložené 
v proměnné . Závorková notece umožňuje přistupovat k vlastnostem jejichž jméno mám v jiné proměnné.Nevím dopředu,
která vlastnost to bude. */
osoba['rokNarozeni'] = 2001;
osoba['prijmeni']
console.log( osoba['rokNarozeni'] );
console.log( osoba['prijmeni'] );



// závorková otace umožňuje mít
// název vlastnosti uložený v proměnné
const vlastnost = 'jmeno';
console.log( osoba[vlastnost] );


// vnořené objekty
console.log(osoba.adresa.ulice);
console.log( osoba.adresa.mesto );
console.log( osoba['adresa']['mesto'] );


// přidávání vlastností
// prostě vlastnost nastavíme
// když na objektu neexistuje, tak se přidá

osoba.vzdelani = 'VŠ';
osoba.vek = 50;
osoba.svobodna = false;
console.log(osoba);


// smazání vlastnosti objektu
delete osoba['rokNarozeni'];
delete osoba.adresa.psc;
console.log(osoba);