/* monte uma matriz 3x3 que preencha o seu conteudo via prompt*/

matriz = []
linhas = 3
colunas = 3

for(i = 0; i<linhas; i++){
    matriz[i] = []
    for(j=0; j<colunas; j++){
        matriz[i][j] = parseInt(prompt('Digite o número para matriz '))
    }
}console.log(matriz)



// ['+i+']['+j+']

// Exibindo a matriz formatada no console

// console.log("Matriz informada pelo usuário:");
// for (let i = 0; i < linhas; i++) {
//     //console.log(matriz[i].join(" "));
//     document.write(matriz[i].join(" | ") + "<br>");
// }