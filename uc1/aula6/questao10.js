// 10) Faça um programa que leia os seguintes dados de 10 pessoas:
// - nome
// - cidade
// Ao final, crie um loop que informe o nome e a cidade de cada indice informado pelo usuário


// let nome, cidade = "";
// cadastro = []
// for(i=0; i<3; i++){
//     nome = prompt("Digite seu nome")
//     cidade = prompt("Digite sua cidade")
//     cadastro = nome + cidade
// }while(true){
 
 
//     indice = prompt('Digite um numero entre 0 e 9 para ver o nome e a cidade, ou "sair" para encerra')
//     if(indice == "sair"){
//         break;
//     }

// indice = parseInt(indice)
// if (indice >= 0 && indice < 10) {
//     alert(`Nome: ${pessoas[indice].nome}, Cidade: ${pessoas[indice].cidade}`);
//   } else {
//     alert('Índice inválido. Por favor, digite um número entre 0 e 9.');

//   }

// }

let pessoas = [];


for (let i = 0; i < 3; i++) {
  let nome = prompt("Digite o nome da pessoa "+(i+1)+":");
  let cidade = prompt("Digite a cidade da pessoa "+(i+1)+":");
  pessoas.push({ nome, cidade });
}


while (true) {
  let indice = prompt('Digite um número entre 0 e 9 para ver o nome e a cidade, ou "sair" para encerrar:');

  if (indice.toLowerCase() === 'sair') {
    break;
  }

  indice = parseInt(indice);

  if (indice >= 0 && indice < 3) {
   
    alert("Nome: "+pessoas[indice].nome+ ", Cidade: "+pessoas[indice].cidade)
  } else {
    alert('Índice inválido. Por favor, digite um número entre 0 e 9.');
  }
}





 // alert(`Nome: ${pessoas[indice].nome}, Cidade: ${pessoas[indice].cidade}`);