//Solicita dois números e informa qual é o maior

let valor1 = parseFloat(prompt("Digite o primeiro valor"))
let valor2 = parseFloat(prompt("Digite o segundo valor"))

if(isNaN(valor1) || isNaN(valor2)){
    alert("Digite valores corretos")
}else{
    if(valor1 > valor2){
        document.write("O primeiro valor é maior")
    }else{
        document.write("O segundo valor é maior")
    }

}