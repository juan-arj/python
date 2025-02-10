/*4. Peça ao usuário 3 nomes e adicione-os a um 
vetor usando push(). Depois, exiba a lista ordenada.*/

nomes = []

for(i=0; i<3;i++){
    nome = prompt("Digite o "+[i+1]+" ° nome")
    nomes.push(nome)
}
nomes.sort()
document.write(nomes)