/*Crie uma classe Filme com os atributos título, diretor e ano de lançamento. 
Depois, crie um método que exiba as informações do filme.*/

class Filme{
    constructor(titulo, diretor, ano_lancamento){
        this.titulo = titulo
        this.diretor = diretor
        this.ano_lancamento = ano_lancamento
    }
    info_filme(){
        document.write("Titulo: "+this.titulo+" | Diretor: "+this.diretor+" | Ano de lançamento: "+this.ano_lancamento+" <br>")
    }    
}
let filme = new Filme("Coach Carter - Treino para a Vida", "Thomas Carter", "13/01/2005")

filme.info_filme()