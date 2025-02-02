//Leia o salario e o sexo de n funcionários, e ao final informe:
// - qtd de funcionários de cada sexo
// - a soma do salário das mulheres
// - a soma do salário dos homens
// - a média salarial dessa empresa
// - o programa termina quando for digitado "fim"

// let sexo = ""
// let salario = "";
let salario_fem = 0;
let salario_masc = 0;
let continua = "sim"
func_masc = 0
func_fem = 0

 

// i = 0
// for(i = 0; i<3; i++){
//     sexo = prompt("Digite seu sexo ")

// }

while(continua == "sim"){
    sexo = prompt("Digite seu sexo")
    salario = parseFloat(prompt("Informe seu salário"))
    if(sexo == "masculino"){
        func_masc ++
        salario_masc += salario
        // i++
        // continua = prompt('Escreva "sim" para continuar e "fim" para finalizar')
        document.write("Quantidade de funcionários homens: "+func_masc+"<br>")
        document.write("Total de salário de homens R$: "+salario_masc+"<br>")

    }else{
        func_fem ++
        salario_fem += salario
        // continua = prompt('Escreva "sim" para continuar e "fim" para finalizar')
        document.write("Quantidade de funcionários mulheres: "+func_fem+"<br>")
        document.write("Total de salário de mulheres R$: "+salario_fem+"<br>")
        
    }continua = prompt('Escreva "sim" para continuar e "fim" para finalizar')

total_func = parseInt(func_fem) + parseInt(func_masc)
total_salario = salario_masc + salario_fem
media_salario = total_salario / total_func 

}
document.write("A média de salário da empresa é R$: "+media_salario+"<br>")

