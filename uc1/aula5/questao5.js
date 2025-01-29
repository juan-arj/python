// Lê um número e informa se ele é par ou ímpar
let valor = parseFloat(prompt("Digite um valor"))

if(isNaN(valor)){
    document.write("Valor incorreto")
}else{
    if(valor % 2 == 0){
        document.write("O valor é par")
    }else
        document.write("O valor é ímpar")
}


// var n = prompt("Digite um numero"); 
// var total = n/2; 
//     if(n / 2 = 0){ 
//     alert("Par");
// } if(n / 2 = 1){ 
//     alert("Impar");
// } 
//  alert(total);