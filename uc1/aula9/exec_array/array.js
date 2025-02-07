let frutas = ["Maça", "Banana", "Laranja"]




//funçoes basicas
///push()>> acrescenta no final 
console.log("Acrescentando com push")
frutas.push("Abacate")
console.log(frutas)

//pop() >> remover o  ultimo elemento
console.log("removendo com pop")
frutas.pop();
console.log(frutas)

//sort() >> ordena o array string

console.log("ordenando o string do array")

frutas.sort()
console.log(frutas);

//copiar um array 
let copia = [...frutas]
console.log(" mostrando a copia ")
console.log(copia)


//length >> conta os elementos do array

console.log("contagem de elementos do array")
console.log(frutas.length)

/* como trazer a função Math.random para exibir
um elemento aleatório */

let indiceAleatorio = Math.floor(Math.random()*frutas.length)
console.log(frutas[indiceAleatorio])