console.log('%c CVIČENÍ: Arrow function ', 'background:black;color:yellow; font-size: 25px');
/*
Cvičení 1:
Napište funkci `vyplata` se třemi parametry: 

- `hodinovaMzda` - hrubá mzda v korunách za hodinu
- `hodiny` - kolik hodin denně průměrně pracujete
- `dny` - kolik dní v měsíci průměrně pracujete

Funkce spočítá a vrátí hrubou měsíční mzdu v celých korunách. 

Vytvořte druhou funkci `vyplataPoZdaneni`, která jako parametry přijme hrubou měsíční mzdu a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Nezapomeňte, že obě funkce chceme zapsané v syntaxi arrow function.

Použijte obě funkce a vypočítejte svoji měsíční mzdu při 15% zdanění.
*/

const hodinovaMzda = prompt("Zadej hodinovou mzdu:\n");
const hodiny = prompt("Zadej odpracované hodiny za den:\n");
const dny = prompt("Zadej odpracované dny za měsíc:\n"); 


const vyplata = (hodinovaMzda, hodiny, dny) =>{
    return Math.round(hodinovaMzda*hodiny*dny);
}
console.log(vyplata(hodinovaMzda, hodiny, dny));

const hrubaMzda = prompt("Zadej hrubou mzdu:\n");
const zdaneni = prompt("Zadej výši zdanění v procentech:\n");
const vyplataPoZdaneni = (hrubaMzda, zdaneni)=>{
    return Math.round((hrubaMzda*zdaneni)/100);
}

console.log(vyplataPoZdaneni(hrubaMzda, zdaneni));

/*## Cvičení 2: Převod na koruny

Napište funkci `prevodNaCZK`, která jako parametr přijme částku v cizí měně a kód této měny. Zadanou částku pak převede na koruny, zaokrouhlí na celé číslo,  a vrátí z funkce jako výstup.

Funkce bude podporovat následující měny a převodní kurzy:

| Měna | Kód | Kurz |
| --- | --- | --- |
| Euro | EUR | 23,85 |
| Britská libra | GBP | 27,67 |
| Americký dolar | USD | 21,25 |

Funkce se bude volat následujícím způsobem: `prevodNaCZK(10, 'EUR')` a v tomto případě by měla vrátit číslo `239` (10 euro převedených na koruny a zaokrouhlených na celé číslo).

Pokud funkce dostane jako parametr nepodporovaný kód měny, měla by vrátit hodnotu `null`.*/ 

const prevodNaCZK = (castka, Mena) => {
    let kurs;
    if (Mena == EUR){
        kurz = 23.85;
    }else if (Mena == GBP){
        kurz = 27.67; 
    } else if (Mena == USD){
        kurz = 21.25
    }else{
    return null;
    }
    return Math.round(kurz * castka);
}

/*## Cvičení 3: Kalkulačka

Představte si obyčejnou kalkulačku, která má pouze tlačítka pro čísla, tlačítka pro základní operace `+`, `-`, `*`, `/`, a tlačítko `=`. Pokud na takové kalkulačce chceme něco vypočítat, musíme stisknout například tlačítka `2`, potom `+`, pak `3`, a nakonec tlačítko `=`, které provede celý výpočet a vrátí výsledek.

Takovou kalkulačku si můžeme představit jako funkci, které předáme tři parametry: `cislo1`, `operace` a `cislo2`. Zavolání funkce bude fungovat jako obrazné stisknutí tlačítka `=`. Parametr `operace` bude textový řetězec obsahující znaménko matematické operace, kterou chceme provést se dvěma čísly.

Vytvořte funkci `kalkulacka`, která bude mít tři parametry popsané výše. Funkce se bude volat například takto `kalkulacka(2, '+', 3)` a výsledek se vrátí z funkce jako výstup.

Funkci řádně otestujte na všech matematických operacích.*/ 

const kalkulacka = (cislo1, operace, cislo2)=>{
  if (operace === '+' ){
    return cislo1 + cislo2;
  } if  (operace === '-' ){
    return cislo1 - cislo2;
  } if  (operace === '*' ){
    return cislo1 * cislo2;
  } if  (operace === '/' ){
    return cislo1 / cislo2;

};















/*## Cvičení 2: Převod na koruny

Napište funkci `prevodNaCZK`, která jako parametr přijme částku v cizí měně a kód této měny. Zadanou částku pak převede na koruny, zaokrouhlí na celé číslo,  a vrátí z funkce jako výstup.

Funkce bude podporovat následující měny a převodní kurzy:

| Měna | Kód | Kurz |
| --- | --- | --- |
| Euro | EUR | 23,85 |
| Britská libra | GBP | 27,67 |
| Americký dolar | USD | 21,25 |

VTTomto případě by měla vrátit číslo `239` (10 euro převedených na koruny a zaokrouhlených na celé číslo).

Pokud funkce dostane jako parametr nepodporovaný kód měny, měla by vrátit hodnotu `null`.
*/ 

/*## Cvičení 3: Kalkulačka

Představte si obyčejnou kalkulačku, která má pouze tlačítka pro čísla, tlačítka pro základní operace `+`, `-`, `*`, `/`, a tlačítko `=`. Pokud na takové kalkulačce chceme něco vypočítat, musíme stisknout například tlačítka `2`, potom `+`, pak `3`, a nakonec tlačítko `=`, které provede celý výpočet a vrátí výsledek.

Takovou kalkulačku si můžeme představit jako funkci, které předáme tři parametry: `cislo1`, `operace` a `cislo2`. Zavolání funkce bude fungovat jako obrazné stisknutí tlačítka `=`. Parametr `operace` bude textový řetězec obsahující znaménko matematické operace, kterou chceme provést se dvěma čísly.

Vytvořte funkci `kalkulacka`, která bude mít tři parametry popsané výše. Funkce se bude volat například takto `kalkulacka(2, '+', 3)` a výsledek se vrátí z funkce jako výstup.

Funkci řádně otestujte na všech matematických operacích.

*/


