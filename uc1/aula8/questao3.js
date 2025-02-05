/*Crie uma função chamada verificarIdade(idade), que recebe a idade de uma pessoa e 
retorna "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário.*/

function verificarIdade(idade){
    if(idade>=18){
        alert("Maior de idade")
    }else if(idade < 0 ){
        alert("Idade incorreta")
    }else{
        alert("Menor de idade")
    }
    
}

let idade = parseInt(prompt("Digite sua idade"))
verificarIdade(idade)



// function verificarIdade(idade) {
//     let result = ""

//     if (idade >= 18) {
//         result = "Maior de idade"
//     } else {
//         result = "Menor de idade"
//     }
//     return result
// }

// let idade = prompt("Digite sua idade")

// document.write(verificarIdade(idade));