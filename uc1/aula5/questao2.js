//ler altura e peso, e informar o imc e qual a situação do indivíduo

altura = parseFloat(prompt("Digite a altura"))
peso = parseFloat(prompt("Digite seu peso"))

let imc = peso / (altura**2)

if (isNaN(peso) || isNaN(altura)) { // testa se o valor convertido é nulo 
    document.write('Digite um valor válido')
} else {
    if (imc < 18.5) {
        document.write(`Baixo Peso`)
    } else if (imc >= 18.5 && imc <= 24.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Normal`) //toFIxed(2) arredonda o valor para 2 casas decimais
    } else if (imc >= 25 && imc <= 29.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Sobrepeso`)
    } else if (imc >= 30 && imc <= 34.99) {
        document.write(`Seu imc é ${imc.toFixed(2)}  e a classificação é Obesidade I`)
    } else if (imc >= 30 && imc <= 34.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Obesidade I`)

    } else if (imc >= 35 && imc <= 39.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Obesidade II`)
    }
    else {
        document.write(`Seu imc é ${imc.toFixed(2)}  e a classificação é Obesidade III`)
    }
}