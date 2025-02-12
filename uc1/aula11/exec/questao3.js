//Crie uma classe Produto com os atributos nome, preço e quantidade. Depois, crie um método que exiba os dados do produto.

class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade
    }
    produtos(){
        document.write(" | Nome: "+this.nome+" | Preço: "+this.preco+" | Quantidade : "+this.quantidade+ " | <br>")
    }
}

let produto1 = new Produto("Arroz", 9.99, 2)
let produto2 = new Produto("Feijão", 5.99, 3)

produto1.produtos()
produto2.produtos()