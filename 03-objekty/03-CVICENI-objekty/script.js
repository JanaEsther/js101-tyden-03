
/*## Cvičení 1: Oblíbený film

Vytvořte objekt `oblibenyFilm`, který bude mít vlastnosti `nazev`, `rokVydani`, 
`zanr`, a `reziser`. Objekt naplňte hodnotami vašeho oblíbeného filmu.*/

const oblibenyFilm = {
	nazev: 'Body of my enemy',
	rokV: 1976,
	zanr:'drama',
	reziser: 'Henri Verneuil',
	
};

/*## Cvičení 2: Kontakt

Vytvořte objekt, který bude uchovávat údaje o osobě. 
Kontaktní údaje mohou být dvojího druhu domů a do práce. 
Adresa domů je jiná, než adresa do práce, a to stejné může platit pro telefonní čísla nebo emaily.

- Vytvořte objekt `kontakt`, který bude obsahovat vlastnosti `jmeno`, `prijmeni`, `datumNarozeni` a vlastnosti `domov` a `zamestnani`.
- `domov` je vnořený objekt, který obsahuje vlastnosti `adresa`, `telefon` a `email`. Adresa je znovu vnořený objekt, který obsahuje `ulice`, `cislo`, `mesto` a `psc`.
- `zamestnani` je vnořený objekt, který obsahuje vlastnosti `firma`, `pozice`, `adresa`, `telefon` a `email`. Adresa je znovu objekt, jako u domácí adresy.*/

const Kontakt = {
	jmeno: 'Jana',
	prijmeni:' Obendraufova',
	datumNarozeni: '4.6.1973',
	domov:{
		adresa: 'Na Lysinách 460/28, 147 00 Praha 4',
		zamestnani: `H2O s.r.o., jednatelka a majitelka, Thámova 221/7, 186 00 Praha 8, 736 675 615, NETTO Electronics s.r.o., obchodní asistentka, Malešická 2777/45a, 130 00 Praha 3, 221 001 877 `,
		
	}
}

/* Cvičení 3: Počasí

Služba OpenWeatherMap poskytuje data s údaji o počasí. Později v kurzu ji použijeme pro vytvoření vlastní aplikace s předpovědí počasí.

Data, která ze služby přijdou, vypadají např. takto (mírně upravená pro účely cvičení):*/

const weather = {
	coord: {
	  lon: 10.99,
	  lat: 44.34
	},
	weather: {
	  id: 501,
	  type: 'Rain',
	  description: 'moderate rain',
	  icon: '10d',
	  main: {
		temp: 26.48,
		feels_like: 25.74,
		temp_min: 16.56,
		temp_max: 28.05,
		pressure: 1015,
		humidity: 64,
		sea_level: 1015,
		grnd_level: 933
	  },
	  wind: {
		speed: 0.62,
		deg: 349,
		gust: 1.18
	  },
	  rain: {
		hour: 3.16,
		day: 13.72
	  },
	  clouds: {
		all: 100
	  },
	  visibility: 10000,
	},
	timezone: 7200,
	id: 3163858,
	city: 'Zocca',
	cod: 200
  }

console.log(weather.city)
console.log(weather.weather.type)
console.log(weather.weather.description)
console.log(weather.weather.main.temp)
console.log(weather.weather.main.temp_max)
console.log(weather.weather.rain.hour)

/*## Cvičení 4: Bankovní účet

Vytvořte objekt `bankovniUcet`, který bude mít:

- vlastnost `zustatek` (v ní bude, kolik máme na účtu peněz)
- metodu `vybrat()`, která bude jako parametr přijímat částku, kterou chceme vybrat. Tato částka se při zavolání metody **odečte** z aktuálního zůstatku.
- metodu `vlozit()`, která bude jako  parametr přijímat částku, kterou chceme na účet vložit. Tato částka se při zavolání metody **přičte** k aktuálnímu zůstatku.

Pro přístup k zůstatku uvnitř metod použijte `this`.

### Bonus:

Do metody pro výběr přidejte podmínku, aby nešlo vybrat více peněz než na účtu je. Pokud se pokusíme vybrat více peněz, do konzole se napíše `Na účtu nemáte dostatek prostředků` a výběr se neprovede (peníze se neodečtou).*/

let bankovniUcet;

bankovniUcet = {
	zustatek: 5_000_000,

	vybrat: function(castka){
		if (castka <= this.zustatek){
			console.log( this.zustatek -= castka)
		} else{
			console.log('Na účtu nemáte dostatek prostředků')
		}

	}, 
	vlozit: function(castka){
		console.log( this.zustatek +=castka)

	}

};

bankovniUcet.vybrat(5000);
bankovniUcet.vlozit(20000);