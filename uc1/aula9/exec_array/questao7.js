/*7. Crie um programa que simula uma lista de compras, permitindo 
adicionar itens, remover e exibir os itens restantes.*/

lista = []
while(true){
    compras = prompt('Digite um item para adicionar a lista ou: '+"\n"+
                     '"remover" para excluir o último item' +"\n"+
                     '"exibir" para ver os itens da lista'+"\n"+
                     '"sair" para finalizar')
    if(compras.toLowerCase() === "remover"){
        lista.pop()
    }else if(compras.toLowerCase() === "exibir"){
        break
    }else if(compras.toLowerCase() === "sair"){
        break
    }lista.push(compras)
}
document.write(lista)
// \


// class ListaDeCompras {
//     constructor() {
//         this.itens = [];
//     }

//     // Adicionar item à lista
//     adicionarItem(item) {
//         if (item !== "") {
//             this.itens.push(item);
//             console.log(`'${item}' foi adicionado à lista.`);
//         } else {
//             console.log("Por favor, digite um item.");
//         }
//     }

//     // Remover item da lista
//     removerItem(item) {
//         const index = this.itens.indexOf(item);
//         if (index !== -1) {
//             this.itens.splice(index, 1);
//             console.log(`'${item}' foi removido da lista.`);
//         } else {
//             console.log(`'${item}' não está na lista.`);
//         }
//     }

//     // Exibir lista de itens
//     exibirLista() {
//         if (this.itens.length === 0) {
//             console.log("A lista de compras está vazia.");
//         } else {
//             console.log("Itens na lista de compras:");
//             this.itens.forEach((item, index) => {
//                 console.log(`${index + 1}. ${item}`);
//             });
//         }
//     }
// }

// // Função principal para interagir com a lista
// function menu() {
//     const lista = new ListaDeCompras();

//     const readline = require("readline");
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     function promptMenu() {
//         console.log("\nEscolha uma opção:");
//         console.log("1. Adicionar item");
//         console.log("2. Remover item");
//         console.log("3. Exibir lista");
//         console.log("4. Sair");

//         rl.question("Digite o número da opção: ", (escolha) => {
//             switch (escolha) {
//                 case '1':
//                     rl.question("Digite o item a ser adicionado: ", (item) => {
//                         lista.adicionarItem(item);
//                         promptMenu();
//                     });
//                     break;
//                 case '2':
//                     rl.question("Digite o item a ser removido: ", (item) => {
//                         lista.removerItem(item);
//                         promptMenu();
//                     });
//                     break;
//                 case '3':
//                     lista.exibirLista();
//                     promptMenu();
//                     break;
//                 case '4':
//                     console.log("Saindo...");
//                     rl.close();
//                     break;
//                 default:
//                     console.log("Opção inválida. Tente novamente.");
//                     promptMenu();
//             }
//         });
//     }

//     promptMenu();
// }

// menu();