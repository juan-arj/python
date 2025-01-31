//Solicite ao usuário 5 números usando prompt e exiba a soma total 
let  soma = 0;
for(i = 1; i<=5; i++){
    numero = parseFloat(prompt("Digite o número"));
    soma += numero
}
document.write("O resultado da é: "+soma)