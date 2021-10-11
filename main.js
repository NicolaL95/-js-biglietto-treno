

let num_km = prompt("Benvenuto nel servizio di ticketing automatico di Boolitalia. Inserisca il numero di KM che vuole percorrere:").match(/\d+/g);

let user_age = prompt("E' possibile usufruire di una scontistica riservata ai minorenni(20%) e agli over 65(40%). Inserisca la sua età:");

let price_km = (num_km * 0.21)

let final_price = price_km;

if (user_age < 18) {
    final_price = final_price - (price_km * 20 / 100);
}

else if (user_age > 65) {
    final_price = final_price - (price_km * 45 / 100);
}

if (num_km <= 0 | isNaN(num_km) == true) {
    final_price = "numero di KM inseriti errato o uguale/inferiore a 0";
}

document.getElementById("prezzo_finale").innerHTML = final_price;
