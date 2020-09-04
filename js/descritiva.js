'use strict'
const dadosManual = document.getElementById('dadosManual')
const saidaDados = document.getElementById('saidaDados')
const inserir = document.getElementById('inserir')
const exibir = document.getElementById('exibir')
const variavel = document.getElementById('variavel')
const nomeVariavel = document.getElementById('nomeVariavel')

let todosDados
let dadosSeparados = []

//Função para coletar os dados
function coletaDados (){

    if(nomeVariavel.value.trim()==='' || dadosManual.value.trim()==='' || variavel.selectedIndex <= 0){
        alert('Informe os dados corretos')
    }
    else{
    todosDados = dadosManual.value // Entrada de dados Manual
    dadosSeparados = todosDados.split(';') // Converte String em Array
    }

    //Log para conferir Arrays no console
    console.log(dadosSeparados)

    /*
    if(variavel.selectedIndex ==1){ //Nominal
        
    }
    else if(variavel.selectedIndex ==2){ //Ordinal
        
    }
    else if(variavel.selectedIndex ==3){ //Discreta
        
    }
    else if(variavel.selectedIndex ==4){ //Continua
        
    }
    */

   saidaDados.innerHTML += nomeVariavel.value + '</br>'
   //Loop para imprimir os dados na tela
   for(let i = 0; i < dadosSeparados.length; i++){
       saidaDados.innerHTML += dadosSeparados[i] + '&nbsp' + '</br>'
   }
    
}

// function separarDados (){
//     let dadosSeparados = []
//     dadosSeparados = todosDados.split(';')
//     console.log(dadosSeparados)
// }

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)