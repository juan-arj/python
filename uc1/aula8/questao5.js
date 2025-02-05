//Crie uma Função para Contar de 1 até um Número Informado



function contar(numero){
    alert(numero)
}

let numero = parseInt(prompt("Digite um número"))
if(numero < 0){
    alert("Insira um valor maior que 0")
}else{
    for(i= 0;i<=numero;i++){
        document.write(i+"<br>")
    }
    
}


// function calQuad($valor1) {
//     let $quad = $valor1 * $valor1;
//     return $quad
// }

// let $num1 = parseInt(prompt("Digite um número:"));
// calQuad ($num1);

// document.write("O quadrado de " + $num1 + " é: " + calQuad($num1));