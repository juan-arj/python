let matriz =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matriz)
//acessando um valor
console.log(matriz[0][1])
console.log(matriz[2][2])

//modificando um valor
matriz[1][1] = 99
console.log(matriz)

//percorrer a matriz
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        document.write(matriz[i][j]+"<br>")
    }
}