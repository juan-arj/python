//Solicita três números e calcula a média.
let valor1 = parseFloat(prompt("Digite o primeiro valor"))
let valor2 = parseFloat(prompt("Digite o segundo valor"))
let valor3 = parseFloat(prompt("Digite o terceiro valor"))

if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)){
    alert("Digite valores válidos")
}else{
    let media = (valor1 + valor2 + valor3) /3
    document.write("A média é: "+ media.toFixed(2))
}
