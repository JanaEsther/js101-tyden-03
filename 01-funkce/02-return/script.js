console.log('%c Return ', 'background:black;color:yellow;');

// return v jednoduché funkci
function secti(a, b) {
	return a + b;
}
console.log( secti(2, 3) );


// složitější funkce s více return
// může vracet různé hodnoty podle situace
// v základní podobě může vypadat třeba takto
function jeDospely(vek) {
	if (vek >= 18 ) {
		return true;
	} else {
		return false;
	}
}


// return ukončí provádění funkce
// takže můžeme vynechat else a napsat funkci takto
function jeDospely2(vek) {
	if (vek >= 18 ) {
		return true;
	}
	return false;
}

console.log(jeDospely2(16));


// časný návrat
// využijeme toho, že return ukončí provádění funkce
// eliminační podmínky postupně vyloučí hesla,
// která neodpovídají požadavkům
function jeSilneHeslo(heslo) {
	if (heslo.length < 8) {
		return false;
	}

	if (heslo.startsWith('heslo')) {
		return false;
	}

	if (heslo.endsWith('123')) {
		return false;
	}

	if (!heslo.includes('*')) {
		return false;
	}

	// pokud funkce dojde až sem, je jasné,
	// že heslo všechny požadavky splňuje
	// a můžeme vrátit true
	return true;
}

console.log( jeSilneHeslo('jahoda') );
console.log( jeSilneHeslo('heslojejahoda') );
console.log( jeSilneHeslo('jahoda123') );
console.log( jeSilneHeslo('jahoda789') );
console.log( jeSilneHeslo('jahoda*789') );
