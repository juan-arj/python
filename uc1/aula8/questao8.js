//Crie uma Função para Converter Metros para Centímetros 
let metros = parseFloat(prompt("Digite quantos metros quer converter "))

function multiplicacao(){
    metrosCm = (metros *100)
    alert("O total em centímetros é: "+metrosCm)
    return metrosCm
}
multiplicacao()