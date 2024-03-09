console.log('%c Funkce ', 'background:black;color:yellow;');

/*
Základní syntaxe funkce:

function nazevFunkce(parametr1, parametr2, ...) {
má název a je v ní část kódu  a může se volat ze spousty míst v kódu// kod
  return hodnota;
  parametr je proměnná do které z venku přijde nějaká hodnota
}
*/

// zabudované funkce v JavaScriptu
// funkce vs. metoda
//alert('Ahoj');

// metoda - funkce, která patří nějakému objektu
// objekt console má metodu log()

console.log('Ahoj');
console.log( 'ahoj'.toUpperCase());
console.log('AHOJ'.toLowerCase());

// vlastní funkce
// základní funkce bez parametrů
function pozdrav() {
  console.log('Ahoj');// tělo funkce
} 

function pozdrav1() {
  console.log('Ahoj');
  if (1 + 2 === 3){
    console.log('matematika funguje, vesmír je v pořádku')
  }
  console.log('Nashledanou')
} 

function pozdrav_x(jmeno){
  console.log('Ahoj, já jsem', jmeno);
}

pozdrav_x('Alena')
pozdrav_x('Jana')

function ahoj() {
  console.log('AHOJ'.toLowerCase());
}


// spuštění / volání funkce
const cau = pozdrav;
cau();

pozdrav();
ahoj();
pozdrav1();
ahoj();
pozdrav();
ahoj();


// funkce s parametry
function soucet(cisloA, cisloB, cisloC) {
  console.log(cisloA + cisloB + cisloC);
}

soucet(2, 3, 4);
soucet(8, 12, 20);
soucet(80, 120, 200);

// parametry funkce - cislo_a, cislo_b
function soucet_xs(cislo_a, cislo_b){
  console.log(`${cislo_a} + ${cislo_b} = ${cislo_a + cislo_b} `)
}

soucet_xs(20,25)
soucet_xs(10,15)
soucet_xs(100,150)// argumenty - hodnoty uložené do parametrů funkce



// parametry vs. argumenty
// názvy proměnných v závorce jsou parametry
function predstavSe(jmeno, vek) {
  console.log(`Ahoj, já jsem ${jmeno} a je mi ${vek} let.`);
}

// hodnoty, které do parametrů předáváme,
// jsou argumenty
predstavSe('Luděk', 19);
predstavSe('Luděk', 17);
predstavSe(' Iron Rusco', 3);
predstavSe('Jana', 25);
predstavSe('Jana', 23);



function dph(castka){
  const vysledek = castka * 0.2;
  return vysledek;// return vrátí výsledek a okamžitě v tom místě skončí. a pokud je of tím další kód tak se neprovede, program
  // k němu nedojde
}

dph(1000); // volání funkce 

console.log(dph(1000)); //vypíšeme výsledek - vyhodnotí se výsledek funkce a vypíše se do konzole 
const mojeDph = dph(1000); // výsledek uložíme do proměnné
console.log(`Cena s DPH:`, 1000 + mojeDph)


// návratová hodnota
// return vrací hodnotu z funkce ven
function vynasob(cisloA, cisloB, cisloC) {
  return cisloA * cisloB * cisloC;
}

function vynasobx(cisloA, cisloB, cisloC) {
  vysledek = cisloA * cisloB * cisloC;
  console.log(vysledek);
}

vynasob(2, 4, 10)
vynasob(15, 20, 30)
vynasob(30, 40, 60)

// výsledek funkce si můžeme třeba
// uložit do proměnné
const vysledek = vynasob(2, 4, 10);
console.log(vysledek);

// nebo s ním pracovat přímo uvnitř dalších výrazů

console.log(100 + vynasob(15, 20, 30));

console.log(vynasob(5,10,20));
console.log(vynasob(2,3,4));

function jeDospela(vek){
  if (vek >= 18){
    console.log(' je dospela')
  }else {
    console.log('neni dospela')
  }
}

jeDospela(19)
jeDospela(15)

function jeDospelaA(vek){
  if (vek >= 18){
    return true
  }else {
    return false
  }
}// funkce dostane parametr a vr8t9 logickou hodnotu

// může být i bez větve else,

function jeDospelaN(vek){
  if (vek >= 18){
    return true
  }
    return false
  }
// funkce dostane parametr a vr8t9 logickou hodnotu
//funkci je potřeba srozumitelně pojmenovat



function skryteCislo(cislo){
	return cislo.slice(-3).padStart(cislo.length, '*');

}

console.log( skryteCislo('+420 736 675 615'))
console.log( skryteCislo('736 675 619'))
console.log( skryteCislo('+420726608430'))

/*funkce je hodnota jako každá jiná např. string, boolean, název funkce je proměnná
vytvoří se proměná, která se jmenuje pozdrav a kod se v paměti počítače uloží jako blok, obsah proměné je jako odkaz, který říká,
kde leží kod funkce*/


/*const aktualniRychlost = 78;
const typSilnice =  'dalnice';
//obec 50/okreska 90/dalnice 130

function rychlost(r, typ){
  if (typ === 'mesto'){
    if(r <= 50) {
      return true
    }else {
      return false
    }
  }
}

rychlost(aktualniRychlost, typSilnice);

if(r <= 50) {
  return true
}else {
  return false
}*/

//ternarni operator -  podminka ? ano:ne


/*function rychlost(r, typ){
const r = 200;
console.log( r <=50 ? true: false)// mŮŽE TO vracet i jinou hodnotu - text, číslo apod.

if (typ === 'mesto'){
  return(r <= 50) ? true: false 
}
if (typ === 'okreska'){
  return(r <= 90) ? true: false 
}
if (typ === 'dalnice'){
  return(r <= 130) ? true: false 
}
}
console.log(
  rychlost(aktualniRychlost, typSilnice)
);*/

// vetvě else if se neprovedou pokud platí předchozí podmínka


// přehlednější a čitelnější je kod s více if za sebou

function rychlost(r, typ){
  let maxRychlost;
  if (typ === 'mesto'){
    maxRychlost = 50
  }else if (typ === 'okreska'){
    maxRychlost = 90
  }else if (typ === 'dalnice'){
    maxRychlost = 130
}
 return r <= maxRychlost ? true: false

}
