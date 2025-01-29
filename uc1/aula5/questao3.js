idade = parseInt(prompt("Digite sua idade"))
if(isNaN(idade)){
    document.write("Digite uma idade válida")
}else{
    if(idade >=18){
        document.write("Você é maior de idade")
    }else{
        document.write("Você é menor de idade")   
    }
    
}