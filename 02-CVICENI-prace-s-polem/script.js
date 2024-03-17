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


//4. Ze začátku pole odeberte jedno jméno a vypište do konzole, jaké jméno to bylo.

//5. Z prostředku pole odstraňte čtvrté jméno.

//6. Třetí jméno v poli nahraďte za dvě jména **Lucia** a **Hana**.

//7. Vypište do konzole, zda se v poli nachází jméno **Karel**. Zkuste to stejné i pro jméno **Lucie**.

//8. Najděte, na jakém indexu v pole je **Alena**, a vypište to do konzole.

//9. Najděte na jaké pozici v poli je **Emil** a z pole ho smažte. Vyzkoušejte, zda vše v pořádku funguje, i když to zkusíte se jménem, které v poli neexistuje, např. **Eva**.

/*10. Doplňte předchozí bod o podmínku, která:
    - když je jméno nalezeno, tak se z pole odebere
    - když pole ve jménu není, vypíše se do konzole chyba `'Jméno nenalezeno'` */

