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
const tabela = document.getElementById('tabela')
const ctx = document.getElementsByClassName("line-chart")
const ctx2 = document.getElementsByClassName("line-chart2")
const ctx3 = document.getElementsByClassName("line-chart3")




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
    let fac = Object.values(obj)
    let facP = Object.values(obj)

    console.log(dados)
    console.log(fi)

    // Criar Tabela

    function criarElemento (elemento){
        return document.createElement(elemento)
    }


    let thead = criarElemento('thead')
    let tbody = criarElemento('tbody')

    let indicesTabela = [nomeVariavel.value, 'Fi','Fr%','Fac','Fac%']


    tabela.appendChild(thead)
    tabela.appendChild(tbody)

    let linhaHead = criarElemento('tr')

    thead.appendChild(linhaHead)
        

    if(variavel.selectedIndex ==1){ //Nominal*****************************
        // tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado   - Fi  -  Fr%  -  Fac - Fac%' + '</br>' // Titulo da tabela provisória
        
        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }
        
        let total = 0
        total = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/total) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }
        
        //Logs para conferir os arrays  no console
        console.log(total)
        console.log(fr)
        console.log(fi)
        console.log(fac)
        console.log(facP)
        
        //Loop para imprimir os dados na tela provisória
        // for(let i = 0; i < dados.length; i++){
        //     saidaDados.innerHTML += dados[i] + ' ------ ' + fi[i] +  ' ---- ' + fr[i].toFixed(2) + '%' + ' ---- ' + fac[i] + ' ---- ' + facP[i].toFixed(2) + '%' + '</br>'
        // }
        for(let i = 0; i < dados.length; i++){
            let linha = criarElemento('tr')

                let tdDados = criarElemento('td')
                tdDados.textContent = dados[i]
                let tdFi = criarElemento('td')
                tdFi.textContent = fi[i]
                let tdFr = criarElemento('td')
                tdFr.textContent = fr[i].toFixed(2) + '%'
                let tdFac = criarElemento('td')
                tdFac.textContent = fac[i]
                let tdFacP = criarElemento('td')
                tdFacP.textContent = facP[i].toFixed(2)+'%'

                linha.appendChild(tdDados)
                linha.appendChild(tdFi)
                linha.appendChild(tdFr)
                linha.appendChild(tdFac)
                linha.appendChild(tdFacP)

            tbody.appendChild(linha)
        }


        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fr,
                backgroundColor: ['#000080', '#0000FF', '#00BFFF', '#87CEFA', '#87CEEB', '#ADD8E6'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FR%",
                    fontSize: 45,
                }
            }
        });

        new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: facP,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC%",
                    fontSize: 45,
                }
            }
        });
        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fac,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC",
                    fontSize: 45,
                }
            }
        });
    }

    else if(variavel.selectedIndex == 2){ //Ordinal*************************
        function ordernarNumeros(a, b){
            return a - b
        }
        fi.sort(ordernarNumeros)
        tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado   - Fi  -  Fr%  -  Fac - Fac%' + '</br>' // Titulo da tabela provisória
        
        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }

        let total = 0
        total = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/total) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }
        
        //Logs para conferir os arrays  no console
        console.log(total)
        console.log(fr)

        //Loop para imprimir os dados na tela
        // for(let i = 0; i < dados.length; i++){
        //     saidaDados.innerHTML += dados[i] + ' ------ ' + fi[i] +  ' ---- ' + fr[i].toFixed(2) + '%' + ' ---- ' + fac[i] + ' ---- ' + facP[i].toFixed(2) + '%' + '</br>'
        // }

        for(let i = 0; i < dados.length; i++){
            let linha = criarElemento('tr')

                let tdDados = criarElemento('td')
                tdDados.textContent = dados[i]
                let tdFi = criarElemento('td')
                tdFi.textContent = fi[i]
                let tdFr = criarElemento('td')
                tdFr.textContent = fr[i].toFixed(2) + '%'
                let tdFac = criarElemento('td')
                tdFac.textContent = fac[i]
                let tdFacP = criarElemento('td')
                tdFacP.textContent = facP[i].toFixed(2)+'%'

                linha.appendChild(tdDados)
                linha.appendChild(tdFi)
                linha.appendChild(tdFr)
                linha.appendChild(tdFac)
                linha.appendChild(tdFacP)

            tbody.appendChild(linha)
        }

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fr,
                backgroundColor: ['#000080', '#0000FF', '#00BFFF', '#87CEFA', '#87CEEB', '#ADD8E6'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FR%",
                    fontSize: 45,
                }
            }
        });

        new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: facP,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC%",
                    fontSize: 45,
                }
            }
        });
        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fac,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC",
                    fontSize: 45,
                }
            }
        });   
    }
    else if(variavel.selectedIndex ==3){ //Discreta***************************
        function ordernarNumeros(a, b){
            return a - b
        }
        dadosSeparados.sort(ordernarNumeros) //Ordenar numeros em ordem crescente
        // tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado   - Fi  -  Fr%  -  Fac - Fac%' + '</br>' // Titulo da tabela provisória 
        
        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }

        let total = 0
        total = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/total) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }
        //Logs para conferir os arrays  no console
        console.log(total)
        console.log(fr)

        //Loop para imprimir os dados na tela
        // for(let i = 0; i < dados.length; i++){
        //     saidaDados.innerHTML += dados[i] + ' ------ ' + fi[i] +  ' ---- ' + fr[i].toFixed(2) + '%' + ' ---- ' + fac[i] + ' ---- ' + facP[i].toFixed(2) + '%' + '</br>'
        // }

        for(let i = 0; i < dados.length; i++){
            let linha = criarElemento('tr')

                let tdDados = criarElemento('td')
                tdDados.textContent = dados[i]
                let tdFi = criarElemento('td')
                tdFi.textContent = fi[i]
                let tdFr = criarElemento('td')
                tdFr.textContent = fr[i].toFixed(2) + '%'
                let tdFac = criarElemento('td')
                tdFac.textContent = fac[i]
                let tdFacP = criarElemento('td')
                tdFacP.textContent = facP[i].toFixed(2)+'%'

                linha.appendChild(tdDados)
                linha.appendChild(tdFi)
                linha.appendChild(tdFr)
                linha.appendChild(tdFac)
                linha.appendChild(tdFacP)

            tbody.appendChild(linha)
        }

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fr,
                backgroundColor: ['#000080', '#0000FF', '#00BFFF', '#87CEFA', '#87CEEB', '#ADD8E6'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FR%",
                    fontSize: 45,
                }
            }
        });

        new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: facP,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC%",
                    fontSize: 45,
                }
            }
        });
        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fac,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC",
                    fontSize: 45,
                }
            }
        });
    }
    else if(variavel.selectedIndex == 4){ //Contínua******************************************
        function ordernarNumeros(a, b){
             return a - b
        }
        dadosSeparados.sort(ordernarNumeros) //Ordena elementos do menor para o maior

        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }

        let total = 0
        total = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/total) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }

        // tituloResultado.innerHTML += nomeVariavel.value +  '&nbsp' + '</br>' + 'Dado   - Fi  -  Fr  -  Fac' + '</br>' // Titulo da tabela provisória
        //Logs para conferir os arrays  no console
        console.log(total)
        console.log(fr)
        
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

        


        
        for(let i = 0; i < dados.length; i++){
            let linha = criarElemento('tr')
            tbody.appendChild(linha)

                let tdDados = criarElemento('td')
                tdDados.textContent = dados[i]
                let tdFi = criarElemento('td')
                tdFi.textContent = fi[i]
                let tdFr = criarElemento('td')
                tdFr.textContent = fr[i].toFixed(2) + '%'
                let tdFac = criarElemento('td')
                tdFac.textContent = fac[i]
                let tdFacP = criarElemento('td')
                tdFacP.textContent = facP[i].toFixed(2)+'%'

                linha.appendChild(tdDados)
                linha.appendChild(tdFi)
                linha.appendChild(tdFr)
                linha.appendChild(tdFac)
                linha.appendChild(tdFacP)

        }
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dados,
                datasets: [{
                data: fr,
                backgroundColor: ['#000080', '#0000FF', '#00BFFF', '#87CEFA', '#87CEEB', '#ADD8E6'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FR%",
                    fontSize: 45,
                }
            }
        });

        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: dados,
                datasets: [{
                data: facP,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC%",
                    fontSize: 45,
                }
            }
        });
        new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: dados,
                datasets: [{
                data: fac,
                backgroundColor: ['#006400', '#008000', '#228B22', '#32CD32', '#00FF00', '#7CFC00'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                //responsive: false,
                title: {
                    display: true,
                    text: "FaC%",
                    fontSize: 45,
                }
            }
        });
        
    }
    
}

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)