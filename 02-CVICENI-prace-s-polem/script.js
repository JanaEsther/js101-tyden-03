console.log('%c Cvičení práce spolem', 'background:black;color:yellow;');
/*## Cvičení 1: Běžné polní práce

Zkopírujte si do kódu následující pole:*/

const jmena = [
	'Jana',
	'Emil',
	'Lenka',
	'Alena',
	'Karel',
	'Pavla'
];

//Proveďte následující úkoly a po každém si vždy vypište pole do konzole, ať vidíte, co se s ním stalo**:
//1. Na konec pole přidejte jméno **Helena** a potom ještě **Arnošt**.
jmena.push('Helena');
console.log(jmena);
jmena.push('Arnošt');
console.log(jmena);

//2. Na začátek pole přidejte jméno **Kamila** a potom ještě **Libor**.
jmena.unshift('Kamila');
console.log(jmena);
jmena.unshift('Libor');
console.log(jmena);


//3. Z konce pole odeberte jedno jméno a vypište do konzole, jaké jméno to bylo. 

console.log(jmena.pop());


//4. Ze začátku pole odeberte jedno jméno a vypište do konzole, jaké jméno to bylo.
console.log(jmena.shift());

//5. Z prostředku pole odstraňte čtvrté jméno.
console.table(jmena);
jmena.splice(3,1)
console.table(jmena);


//6. Třetí jméno v poli nahraďte za dvě jména **Lucia** a **Hana**.
jmena.splice(2,1, 'Lucia','Hana');
console.table(jmena);

//7. Vypište do konzole, zda se v poli nachází jméno **Karel**. Zkuste to stejné i pro jméno **Lucie**.
console.log(jmena.includes('Karel'))
console.log(jmena.includes('Lucie'))

//8. Najděte, na jakém indexu v pole je **Alena**, a vypište to do konzole.
console.log(jmena.indexOf('Alena'))

//9. Najděte na jaké pozici v poli je **Emil** a z pole ho smažte. Vyzkoušejte, zda vše v pořádku funguje, 
//i když to zkusíte se jménem, které v poli neexistuje, např. **Eva**.

const jmena1 = [
	'Jana',
	'Emil',
	'Lenka',
	'Alena',
	'Karel',
	'Pavla'
];

console.table(jmena1);
console.log(jmena1.indexOf('Emil'));
jmena1.splice(1,1);
console.table(jmena1);
console.log(jmena1.indexOf('Diana'))
jmena1.splice(-1,1);
console.table(jmena1);




/*10. Doplňte předchozí bod o podmínku, která:
    - když je jméno nalezeno, tak se z pole odebere
    - když pole ve jménu není, vypíše se do konzole chyba `'Jméno nenalezeno'` */

	const jmena2 = [
		'Jana',
		'Emil',
		'Lenka',
		'Alena',
		'Karel',
		'Pavla'
	];
	console.table(jmena2);
	const jmenox = 'Lenka'

  function smazJmeno(jmeno){
	const index = jmena.indexOf(jmeno);
	if(index !== -1){
		jmena.splice(index, 1)
	}else{
		console.log(`Jméno ${jmeno} nenalezeno`)
	}
  }

  smazJmeno('Emil');
  console.log(jmena2);
  smazJmeno('Eva');
  console.log(jmena2);