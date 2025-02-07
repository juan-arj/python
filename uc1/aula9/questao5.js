/*Crie um programa que solicita ao usuário dois números (mínimo e máximo) 
e sorteia um número dentro desse intervalo. Exiba o número sorteado na tela.*/

function numero(n1,n2){
    return Math.floor(Math.random()*(n1-n2+1)+n2)
}
let min = parseInt(prompt("Menor número"))
let max = parseInt(prompt("Maior número"))

document.write("Não tenho sorte, mas o número deu: " + numero(max,min))