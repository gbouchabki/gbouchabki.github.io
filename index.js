'use strict'
const dadosManual = document.getElementById('dadosManual')
const saidaDados = document.getElementById('saidaDados')
const inserir = document.getElementById('inserir')
const exibir = document.getElementById('exibir')
const variavel = document.getElementById('variavel')

let todosDados = []
let objVariavel = []

//Função para coletar os dados
function coletaDados (){
    //Comando para rejeitar dados em branco.
    if(dadosManual.value.trim()==''){
        alert("Insira dados válidos")
    }
    else{
    //Comando para injetar os dados inseridos manualmente no vetor
    todosDados.push(dadosManual.value)
    dadosManual.value = '' //Apagar o input
    }

    //Log para conferir Arrays no console
    console.log(todosDados, objVariavel)
}

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)


//Função para exibir os dados coletados na função "coletaDados"
function exibirDados(){
    //Comando para injetar a Variável Estatística dentro do Vetor
    objVariavel.push(variavel.value)
    variavel.value = '' //Apagar o input

    //Loop para imprimir os dados na tela
    for(let a=0; a<todosDados.length; a++){
        saidaDados.innerHTML += objVariavel + '&nbsp' + todosDados[a] + '</br>'
    }
    
}
//Chamada da função no botão exibir
exibir.addEventListener('click', exibirDados)