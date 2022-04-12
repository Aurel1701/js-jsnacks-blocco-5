//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

let zucchineCorte = Zucchine.filter((zucchina) => zucchina.lunghezza < 15)
console.log(zucchineCorte);

let zucchineLunghe = Zucchine.filter((zucchina) => zucchina.lunghezza > 15)
console.log(zucchineLunghe);

let somma = 0

ZucchineCorte.forEach((zucchina) => {
somma+= zucchina.peso
})

console.log(somma);


let somma_over = 0

ZucchineLunghe.forEach((zucchina) => {
somma+= zucchina.peso
})

console.log(somma_over);




