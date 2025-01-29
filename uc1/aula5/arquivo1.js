let valor1 = prompt("Digite o primeiro valor: ")
let valor2 = prompt("Digite o segundo valor: ")
//testar se os valores sao nulos
// let soma = valor1 + valor2

if (valor1.trim() === "" || valor2.trim() === ""){
    alert("Informe valores válidos")

} else{
    num1 = parseFloat(valor1)
    num2 = parseFloat(valor2)
    let soma = num1+num2
    document.write("A soma dos valores é: "+soma)
    //faça uma condiçao para testar se a soma é maior ou menor que 20
    if (soma > 20) {
        document.write("A soma é maior que 20")
    } else if (soma < 20) {
        document.write("A soma é menor que 20")
    } else {
        document.write("A soma é igual a 20")
    }
}
// console.write
// alert()
// document.write