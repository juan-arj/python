//funçao math.floor()
//arredonda um número para baixo. Ex.
console.log("*** números arredondados(floor)***")
console.log(Math.floor(4.9));
console.log(Math.floor(2.3))



/*funçao Math.random()
gera números aleatórios*/

console.log("*** Números aleatórios(random) ***")
console.log(Math.random());
console.log(Math.floor(Math.random() * 11 ));

//entre 1 e 6
console.log(Math.floor(Math.random() * 6)+1)

//função Math.ceil() arredonda números para cima
console.log("*** números arredondados para cima(ceil)***")
console.log(Math.ceil(3.2)) // 4
let preco = 10.25
console.log(Math.ceil(preco)) //11

//função Math.round() arredondamento normal

console.log("Números com round")
console.log(Math.round(4.4))
console.log(Math.round(4.7))
let media = 7.6
console.log(Math.round(media))

//Math.max()  e Math.min()
let lista = [10, 20, 30, 5, 40]
console.log(Math.max(10, 20, 5, 30))
console.log(Math.min(10, 20, 5, 30))


// função Math.pow() = potência

console.log(Math.pow(3,2))
let lado = 4
let area = Math.pow(lado,2)
console.log("Área do quadrado: "+area)


//função Math.sqrt() = raíz quadrada

console.log("*** Números sqrt ***")
console.log(Math.sqrt(25))
console.log(Math.sqrt(9))