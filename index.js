'use strict'
const dadosManual = document.getElementById('dadosManual')
const saidaDados = document.getElementById('saidaDados')
const inserir = document.getElementById('inserir')
const exibir = document.getElementById('exibir')
const variavel = document.getElementById('variavel')
const nomePesquisa = document.getElementById('nomePesquisa')

let todosDados = []

//Função para coletar os dados
function coletaDados (){

    if(variavel.selectedIndex <= 0){
        alert('Selecione uma variável!')
    }
    else if(dadosManual.value.trim()===''){
        alert("Insira dados válidos")
    }
    else{
    todosDados.push(dadosManual.value)
    dadosManual.value = '' //Apagar o input
    }

    //Log para conferir Arrays no console
    console.log(todosDados)
}

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

    saidaDados.innerHTML += nomePesquisa.value + '</br>'
    //Loop para imprimir os dados na tela
    for(let a=0; a<todosDados.length; a++){
        saidaDados.innerHTML += todosDados[a] + '&nbsp' + '</br>'
    }
    
}
//Chamada da função no botão exibir
exibir.addEventListener('click', exibirDados)