/*Crie um programa que solicita ao usuário dois números (mínimo e máximo) 
e sorteia um número dentro desse intervalo. Exiba o número sorteado na tela.*/

// function numero(n1,n2){
//     return Math.floor(Math.random()*(n1-n2+1)+n2)
// }
// let min = parseInt(prompt("Menor número"))
// let max = parseInt(prompt("Maior número"))

// document.write("Onúmero deu: " + numero(max,min))



function numero(n1, n2){
    return Math.floor(Math.random()*(n1-n2+1)+n2)
}

let num_min = parseInt(prompt("Digite o menor número "))
let num_max = parseInt(prompt("Digite o maior número "))

document.write("O número sorteado é: "+numero(num_max, num_min))