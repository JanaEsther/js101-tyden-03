console.log('%c Pole ', 'background:black;color:yellow;');

/*## Cvičení 1: Vybíravý jedlík

Vytvořte pole, ve kterém budou názvy jídel, které nemáte rádi a skoro nikdy je nejíte (alespoň 4).*/
let hnusnaJidla = [
	'krupicová kaše',
	'nudličkový nákyp',
	'smažený vepřový řízek',
	'smažený kapr',
	'hranolky s tatarkou'
];

-// Vypište do konzole počet jídel, která vám nechutnají (tj. délku pole).
console.log(hnusnaJidla.length);
//Vypište do konzole druhé jídlo v seznamu.
console.log(hnusnaJidla[1])
//Vypište do konzole **poslední** jídlo v seznamu, ale nepište číslo indexu posledního prvku napevno. Tj. nepište `jidla[3]`, 
//když víte, že máte v seznamu 4 jídla. Místo toho použijte vlastnost `length` ke zjištění, jaký index má poslední prvek v poli.*/
console.log([hnusnaJidla.length - 1]);

/*## Cvičení 2: Oblíbené filmy

Ve cvičení na objekty jsme vytvářeli objekt s oblíbeným filmem. 
Objekt jednoho filmu měl vlastnosti  `nazev`, `rokVydani`, `zanr`, a `reziser`. 
Chcete mít více oblíbených filmů, ne jenom jeden (alespoň 3).
- Vytvořte pole filmů. Každý film je objekt se zmíněnými vlastnostmi.*/

const oblibeneFilmy = [
	{ nazev: 'Body of my enemy',rok: 1976, zanr:'drama',reziser: 'Henri Verneuil' },
	{ nazev: 'The Shape of Water',rok: 2017, zanr:'drama/fantasy/',reziser: 'Guillermo del Toro' },
	{ nazev: 'The Master and Margarita',rok: 2005, zanr:'drama',reziser: 'Vladimir Bortko' },

];


/*
- Vypište do konzole název a žánr prvního filmu v poli.*/
console.log(oblibeneFilmy[0].nazev,oblibeneFilmy[0].reziser);
//- Vypište do konzole řežiséra druhého filmu v poli.
console.log(oblibeneFilmy[1].reziser);
//- Vypište do konzole rok vydání třetího filmu v poli. 
console.log(oblibeneFilmy[2].rok);

/*## Cvičení 3: Zaměstnanci

- Vytvořte objekt `firma`, který bude mít vlastnosti `nazev`, `rokZalozeni`, a `zamestnanci`.
- Vlastnost `zamestnanci` uvnitř objektu je pole osob. Každá osoba je znovu objekt, který má vlastnosti `jmeno`, `prijmeni` a `pozice`.
- Do konzole vypište jméno, příjmení a pozici třetího zaměstnance ve firmě. */

const firma = {
	nazev: 'H2O s.r.o.',
	rokZalozeni: '2002',
	zamestnanci: [
	{ jmeno: 'Jana', prijmeni: 'Obendraufová', pozice:'jednatelka' },
	{ jmeno: 'Lubor', prijmeni: 'Obendrauf', pozice:'obchodník' },
	{ jmeno: 'Jiří', prijmeni: 'Vozáb', pozice:'servisní technik' },
	{ jmeno: 'Jiří', prijmeni: 'Rulf', pozice:'servisní technik' },
	],
	}
	console.log(firma.zamestnanci[2].jmeno,firma.zamestnanci[2].prijmeni, firma.zamestnanci[2].pozice );












































































