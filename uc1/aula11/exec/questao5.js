/*Crie uma classe Personagem com os atributos nome, energia e nível. Adicione métodos para:
Ganhar energia (aumentarEnergia)
Perder energia (diminuirEnergia)
Subir de nível (subirNivel)
Depois, crie um personagem e realize algumas ações.*/

class Persongem{
    constructor(nome, energia, nivel){
        this.nome = nome
        this.energia = energia
        this.nivel = nivel

    }
    aumentarEnergia(energia){
        this.energia += energia
        document.write("Você ganhou "+energia+ " de energia "+"| Total : "+this.energia+"<br>")
    }
    diminuirEnergia(energia){
        if(energia > this.energia){
            document.write("Valor de energia insuficiente")
        }else{
            this.energia -= energia
            document.write("Você perdeu "+energia+ " de energia "+"| Total : "+this.energia+"<br>")
            
        }
    }
    subirNivel(xp){
        document.write("Parabéns, você subiu de nível "+"<br>")
        this.nivel += xp
        document.write("Novo nivel >> "+this.nivel+"<br>")
    }
    consultarPersonagem(){
        document.write("Nome: " + this.nome + "<br>" + "Energia: " + this.energia + "<br>" + "Nivel: " + this.nivel + "<br>")

    }
}

let person1 = new Persongem("aaa", 100, 1)

person1.consultarPersonagem();
person1.aumentarEnergia(10);
person1.subirNivel(1);
person1.consultarPersonagem();
person1.diminuirEnergia(50)
person1.subirNivel(1)
person1.consultarPersonagem()