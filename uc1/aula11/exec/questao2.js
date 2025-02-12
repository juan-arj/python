//Crie uma classe Pessoa com os atributos nome, idade e profissão. Depois, crie uma instância e exiba os dados.
class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao
    }
    descricao(){
        document.write(" | Nome: "+this.nome+" | Idade: "+this.idade+" | Profissão : "+this.profissao+ " | ")
    }
}
let pessoa1 = new Pessoa("Karen", 24, "Advogada")
pessoa1.descricao()




/*
// questão 2 com modelo de leitura de dados
class Pessoa {
    constructor(nome,idade,profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
    descricao(){
        document.write("A pessoa "+this.nome+" tem "+this.idade+" e exercer a profissão de  "+this.profissao )
    }

}
// ---- abaixo fazendo a entrada de dados via teclado
let nome = prompt("Informe o nome ");
let idade = parseInt(prompt("Informe o nome "));
let profissao = prompt("Informe a profissão ");
// --------------------------------------------------
let person = new Pessoa(nome,idade,profissao)
person.descricao()
*/