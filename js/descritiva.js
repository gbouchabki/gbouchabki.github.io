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
let dadosRepetidos = []
let mostraNomeVariavel = []
let freq = []


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


    let obj = dadosSeparados.reduce(function (object, item) {

        if (!object[item]) {
            object[item] = 1;
        } else {
            object[item]++;
        }
        return object;
    }, {})

    let dados = Object.keys(obj)
    let fi = Object.values(obj)

    console.log(dados)
    console.log(fi)


    if(variavel.selectedIndex ==1){ //Nominal
        tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado - Fi' + '</br>' 
        //Loop para imprimir os dados na tela
        for(let i = 0; i < dados.length; i++){
            saidaDados.innerHTML += dados[i] + ' ---- ' + fi[i] + '</br>'
        }        
    }
    else if(variavel.selectedIndex ==2){ //Ordinal
        function ordernarNumeros(a, b){
            return a - b
        }
        fi.sort(ordernarNumeros)

        tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado - Fi' + '</br>' 

        //Loop para imprimir os dados na tela
        for(let i = 0; i < dados.length; i++){
            saidaDados.innerHTML += dados[i] + ' ---- ' + fi[i] + '</br>'
        }    
    }
    else if(variavel.selectedIndex ==3){ //Discreta
        function ordernarNumeros(a, b){
            return a - b
        }
    
        dadosSeparados.sort(ordernarNumeros) //Ordenar numeros em ordem crescente
        
        tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado - Fi' + '</br>' 

        //Loop para imprimir os dados na tela
        for(let i = 0; i < dados.length; i++){
            saidaDados.innerHTML += dados[i] + ' ---- ' + fi[i] + '</br>'
        } 
    }
    // else if(variavel.selectedIndex ==4){
    //     function ordernarNumeros(a, b){
    //         return a - b
    //     }
    
    //     dadosSeparados.sort(ordernarNumeros)
        
    //     let at = dados[dados.length - 1] - dados[0]
    //     console.log(at) 

    //     let linhas = 

        
    // }
    
}

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)

