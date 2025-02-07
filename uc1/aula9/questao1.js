/*:Crie um programa que sorteia um número entre 1 e 100. Se for par,
 exiba "Número X é par". Se for ímpar, exiba "Número X é ímpar"*/


numero = Math.floor(Math.random()*101)+1    
if(numero % 2 == 0){
    document.write("O número " + numero + " é par")
}else{
    document.write("O número "+ numero +" é ímpar")
}



