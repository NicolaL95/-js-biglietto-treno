

let num_km = prompt("Benvenuto nel servizio di ticketing automatico di Boolitalia. Inserisca il numero di KM che vuole percorrere:").match(/\d+/g);
/* .match utilizzato nell'eventualità che l'utente inseriesca n.km + l'unità di misura km */

let user_age = prompt("E' possibile usufruire di una scontistica riservata ai minorenni(20%) e agli over 65(40%). Inserisca la sua età:");

let price_km = (num_km * 0.21);

let final_price = price_km;

if (user_age < 18) {
    final_price = final_price - (price_km * 20 / 100);
}

else if (user_age > 65) {
    final_price = final_price - (price_km * 45 / 100);
}

if (num_km <= 0 | isNaN(num_km) == true) {
    final_price = "Impossibile elaborare la richiesta";
}

if (user_age < 0 | user_age > 150) {
    final_price = "Impossibile elaborare la richiesta";
}

document.getElementById("prezzo_finale").innerHTML = final_price;
