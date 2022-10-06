const prezzoKm = 0.21

const eta = parseInt(prompt('In che anno sei nato? '))

const km = parseInt(prompt('Inserisci i km che intendi percorrere: '))

let totale;

if (eta < 18){
    totale = (km * prezzoKm) - ((km * prezzoKm) * 0.2)
}else if (eta >= 65){
    totale = (km * prezzoKm) - ((km * prezzoKm) * 0.4)
} else {
    totale = km * prezzoKm
}

document.getElementById('prezzoBiglietto').innerHTML = `Il prezzo del tuo biglietto è di €${totale.toFixed(2)}`