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

    if(variavel.selectedIndex <= 0){
        alert('Selecione uma variável!')
    }
    else if(dadosManual.value.trim()===''){
        alert("Insira dados válidos")
    }
    else{
    todosDados = dadosManual.value
    dadosSeparados = todosDados.split(';')
    }

    //Log para conferir Arrays no console
    console.log(dadosSeparados)

    //Separa String em Array
    
}

// function separarDados (){
//     let dadosSeparados = []
//     dadosSeparados = todosDados.split(';')
//     console.log(dadosSeparados)
// }

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)





//Função para exibir os dados coletados na função "coletaDados"
function exibirDados(){
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
//Chamada da função no botão exibir
exibir.addEventListener('click', exibirDados)