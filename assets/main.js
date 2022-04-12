//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.
let Zucchine = [
    {varieta:"Zucchina faenza", peso: 88, lunghezza:22},
    {varieta:"Zucchina faenza", peso: 11, lunghezza:12},
    {varieta:"Zucchina faenza", peso: 10, lunghezza:12},
    {varieta:"Zucchina faenza", peso: 100, lunghezza:12},
    {varieta:"Zucchina faenza", peso: 44, lunghezza:15},
    {varieta:"Zucchina faenza", peso: 69, lunghezza:6},
    {varieta:"Zucchina faenza", peso: 36, lunghezza:7},
    {varieta:"Zucchina faenza", peso: 59, lunghezza:33},
    {varieta:"Zucchina faenza", peso: 60, lunghezza:6},
    {varieta:"Zucchina faenza", peso: 89, lunghezza:11},
    {varieta:"Zucchina faenza", peso: 37, lunghezza:18},
    {varieta:"Zucchina faenza", peso: 58, lunghezza:19},
]
//calcolo peso totale
let pesoTot = 0;


    Zucchine.forEach((Zucchina) => { 
        let peso = Zucchina.peso;
        pesoTot += peso;
     
    })
console.log(pesoTot);


