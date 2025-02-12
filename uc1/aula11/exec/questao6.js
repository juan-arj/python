/*Crie uma classe Produto com os atributos:
nome (Nome do produto)
preco (Preço do produto)
estoque (Quantidade disponível em estoque)
Adicione os seguintes métodos:
vender(quantidade): Reduz a quantidade do estoque, se houver disponibilidade.
reporEstoque(quantidade): Aumenta a quantidade do estoque.
exibirInfo(): Exibe as informações do produto.*/

class Produto {
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    vender(quantidade){
        if(this.estoque > quantidade){
        this.estoque -= quantidade;
        document.write("Após a venda do produto "+this.nome+", a quantidade em estoque é de "+this.estoque+"<br>")
        } else {
            document.write("O produto "+this.nome+" não tem estoque suficiente nesta quantidade"+"<br>")
        }
    }
    reporEstoque(quantidade){
        this.estoque += quantidade;
        document.write("A quantidade do produto "+this.nome+" depois da reposição é de "+this.estoque+"<br>")
    }
    exibirInfo(){
        document.write("O produto "+this.nome+" com o preço atual de R$: "+this.preço+" possui a quantidade de "+this.estoque+"<br>")
    }
 }
 let produto1 = new Produto("Pipa do flamengo",2,20)
 let produto2 = new Produto("Pano de chão do vasco",5,10)
 let produto3 = new Produto("Protetor de costas do botafogo",50,25)
 let produto4 = new Produto("babydoll do fluminense",25,40)

 produto1.vender(10)
 produto2.reporEstoque(50)
 produto1.exibirInfo()