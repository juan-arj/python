/*Dado um sistema que armazena notas de alunos em uma matriz 3x3, realize as seguintes atividades:
a) Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos.
b) Exibir a matriz no console de forma organizada. (usando uma estrutura de repetição)
c) Calcular e exibir a média das notas de cada aluno.
d) Identificar e exibir a maior nota da matriz.
e) Substituir todas as notas menores que 6 por 6, garantindo que nenhum aluno fique com nota abaixo desse valor.*/

// A) criar a matriz 3x3
let notas = [];
let linhas = 3
let colunas = 3

for(i = 0; i<linhas; i++){
    notas[i] = []
    for(j = 0; j<colunas; j++){
        notas[i][j] = parseFloat(prompt('Digite a nota dos alunos'))
    }
    
    
}
// B) exibir a matriz no console de forma organizada
console.log("Matriz é: ");
console.log(notas)
for (let i = 0; i < linhas; i++) {
    
    document.write(notas[i].join(" | ") + "<br>");
}


// C)
document.write("Média dos alunos "+"<br>")
for(i=0; i<linhas; i++){
    let soma = 0
    for(j=0; j<colunas; j++){
        soma += notas[i][j]
    }
    media = soma / notas.length
    document.write("Aluno : "+(i+1)+("Média: "+media.toFixed(1)+"<br>"))
}
