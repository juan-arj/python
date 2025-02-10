/*3. Crie um vetor com cinco números 
aleatórios de 1 a 50 e exiba apenas os números pares.*/

let num = []
for(i= 0; i<5;i++){
num.push(Math.floor(Math.random()*50)+1)
}

document.write(num+"<br>")

for(i = 0; i< num.length;i++){
    if(num[i] % 2 == 0){
        document.write("Números pares: "+ num[i]+"<br>")
    }
}