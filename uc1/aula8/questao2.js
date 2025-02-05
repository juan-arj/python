/*Crie uma função para cada uma das 4 operações aritméticas 
(soma, subtração, divisão e multiplicação). Depois crie um programa que leia dois números 
e de acordo com a operação solicitada, chame a função responsável pela operação.*/

function somar(a, b){
    let soma = a+b;
    return soma;
}

function multiplicacao(a, b){
    let mult = a*b;
    return mult;
}

function subtracao(a, b){
    let sub = a-b;
    return sub
}

function divisao(a, b){
    let div = a/b;
    return div
}


let valor1 = parseFloat(prompt("Digite o primeiro valor"))
let valor2 = parseFloat(prompt("Digite o segundo valor"))
let operador = prompt("Qual operador? (+, - , *, /)")


if(operador == "+"){
    alert(somar(valor1,valor2))
}else if(operador == "-"){
    alert(subtracao(valo1,valor2))
}else if(operador =="*"){
    alert(multiplicacao(valor1,valor2))
}else if(operador == "/"){
    alert(divisao(valor1,valor2))
}else{
    alert("Operador incorreto")
}



// // Questão 2 - Funções para as operações aritméticas

// function soma(a, b) { return a + b; }
// function subtracao(a, b) { return a - b; }
// function multiplicacao(a, b) { return a * b; }
// function divisao(a, b) {
//     if (b === 0) {
//         return "Erro: Divisão por zero!";
//     }
//     return a / b;
// }

// // principal para ler os números e a operação
// let a = parseFloat(prompt("Digite o primeiro número:"));
// let b = parseFloat(prompt("Digite o segundo número:"));

// let operacao = prompt("Escolha a operação (soma, subtracao, multiplicacao, divisao):").toLowerCase();

// // Chamando a função correspondente à operação escolhida
// switch (operacao) {
//     case 'soma':
//         alert("Resultado: "+ soma(a, b));
//         break;
//     case 'subtracao':
//         alert("Resultado: "+ subtracao(a, b));
//         break;
//     case 'multiplicacao':
//         alert("Resultado: "+ multiplicacao(a, b));
//         break;
//     case 'divisao':
//         alert("Resultado: "+ divisao(a, b));
//         break;
//     default:
//         resultado = "Operação inválida!";
// }