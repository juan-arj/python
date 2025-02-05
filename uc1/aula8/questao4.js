//Crie uma Função que Calcula o Quadrado de um Número

// function numero(valor){
//     num = num**2
//     alert(num)
// }

// let num = parseFloat(prompt("Digite um número"))
// numero(num)


function calQuad($valor1) {
    let $quad = $valor1 * $valor1;
    return $quad
}

let $num1 = parseInt(prompt("Digite um número:"));
calQuad ($num1);

document.write("O quadrado de " + $num1 + " é: " + calQuad($num1));