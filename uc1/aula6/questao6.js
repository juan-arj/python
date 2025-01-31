//Solicite ao usuário um número e exiba a 
//tabuada de multiplicação desse número de 1 a 10

// 
numero = parseInt(prompt("Digite um número"))
tabuada = 1 

while(tabuada<=10){
    document.write(tabuada+"x"+numero+"="+numero*tabuada+"<br>")
    tabuada++
    
}

