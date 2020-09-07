'use strict'
const dadosManual = document.getElementById('dadosManual')
const saidaDados = document.getElementById('saidaDados')
const inserir = document.getElementById('inserir')
const exibir = document.getElementById('exibir')
const variavel = document.getElementById('variavel')
const nomeVariavel = document.getElementById('nomeVariavel')
const populacao = document.getElementById('populacao')
const parametro = document.getElementById('parametro')
const tituloResultado = document.getElementById('tituloResultado')
const frequenciaTotal = document.getElementById('frequencia')

let todosDados
let dadosSeparados = []
let freq1 = []


//Função para coletar os dados
function coletaDados (){

    let valido = true

    if(nomeVariavel.value.trim()===''){ //Validar se o campo do nome da variável foi preenchido
        alert('Informe um nome de variável válido')
        nomeVariavel.focus()
        return 0
    }
    else if(dadosManual.value.trim()===''){ //Validar se o campo dos dados foi preenchido
        alert('Informe dados válidos')
        dadosManual.focus()
        return 0
    }
    else if(variavel.selectedIndex === 0){ //Validar se a opção de variável foi selecionada
        alert('Informe uma variável')
        variavel.focus()
        return 0
    }
    else if(parametro.selectedIndex === 0){//Validar se o parâmetro foi selecionado
        alert('Informe um parâmetro')
        parametro.focus()
        return 0
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

    //Função para comparar e ordenar numeros
    function ordernarNumeros(a, b){
        return a - b
    }

    dadosSeparados.sort(ordernarNumeros) //Ordenar numeros em ordem crescente
    dadosSeparados.sort() //Ordenar textos em Ordem Alfabética

    tituloResultado.innerHTML += nomeVariavel.value + '</br>'
    //Loop para imprimir os dados na tela
    for(let i = 0; i < dadosSeparados.length; i++){
        saidaDados.innerHTML += dadosSeparados[i] + '&nbsp' + '</br>'
    }
    
}

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)

