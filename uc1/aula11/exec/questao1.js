/*Crie uma classe chamada Moto com os atributos marca, modelo e ano.
 Depois, crie uma instância da classe e exiba as informações no console.*/

class Moto{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo 
        this.ano = ano
    }
    
    exibirMoto(){
        document.write("Marca: "+this.marca+ " | Modelo: "+this.modelo+" | "+" Ano: "+ano+" <br>")
    }
}

let minhaMoto = new Moto("Honda", "Hornet", 2010)
minhaMoto.exibirMoto()