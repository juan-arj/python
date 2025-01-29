valor = parseFloat(prompt("Digite um valor"))
desconto = parseFloat(prompt("Digite quantos % de desconto"))
valor_final = valor - (valor * desconto /100)

if(isNaN(valor) || isNaN(desconto)){
    document.write("Digite valores reais")
}else{
    document.write("O valor com desconto é: "+valor_final)

    }
