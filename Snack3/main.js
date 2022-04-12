//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

 function reverse(stringa){
    return stringa.split("").reverse().join("");
}


console.log(reverse("ciao"));
console.log(reverse("mario"));
console.log(reverse("stefano"));
console.log(reverse("hunterXhunter"));
