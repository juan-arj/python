function nomeDoMes(n){
    let meses = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho",
    "Agosto", "Setembro","Novembro","Dezembro"]
    return meses[n-1];

}
let mes = parseInt(prompt("Digite o numero do mês: "))
document.write(nomeDoMes(mes))