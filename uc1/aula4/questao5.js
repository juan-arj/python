/*Crie um programa que informa através do 
código da categoria do produto, o tipo de produto:

1 - alimento perecível
2 - bebida
3 - limpeza
4. higiene pessoal  */

let codigo = 3
switch(codigo){
    case 1:
        console.log("Alimento perecível")
        break
    case 2:
        console.log("Bebida")
        break
    case 3:
        console.log("Limpeza")
        break
    case 4:
        console.log("Higiene pessoal")
        break
    default:
        console.log("Codigo invalido")
}