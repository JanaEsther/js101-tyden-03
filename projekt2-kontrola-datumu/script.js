
function jePrestupnyRok(rok) {
    return (rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0;
}

function jeValidniDatum(datum) {
    const [den, mesic, rok] = datum.split('.').map(Number);

    if (rok < 1900 || rok > 2100) {
        return false;
    }

    if (mesic < 1 || mesic > 12) {
        return false;
    }

    let dnyVMesici;
    switch (mesic) {
        case 2:
            dnyVMesici = jePrestupnyRok(rok) ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dnyVMesici = 30;
            break;
        default:
            dnyVMesici = 31;
    }

    if (den < 1 || den > dnyVMesici) { 
        return false;
    }

    return true;
}

function pocetDniMesice(mesic, rok) {
    switch (mesic) {
    case 2:
        pocetDniMesice = jePrestupnyRok(rok) ? 29 : 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        pocetDniMesice = 30;
        break;
    default:
        pocetDniMesice = 31;
}
if (den < 1 || den > dnyVMesici) { 
    return pocetDniMesice;
}

}


console.log( jeValidniDatum('15.06.2023') );  // mělo by být true

// špatná data
console.log( jeValidniDatum('57.03.2023') );  // mělo by být false - špatný den
console.log( jeValidniDatum('07.13.2023') );  // mělo by být false - špatný měsíc
console.log( jeValidniDatum('21.09.2123') );  // mělo by být false - "špatný" rok

// únor v přestupném  a nepřestupném roce
console.log( jeValidniDatum('29.02.2023') );  // mělo by být false - není přestupný
console.log( jeValidniDatum('29.02.2024') );  // mělo by být true - je přestupný

console.log(pocetDniMesice(6, 2023)); // vrátí 30
console.log(pocetDniMesice(7, 2023)); // vrátí 31
console.log(pocetDniMesice(2, 2023)); // vrátí 28
console.log(pocetDniMesice(2, 2024)); // vrátí 29