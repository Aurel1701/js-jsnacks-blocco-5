//SNACK 4
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// creo tre array

const firstArray = ["a","b","c","d","e","f"]; // array1

const secondArray = [1,2,3,4,5,6]; // array2

let arrayMisto =[]; //final array

function mistoArray(firstArray,secondArray){
    for(let i = 0; i < firstArray.length; i++){
        arrayMisto.push(firstArray[i])
        arrayMisto.push(secondArray[i])
    }
    return arrayMisto
}
arrayMisto = mistoArray(firstArray,secondArray)
console.log(arrayMisto);