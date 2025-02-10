/*Crie um programa que recebe os valores dos catetos de um 
triângulo retângulo e calcula a hipotenusa usando o Teorema de Pitágoras:*/


// let cateto1= prompt("Digite o primeiro cateto")
// let cateto2= prompt("Digite o segundo cateto")

// let hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2))
// document.write("Hipotenusa = "+Math.round(hipotenusa))



let cateto1 = parseInt(prompt("Digite o primeiro cateto"))
let cateto2 = parseInt(prompt("Digite o segundo cateto"))


let hipotenusa = Math.sqrt(Math.pow(cateto1,2)+ Math.pow(cateto2,2))
document.write("A hipotenusa é: "+Math.round(hipotenusa))



// let cateto1 = parseFloat(prompt("Digite o primeiro cateto"))
// let cateto2 = parseFloat(prompt("Digite o segundo cateto"))

// let hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2))
// document.write =("A hipotenusa é: "+ Math.round(hipotenusa))