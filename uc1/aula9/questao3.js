/*Receba um número decimal qualquer e exiba:
O valor arredondado para cima (Math.ceil())
O valor arredondado para baixo (Math.floor())
O valor arredondado normalmente (Math.round())*/

const num = prompt("Digite uum número decimal")

document.write(num+" arredondado para cima: "+Math.ceil(num)+"<br>")
document.write(num+" arredondado para baixo: "+Math.floor(num)+"<br>")
document.write(num+" arrendodado normalmente: "+Math.round(num)+"<br>")