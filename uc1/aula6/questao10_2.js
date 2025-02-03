

let nome = []
let cidade = []

for(let i=0; i<3; i++){
    nome.push(prompt("Informe o nome da pessoa"+(i+1)+":"));
    cidade.push(prompt("Informe a cidade da pessoa"+(i+1)+":"));

}
let indice
while(true){
    indice = prompt('Digite um número entre 0 e 9 para ver o nome e a cidade, ou "sair" para encerrar:')
    if(indice.toLowerCase() === 'sair')
    break
}
indice = parseInt(indice);
if(indice >= 0 && indice < 3){
    alert("Nome: "+ nome[indice]+" Cidade: "+ cidade[indice])
}else {
    alert("Índice inválido. Por favor, digite um número entre 0 e 9.")
}

// // correção do 10 com 2 arrays
// let nome   = [];
// let cidade = [];

// //coletando os dados de 10 itens
// for (let i=0; i<3; i++){
//     nome.push(prompt("informe o nome da pessoa "+(i+1)+":"));
//     cidade.push(prompt("informe a cidade da pessoa "+(i+1)+":"));
// }

// let indice;
// let continua;
// while (true){
//     indice = prompt("Informe o índice");
//     if (indice>=0 && indice<3) {
//         alert("Nome..: "+nome[indice]+" Cidade: "+cidade[indice]);
//     } else {
//         alert("índice inválido");
//     }
//     continua = prompt("deseja ler outro índice <s/n>").toLowerCase();
//     if (continua !="s") break;
// }