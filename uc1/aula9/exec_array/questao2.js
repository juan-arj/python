/*2. Peça ao usuário para digitar três números e armazene-os em um vetor. 
Depois, exiba o maior número.*/
lista = []
// let numero1 = parseInt(prompt("Digite o primeiro numero"))
// let numero2 = parseInt(prompt("Digite o segundo numero"))
// let numero3 = parseInt(prompt("Digite o terceiro numero"))
for (i=0;i<3;i++){
    let valor = parseInt(prompt("Digite o "+(i+1)+"° número"))
    lista.push(valor)
}
let maior_num = Math.max(...lista)
document.write("O maor numero é: "+maior_num)

// lista.push(numero1);
// lista.push(numero2);
// lista.push(numero3);



// for(let i= 0; i<3;i++){
//     let valor = parseInt(prompt("Digite o "+(i+1)+"° numero"))
//     lista.push(valor)
// }
// let maiorNumero = Math.max(...lista)
// document.write("O maior numero é: "+maiorNumero)





// let numero = []
// for(let i=0; i<3; i++ ) {
//     let valor = parseInt(prompt(`Digite o ${i + 1}º número: `));
//     numero.push(valor);
// }

// let maiorNumero = Math.max(...numero);


// document.write("O maior número digitado é: "+maiorNumero);