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
    let fr = Object.values(obj)

    console.log(dados)
    console.log(fi)


    if(variavel.selectedIndex ==1){ //Nominal
        tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado - Fi - Fr' + '</br>' 
        let total = 0

        total = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/total) * 100
        }
        
        //Logs para conferir os arrays  no console
        console.log(somaFi)
        console.log(total)
        console.log(fr)
        
        //Loop para imprimir os dados na tela
        for(let i = 0; i < dados.length; i++){
            saidaDados.innerHTML += dados[i] + ' ---- ' + fi[i] +  ' ---- ' + Math.round(fr[i]) + '%' + '</br>'
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
    else if(variavel.selectedIndex == 4){ //Contínua
        function ordernarNumeros(a, b){
             return a - b
        }
    
        dadosSeparados.sort(ordernarNumeros) //Ordena elementos do menor para o maior

        let at = 0 //Amplitude
        let xmin = 0 // Menor Numero
        let xmax = 0 //Maior Numero
        let k = 0 //Numero de Linhas
        let n = 0 // Quantidade de Elementos
        let intervalo = 0

        n = dadosSeparados.length //Conta a quantidade de elementos da Array de entrada de dados
        xmin = dadosSeparados[0] //Captura qual o primeiro elemento da Array
        xmax = dadosSeparados.slice(-1)[0] //Captura o ultimo elemento do Array
        at = xmax --- xmin //Subtração do primeiro elemento pelo ultimo elemento
        k = Math.sqrt(n) //Calcula a Raiz Quadrada da quantidade de elementos da Array de entrada de dados. Esse dado representa a quantidade de linhas que a tabela deverá ter
        intervalo = (at / k) //Calcula o intervalo dos agrupamentos

        //Logs para aferição dos resultados no console
        console.log(at)
        console.log(n)
        console.log(Math.round(k))
        console.log(Math.round(intervalo))

        
        
    }
    
}

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)

