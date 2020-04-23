//L'utente dice un numero N e stampo il cubo di tot numeri fino ad N

var numeri_utente = parseInt(prompt("Calcolo del cubo fino al numero:"))
if (isNaN(numeri_utente) == true) {
    console.log("errore");
} else {
    for (var i = 1; i <= numeri_utente; i++) {
        console.log(i*i*i);
    }
}
