//Calculadora Simples
//Crie um programa que recebe dois números e uma operação 
//(+, -, *, /) e retorna o resultado correspondente.

let valor1 = 10 
let valor2 = 2
let operacao = "*"


switch(operacao){
    case "+":
        console.log(valor1+valor2)
        break
    case "-":
        console.log(valor1-valor2)
        break
    case "*":
        console.log(valor1*valor2)
        break
    case "/":
        console.log(valor1/valor2)
        break
default:
    console.log("Operador invalidos")
}