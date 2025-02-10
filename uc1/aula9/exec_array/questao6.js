/*6.  Crie um programa que receba os nomes de 10 alunos e suas notas em um vetor.
Depois, exiba a média da turma." 
Ao término, exiba também para cada aluno a sua nota.*/

alunos=[]
notas = []
soma = 0
for(i= 0; i<3;i++){
    nome = prompt("Digite o nome do aluno")
    nota = parseFloat(prompt("Digite a nota do aluno "))

    alunos.push(nome)
    notas.push(nota)
    soma += nota
}

media = soma /3

document.write("A média da sala foi: "+media+"<br>")

for(i=0;i<3;i++){
    document.write("Aluno: "+alunos[i]+ " Nota: "+notas[i]+"<br>")
}