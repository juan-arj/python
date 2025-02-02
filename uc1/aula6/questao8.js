//Leia o nome do time de 10 torcedores, e ao final informe quantos 
//são flamenguistas, vascaínos, tricolores, botafoguenses, ou outro time.

let time, flamengo = ""
vasco = ""
fluminense = ""
botafogo = ""
outro_time = ""


for(i=0;i<10;i++){
    time = prompt("Digite seu time");
        if(time == "flamengo"){
            flamengo++
        }else if(time == "vasco"){
            vasco++
        }else if(time == "fluminense"){
            fluminense++        
        }else if(time == "botafogo"){
            botafogo++
        }else{
            outro_time++
        }        
}

document.write(
"Tocerdores do flamengo: "+flamengo+"<br>"+
"Tocerdores do vasco: "+vasco+"<br>"+
"Tocerdores do fluminense: "+fluminense+"<br>"+
"Tocerdores do botafogo: "+botafogo+"<br>"+
"Tocerdores de outros times: "+outro_time+"<br>"
)