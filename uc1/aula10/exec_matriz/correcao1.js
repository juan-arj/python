
// a)
let notas = [
    [8.5, 7.2, 9.5],
    [9.5, 6.5, 7.5],
    [9.5 ,3.5 ,8.5]
]
// b)
console.log("Matriz é: ");
console.log(notas)
for (let i = 0; i < notas.length; i++) {
    document.write(notas[i].join(" | ") + "<br>");
}

// c)
document.write("Média dos alunos "+"<br>")
for(i=0; i < notas.length; i++){
    let soma = 0
    for(let j= 0; j < notas[i].length; j++){
        soma += notas[i][j]
    }
    media = soma / notas[i].length
    document.write("Aluno : "+(i+1)+("Média: "+media.toFixed(1)+"<br>"))
}

// d)
let maiorNota = notas[0][0]
for(let i = 0; i<notas.length; i++){
    for(let j = 0; j<notas[i].length; j++){
        if(notas[i][j]> maiorNota){
            maiorNota = notas[i][j]
        }    
    }    
}
document.write("<br>"+maiorNota)

// e) 
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] < 6) {
            notas[i][j] = 6;
        }
    }
}
document.write("<br>"+notas)