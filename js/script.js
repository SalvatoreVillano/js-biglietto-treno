var conditionEta = true;
var conditionKm = true;
const prezzoKm = 0.21

while(conditionEta){
        var eta = parseInt(prompt('Quanti anni hai? '))
        if(Number.isInteger(eta) == false){
        window.alert("Sono ammessi solo numeri!");
        }
        else {
            conditionEta = false;
        }
    }

    while(conditionKm){
        var km = parseInt(prompt('Inserisci i km che intendi percorrere: '))
        if(Number.isInteger(km) == false){
        window.alert("Sono ammessi solo numeri!");
        }
        else {
            conditionKm = false;
        }
    }
    
let totale;

if (eta < 18){
    totale = (km * prezzoKm) - ((km * prezzoKm) * 0.2)
}else if (eta >= 65){
    totale = (km * prezzoKm) - ((km * prezzoKm) * 0.4)
} else {
    totale = km * prezzoKm
}

document.getElementById('prezzoBiglietto').innerHTML = `Il prezzo del tuo biglietto è di €${totale.toFixed(2)}`