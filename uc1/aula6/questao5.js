/*Solicite um nome ao usuário e peça a quantidade de vezes 
que ele deseja exibi-lo na tela. Utilize um loop while*/

let nome = prompt("Digite seu nome");
let vezes = parseInt(prompt("Vezes para repetição"))
let i = 0
while(i<vezes){
    document.write(nome+"<br>")
    vezes--
}
