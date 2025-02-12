//criação de classe

class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca //definição dos atributos
        this.modelo = modelo
        this.cor = cor

    }

    //criando um método
    acelerar(){
        document.write("O carro "+this.modelo+" está acelerando..."+"<br>")
    }
    frear(){
        document.write("O carro "+this.modelo+" freeou..."+"<br>")
    }

}

//criando um objeto a partir da classe Carro

let meuCarro = new Carro("Kia", "Sorento", "Branco");
meuCarro.acelerar()
let meuOutroCarro = new Carro("Fiat", "Uno", "Prata");
meuOutroCarro.acelerar()
meuOutroCarro.frear()