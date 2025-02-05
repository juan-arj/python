//Crie uma Função para Contar de 1 até um Número Informado



function contar(numero){
    alert(numero)
}

let numero = parseInt(prompt("Digite um número"))
if(numero < 0){
    alert("Insira um valor maior que 0")
}else{
    for(i= 0;i<=numero;i++){
        document.write(i+" ")
    }
    
}

