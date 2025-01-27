let idade = 16

// if (idade >= 18){ 
//     console.log("Pode comprar bebidas")
// }else if(idade>=16 && idade<=17){
//     console.log("Pode comprar bebidas acompanhada de um responsável legal")
// }else if(idade<16){
//     console.log("Não pode comprar bebidas")
// }



switch(true){
    case(idade<=16):
        console.log("Não pode comprar bebidas")
        break
    case(idade>=16 && idade<=17):
        console.log("Pode comprar bebidas acompanhada de um responsável legal")
        break   
default:
    console.log("Pode comprar bebidas")
}