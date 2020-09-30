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
const mtc = document.getElementById('mtc')


let todosDados
let dadosSeparados = []
let dadosRepetidos = []
let mostraNomeVariavel = []
let freq = []

const ordem = document.querySelector('#ordem-resultado')
const ordinal = document.querySelector('#ordinal')

//Função para coletar os dados
function coletaDados (){

    tabela.innerHTML = ''

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
        dadosSeparados = todosDados.split('; ') // Converte String em Array
    }

    
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
    let xifi = Object.values(obj)
    let desvio = Object.values(obj)
    let desvioQ = Object.values(obj)
    let desvioFi = Object.values(obj)
    let fr = Object.values(obj)
    let fac = Object.values(obj)
    let facP = Object.values(obj)
    let ds = Object.values(obj)

    //Log para conferir Arrays no console
    console.log(dadosSeparados) //1
    console.log(dados) //2
    console.log(fi) //3

    // Criar Tabela

    function criarElemento (elemento){
        return document.createElement(elemento)
    }


    let thead = criarElemento('thead')
    let tbody = criarElemento('tbody')

    let indicesTabela = [nomeVariavel.value, 'Frequência','Frequência (%)','Frequência Aculmulada','FAC%']


    tabela.appendChild(thead)
    tabela.appendChild(tbody)

    let linhaHead = criarElemento('tr')

    thead.appendChild(linhaHead)
    
    if(variavel.selectedIndex == 1){ //Nominal********************************************************************************************
        
        
        

        let tituloTab = criarElemento('caption')
        tituloTab.textContent = 'Váriavel Qualitativa Nominal'
        tituloTab.style.fontWeight = 700
        tabela.appendChild(tituloTab)
        
        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }
        
        let totalFi = 0
        totalFi = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/totalFi) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }

        //Calculo da média######
        let soma = 0
        let media = 0
        soma = dadosSeparados.reduce((t, n) => n+++t , 0) // Soma do vetor dadosSeparados para calcular a média dos dados inseridos
        media = soma/dadosSeparados.length

        //Calculo##########
        
        //Acha a frequência de um número no Array
        function calcularFreq(numero, dadosSeparados){
            let num_vezes=0
            for (let pos in dadosSeparados) {
                if (dadosSeparados[pos]==numero) {
                    num_vezes++
                }
            }
            return num_vezes
        }

        //Descobre a posição do maior elemento
        function obterPosMaior(dadosSeparados){
            let posMaior=0
            let numMaior=dadosSeparados[0]
            for (var pos in dadosSeparados){
                if (dadosSeparados[pos]>numMaior) {
                    numMaior=dadosSeparados[pos]
                    posMaior=pos
                }
            }
            return posMaior
        }

        //Função para calcular a MODA
        function obterModa(dadosSeparados){
            let freq=new Array(dadosSeparados.length)
            for (let pos in dadosSeparados){
                let numero=dadosSeparados[pos]
                freq[pos]=calcularFreq(numero, dadosSeparados)
            }
            let posModa=obterPosMaior(freq)
            return dadosSeparados[posModa]
        }

        let vetModa = dadosSeparados
        let moda = obterModa(vetModa)

        //Calculo da Mediana####

        let posCentro = (dadosSeparados.length - 1) / 2
        var mediana = dadosSeparados[Math.round(posCentro)]

        
        //Calcular Quartil##########

        //Q1
        let posQ1 = (dadosSeparados.length - 1) / 4 //Q1
        let q1 = dadosSeparados[Math.round(posQ1)]

        let mq3 = posQ1 * 3 // Q3
        let q3 = dadosSeparados[Math.round(mq3)]

        
        //Calcular Quintil##########

        let posK1 = (dadosSeparados.length - 1) / 5 //K1
        let k1 = dadosSeparados[Math.round(posK1)]

        let mk2 = posK1 * 2 //K2
        let k2 = dadosSeparados[Math.round(mk2)]

        let mk3 = posK1 * 3 //K3
        let k3 = dadosSeparados[Math.round(mk3)]

        let mk4 = posK1 * 4 //K4
        let k4 = dadosSeparados[Math.round(mk4)]

        //Calcular Decil##########

        //Calcular o Porcentil##########

        //Cacular XI.FI
        for(let i = 0; i < dados.length; i++){
            xifi[i]=dados[i]*fi[i]
        }

        //Soma dos elementos do "xifi" retornados em uma variável simples
        let totalXifi = 0
        for(let i in xifi) {
            totalXifi += xifi[i]
        }

        //Média aritimética ponderada
        let map = 0
        map = totalXifi / totalFi

        //Calculando o desvio
        for(let i = 0; i < dados.length; i++){
            if(dados[i] > map){
                desvio[i] = dados[i] - map
            }
            else{
                desvio[i] = map - dados[i]
            }
        }

        //Calculando desvio ao quadrado
        for(let i = 0; i < desvio.length; i++){
            desvioQ[i] = desvio[i]*desvio[i]
        }

        //Calculando desvioQ * f1
        for(let i = 0; i < desvioQ.length; i++){
            desvioFi[i] = desvioQ[i]*fi[i]
        }

        //Soma dos elementos do "desvioFi" retornados em uma variável simples
        let totalDesvioFi = 0
        for(let i in desvioFi) {
            totalDesvioFi += desvioFi[i]
        }

        //Calculo Variância
        let variancia = 0
        variancia = totalDesvioFi / totalFi

        //Calculo Desvio Padrão
        let desvioPadrao = 0
        desvioPadrao = Math.sqrt(variancia)

        //Calculo coeficiente de variação
        let coefVar = 0
        coefVar = (desvioPadrao / media)*100

        //Logs para conferir os arrays  no console
        console.log(totalFi)//4
        console.log(fr)//5
        console.log(fi)//6
        console.log(fac)//7
        console.log(facP)//8
        console.log(soma)//9
        console.log(media)//10
        console.log(moda)//11
        console.log(mediana)//12
        console.log(k1)
        console.log(k2)
        console.log(k3)
        console.log(k4)
        console.log(xifi)
        console.log(totalXifi)
        console.log(map)
        console.log(desvio)
        console.log(desvioQ)
        console.log(desvioFi)
        console.log(totalDesvioFi)
        console.log(variancia)
        console.log(desvioPadrao)
        console.log(coefVar)
        //Exibição dos daods na nova tabela
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

        //Exibição da Média, Moda e Mediana#####
        mtc.innerHTML += 'Média: ' + media.toFixed(2) + '</br>'
        + 'Moda: ' + moda + '</br>'
        + 'Mediana: ' + mediana + '</br>'
        + 'Quartil Q1: ' + q1 + '</br>'
        + 'Quartil Q2: ' + mediana + '</br>'
        + 'Quartil Q3: ' + q3 + '</br>'
        + 'Quintil K1: ' + k1 + '</br>'
        + 'Quintil K2: ' + k2 + '</br>'
        + 'Quintil K3: ' + k3 + '</br>'
        + 'Quintil K4: ' + k4 + '</br>'
        + 'Desvio Padrão: ' + desvioPadrao.toFixed(2) + '</br>'
        + 'Coeficiente de Variação: ' + coefVar.toFixed(2) + '%' + '</br>'
        
        

        //GRÁFICO
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fr,
                backgroundColor: ['#000080', '#0000CD','#0000FF', '#6495ED', '#4169E1', '#1E90FF', '#00CED1', '#40E0D0', '#48D1CC', '#20B2AA', '#008B8B', '#008080', '#00FA9A', '#00FF7F', '#32CD32', '#3CB371', '#2E8B57', '#006400', '#008000', '#228B22'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "FR%",
                    fontSize: 45,
                }
            }
        });
    }
    
    else if(variavel.selectedIndex == 2){ //Ordinal***************************************************************************************
        //Criar Cabeçalho Tabela
        let tituloTab = criarElemento('caption')
        tituloTab.textContent = 'Váriavel Qualitativa Ordinal'
        tituloTab.style.fontWeight = 700
        tabela.appendChild(tituloTab)

        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }

        //-------- Calculos ----------
        //Soma dos elementos do "Fi" retornados em uma variável simples
        let totalFi = 0
        totalFi = fi.reduce((total, currentElement) => total + currentElement) 

        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/totalFi) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }

        //Calculo da média######
        let soma = 0
        let media = 0
        soma = dadosSeparados.reduce((t, n) => n+++t , 0) // Soma do vetor dadosSeparados para calcular a média dos dados inseridos
        media = soma/dadosSeparados.length

        //Calculo##########
        
        //Acha a frequência de um número no Array
        function calcularFreq(numero, dadosSeparados){
            let num_vezes=0
            for (let pos in dadosSeparados) {
                if (dadosSeparados[pos]==numero) {
                    num_vezes++
                }
            }
            return num_vezes
        }

        //Descobre a posição do maior elemento
        function obterPosMaior(dadosSeparados){
            let posMaior=0
            let numMaior=dadosSeparados[0]
            for (var pos in dadosSeparados){
                if (dadosSeparados[pos]>numMaior) {
                    numMaior=dadosSeparados[pos]
                    posMaior=pos
                }
            }
            return posMaior
        }

        //Função para calcular a MODA
        function obterModa(dadosSeparados){
            let freq=new Array(dadosSeparados.length)
            for (let pos in dadosSeparados){
                let numero=dadosSeparados[pos]
                freq[pos]=calcularFreq(numero, dadosSeparados)
            }
            let posModa=obterPosMaior(freq)
            return dadosSeparados[posModa]
        }

        let vetModa = dadosSeparados
        let moda = obterModa(vetModa)

        //Calculo da Mediana####
        if(dadosSeparados.length % 2 == 0){
            let pos1 = dadosSeparados.length/2
            let pos2 = pos1 - 1
            let elem1 = dadosSeparados[pos1]
            let elem2 = dadosSeparados[pos2]
            var mediana = (parseInt(elem1)+parseInt(elem2))/2
        }
        else{
            let posCentro = (dadosSeparados.length - 1)/2
            var mediana = dadosSeparados[posCentro]
        }

        //Calcular Quartil##########

        //Q1
        let posQ1 = (dadosSeparados.length - 1) / 4 //Q1
        let q1 = dadosSeparados[posQ1]

        let mq3 = posQ1 * 3 // Q3
        let q3 = dadosSeparados[mq3]

        
        //Calcular Quintil##########

        let posK1 = (dadosSeparados.length -1) / 5 //K1
        let k1 = dadosSeparados[posK1]

        let mk2 = posK1 * 2 //K2
        let k2 = dadosSeparados[mk2]

        let mk3 = posK1 * 3 //K3
        let k3 = dadosSeparados[mk3]

        let mk4 = posK1 * 4 //K4
        let k4 = dadosSeparados[mk4]

        //Cacular XI.FI
        for(let i = 0; i < dados.length; i++){
            xifi[i]=dados[i]*fi[i]
        }

        //Soma dos elementos do "xifi" retornados em uma variável simples
        let totalXifi = 0
        for(let i in xifi) {
            totalXifi += xifi[i]
        }

        //Média aritimética ponderada
        let map = 0
        map = totalXifi / totalFi

        //Calculando o desvio
        for(let i = 0; i < dados.length; i++){
            if(dados[i] > map){
                desvio[i] = dados[i] - map
            }
            else{
                desvio[i] = map - dados[i]
            }
        }

        //Calculando desvio ao quadrado
        for(let i = 0; i < desvio.length; i++){
            desvioQ[i] = desvio[i]*desvio[i]
        }

        //Calculando desvioQ * f1
        for(let i = 0; i < desvioQ.length; i++){
            desvioFi[i] = desvioQ[i]*fi[i]
        }

        //Soma dos elementos do "desvioFi" retornados em uma variável simples
        let totalDesvioFi = 0
        for(let i in desvioFi) {
            totalDesvioFi += desvioFi[i]
        }

        //Calculo Variância
        let variancia = 0
        variancia = totalDesvioFi / totalFi

        //Calculo Desvio Padrão
        let desvioPadrao = 0
        desvioPadrao = Math.sqrt(variancia)

        //Calculo coeficiente de variação
        let coefVar = 0
        coefVar = (desvioPadrao / media)*100
        
        //Logs para conferir os arrays  no console
        console.log(totalFi)
        console.log(fr)


        //Exibição dos dados na nova tabela
        for(let i = 0; i < dados.length; i++){

            let linha = criarElemento('tr')

            let posicao = dados.indexOf(dados[i])


                let seta = criarElemento('span')
                let tdDados = criarElemento('td')
                let pDados = criarElemento('p')
                pDados.textContent = dados[i]
                let tdFi = criarElemento('td')
                let pFi = criarElemento('p')
                pFi.textContent = fi[i]
                let tdFr = criarElemento('td')
                let pFr = criarElemento('p')
                pFr.textContent = fr[i].toFixed(2) + '%'
                let tdFac = criarElemento('td')
                let pFac = criarElemento('p')
                pFac.textContent = fac[i]
                let tdFacP = criarElemento('td')
                let pFacP = criarElemento('p')
                pFacP.textContent = facP[i].toFixed(2)+'%'

                linha.appendChild(tdDados)
                linha.appendChild(tdFi)
                linha.appendChild(tdFr)
                linha.appendChild(tdFac)
                linha.appendChild(tdFacP)

                tdDados.appendChild(pDados)
                tdFi.appendChild(pFi)
                tdFr.appendChild(pFr)
                tdFac.appendChild(pFac)
                tdFacP.appendChild(pFacP)
                
                tdDados.appendChild(seta)

                seta.classList.add('seta')
                seta.setAttribute('onclick', 'moveDown('+ posicao +')')

                pDados.classList.add('dado')
                pFi.classList.add('fi')
                pFr.classList.add('fr')
                pFac.classList.add('fac')
                pFacP.classList.add('facP')
                
                tbody.appendChild(linha)
            linha.classList.add('linha-tabela')

        }

        
        //Exibição da Média, Moda e Mediana#####
        mtc.innerHTML += 'Média: ' + media.toFixed(2) + '</br>'
        + 'Moda: ' + moda + '</br>'
        + 'Mediana: ' + mediana + '</br>'
        + 'Quartil Q1: ' + q1 + '</br>'
        + 'Quartil Q2: ' + mediana + '</br>'
        + 'Quartil Q3: ' + q3 + '</br>'
        + 'Quintil K1: ' + k1 + '</br>'
        + 'Quintil K2: ' + k2 + '</br>'
        + 'Quintil K3: ' + k3 + '</br>'
        + 'Quintil K4: ' + k4 + '</br>'
        + 'Desvio Padrão: ' + desvioPadrao.toFixed(2) + '</br>'
        + 'Coeficiente de Variação: ' + coefVar.toFixed(2) + '%' + '</br>'

        //GRÁFICO
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fr,
                backgroundColor: ['#000080', '#0000CD','#0000FF', '#6495ED', '#4169E1', '#1E90FF', '#00CED1', '#40E0D0', '#48D1CC', '#20B2AA', '#008B8B', '#008080', '#00FA9A', '#00FF7F', '#32CD32', '#3CB371', '#2E8B57', '#006400', '#008000', '#228B22'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "FR%",
                    fontSize: 45,
                }
            }
        });

     

    }
    
    else if(variavel.selectedIndex == 3){ //Discreta**************************************************************************************
        
        
        
        

        function ordernarNumeros(a, b){
            return a - b
        }
        dadosSeparados.sort(ordernarNumeros) //Ordenar numeros em ordem crescente
        
        let tituloTab = criarElemento('caption')
        tituloTab.textContent = 'Váriavel Quantitativa Discreta'
        tituloTab.style.fontWeight = 700
        tabela.appendChild(tituloTab)

        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }

        let totalFi = 0
        totalFi = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/totalFi) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }

        //Calculo da média######
        let soma = 0
        let media = 0
        soma = dadosSeparados.reduce((t, n) => n+++t , 0) // Soma do vetor dadosSeparados para calcular a média dos dados inseridos
        media = soma/dadosSeparados.length

        
        //Acha a frequência de um número no Array
        function calcularFreq(numero, dadosSeparados){
            let num_vezes=0
            for (let pos in dadosSeparados) {
                if (dadosSeparados[pos]==numero) {
                    num_vezes++
                }
            }
            return num_vezes
        }

        //Descobre a posição do maior elemento
        function obterPosMaior(dadosSeparados){
            let posMaior=0
            let numMaior=dadosSeparados[0]
            for (var pos in dadosSeparados){
                if (dadosSeparados[pos]>numMaior) {
                    numMaior=dadosSeparados[pos]
                    posMaior=pos
                }
            }
            return posMaior
        }

        //Função para calcular a MODA
        function obterModa(dadosSeparados){
            let freq=new Array(dadosSeparados.length)
            for (let pos in dadosSeparados){
                let numero=dadosSeparados[pos]
                freq[pos]=calcularFreq(numero, dadosSeparados)
            }
            let posModa=obterPosMaior(freq)
            return dadosSeparados[posModa]
        }

        let vetModa = dadosSeparados
        let moda = obterModa(vetModa)

        //Calculo da Mediana####

        if(dadosSeparados.length % 2 == 0){
            let pos1 = dadosSeparados.length/2
            let pos2 = pos1 - 1
            let elem1 = dadosSeparados[pos1]
            let elem2 = dadosSeparados[pos2]
            var mediana = (parseInt(elem1)+parseInt(elem2))/2
        }
        else{
            let posCentro = (dadosSeparados.length - 1)/2
            var mediana = dadosSeparados[posCentro]
        }

        //Calcular Quartil##########

        //Q1
        let posQ1 = (dadosSeparados.length - 1) / 4 //Q1
        let q1 = dadosSeparados[posQ1]

        let mq3 = posQ1 * 3 // Q3
        let q3 = dadosSeparados[mq3]

        
        //Calcular Quintil##########

        let posK1 = (dadosSeparados.length -1) / 5 //K1
        let k1 = dadosSeparados[posK1]

        let mk2 = posK1 * 2 //K2
        let k2 = dadosSeparados[mk2]

        let mk3 = posK1 * 3 //K3
        let k3 = dadosSeparados[mk3]

        let mk4 = posK1 * 4 //K4
        let k4 = dadosSeparados[mk4]

        //Cacular XI.FI
        for(let i = 0; i < dados.length; i++){
            xifi[i]=dados[i]*fi[i]
        }

        //Soma dos elementos do "xifi" retornados em uma variável simples
        let totalXifi = 0
        for(let i in xifi) {
            totalXifi += xifi[i]
        }

        //Média aritimética ponderada
        let map = 0
        map = totalXifi / totalFi

        //Calculando o desvio
        for(let i = 0; i < dados.length; i++){
            if(dados[i] > map){
                desvio[i] = dados[i] - map
            }
            else{
                desvio[i] = map - dados[i]
            }
        }

        //Calculando desvio ao quadrado
        for(let i = 0; i < desvio.length; i++){
            desvioQ[i] = desvio[i]*desvio[i]
        }

        //Calculando desvioQ * f1
        for(let i = 0; i < desvioQ.length; i++){
            desvioFi[i] = desvioQ[i]*fi[i]
        }

        //Soma dos elementos do "desvioFi" retornados em uma variável simples
        let totalDesvioFi = 0
        for(let i in desvioFi) {
            totalDesvioFi += desvioFi[i]
        }

        //Calculo Variância
        let variancia = 0
        variancia = totalDesvioFi / totalFi

        //Calculo Desvio Padrão
        let desvioPadrao = 0
        desvioPadrao = Math.sqrt(variancia)

        //Calculo coeficiente de variação
        let coefVar = 0
        coefVar = (desvioPadrao / media)*100

        //Logs para conferir os arrays  no console
        console.log(totalFi)
        console.log(fr)

        //Exibição dos dados na nova tabela
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
        
        //Exibição da Média, Moda e Mediana#####
        mtc.innerHTML += 'Média: ' + media.toFixed(2) + '</br>'
        + 'Moda: ' + moda + '</br>'
        + 'Mediana: ' + mediana + '</br>'
        + 'Quartil Q1: ' + q1 + '</br>'
        + 'Quartil Q2: ' + mediana + '</br>'
        + 'Quartil Q3: ' + q3 + '</br>'
        + 'Quintil K1: ' + k1 + '</br>'
        + 'Quintil K2: ' + k2 + '</br>'
        + 'Quintil K3: ' + k3 + '</br>'
        + 'Quintil K4: ' + k4 + '</br>'
        + 'Desvio Padrão: ' + desvioPadrao.toFixed(2) + '</br>'
        + 'Coeficiente de Variação: ' + coefVar.toFixed(2) + '%' + '</br>'

        //GRÁFICO
        new Chart(ctx, {
            type: 'bar',
            label: ' ',
            data: {
                labels: dados,
                datasets: [{
                    label: "FR%",
                    data: fr,
                    backgroundColor: ['#000080', '#0000CD','#0000FF', '#6495ED', '#4169E1', '#1E90FF', '#00CED1', '#40E0D0', '#48D1CC', '#20B2AA', '#008B8B', '#008080', '#00FA9A', '#00FF7F', '#32CD32', '#3CB371', '#2E8B57', '#006400', '#008000', '#228B22'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    fontSize: 45,
                }
            }
        });
    }
    
    else if(variavel.selectedIndex == 4){ //Contínua**************************************************************************************
               
        function ordernarNumeros(a, b){
             return a - b
        }
        dadosSeparados.sort(ordernarNumeros) //Ordena elementos do menor para o maior

        //-------CALCULOS INTERVALOS---------------
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

        console.log('Quantidade de Elementos: ' + n)
        console.log('Referência: ' + at)
        console.log('Quantidade de Linhas: ' + Math.round(k))
        console.log('Intervalo: ' + Math.round(intervalo))

        let itvDado = []
        let itvFi = []

        for (let i = 0; i < dados.length; i++){
            if(dados[i] <= intervalo){
                

            }
        }

        console.log('Dados do Intervalo: ' + itvDado)



        let tituloTab = criarElemento('caption')
        tituloTab.textContent = 'Váriavel Quantitativa Contínua'
        tituloTab.style.fontWeight = 700
        tabela.appendChild(tituloTab)

        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }

        let totalFi = 0
        totalFi = fi.reduce((total, currentElement) => total + currentElement) //Soma dos elementos do "Fi" retornados em uma variável simples
        
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fr"
            fr[i] = (fi[i]/totalFi) * 100
        }

        fac[0] = fi[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac"
            fac[i+1] = fac[i+0] + fi[i+1]
        }

        facP[0] = fr[0]
        for(let i = 0; i < fi.length; i++){ //Calculo do "Fac%"
            facP[i+1] = facP[i+0] + fr[i+1]
        }

        //Calculo da média######
        let soma = 0
        let media = 0
        soma = dadosSeparados.reduce((t, n) => n+++t , 0) // Soma do vetor dadosSeparados para calcular a média dos dados inseridos
        media = soma/dadosSeparados.length

        //Calculo##########
        
        //Acha a frequência de um número no Array
        function calcularFreq(numero, dadosSeparados){
            let num_vezes=0
            for (let pos in dadosSeparados) {
                if (dadosSeparados[pos]==numero) {
                    num_vezes++
                }
            }
            return num_vezes
        }

        //Descobre a posição do maior elemento
        function obterPosMaior(dadosSeparados){
            let posMaior=0
            let numMaior=dadosSeparados[0]
            for (var pos in dadosSeparados){
                if (dadosSeparados[pos]>numMaior) {
                    numMaior=dadosSeparados[pos]
                    posMaior=pos
                }
            }
            return posMaior
        }

        //Função para calcular a MODA
        function obterModa(dadosSeparados){
            let freq=new Array(dadosSeparados.length)
            for (let pos in dadosSeparados){
                let numero=dadosSeparados[pos]
                freq[pos]=calcularFreq(numero, dadosSeparados)
            }
            let posModa=obterPosMaior(freq)
            return dadosSeparados[posModa]
        }

        let vetModa = dadosSeparados
        let moda = obterModa(vetModa)

        //Calculo da Mediana####

        if(dadosSeparados.length % 2 == 0){
            let pos1 = dadosSeparados.length/2
            let pos2 = pos1 - 1
            let elem1 = dadosSeparados[pos1]
            let elem2 = dadosSeparados[pos2]
            var mediana = (parseInt(elem1)+parseInt(elem2))/2
        }
        else{
            let posCentro = (dadosSeparados.length - 1)/2
            var mediana = dadosSeparados[posCentro]
        }

        //Calcular Quartil##########

        //Q1
        let posQ1 = (dadosSeparados.length - 1) / 4 //Q1
        let q1 = dadosSeparados[posQ1]

        let mq3 = posQ1 * 3 // Q3
        let q3 = dadosSeparados[mq3]

        
        //Calcular Quintil##########

        let posK1 = (dadosSeparados.length -1) / 5 //K1
        let k1 = dadosSeparados[posK1]

        let mk2 = posK1 * 2 //K2
        let k2 = dadosSeparados[mk2]

        let mk3 = posK1 * 3 //K3
        let k3 = dadosSeparados[mk3]

        let mk4 = posK1 * 4 //K4
        let k4 = dadosSeparados[mk4]

        //Cacular XI.FI
        for(let i = 0; i < dados.length; i++){
            xifi[i]=dados[i]*fi[i]
        }

        //Soma dos elementos do "xifi" retornados em uma variável simples
        let totalXifi = 0
        for(let i in xifi) {
            totalXifi += xifi[i]
        }

        //Média aritimética ponderada
        let map = 0
        map = totalXifi / totalFi

        //Calculando o desvio
        for(let i = 0; i < dados.length; i++){
            if(dados[i] > map){
                desvio[i] = dados[i] - map
            }
            else{
                desvio[i] = map - dados[i]
            }
        }

        //Calculando desvio ao quadrado
        for(let i = 0; i < desvio.length; i++){
            desvioQ[i] = desvio[i]*desvio[i]
        }

        //Calculando desvioQ * f1
        for(let i = 0; i < desvioQ.length; i++){
            desvioFi[i] = desvioQ[i]*fi[i]
        }

        //Soma dos elementos do "desvioFi" retornados em uma variável simples
        let totalDesvioFi = 0
        for(let i in desvioFi) {
            totalDesvioFi += desvioFi[i]
        }

        //Calculo Variância
        let variancia = 0
        variancia = totalDesvioFi / totalFi

        //Calculo Desvio Padrão
        let desvioPadrao = 0
        desvioPadrao = Math.sqrt(variancia)

        //Calculo coeficiente de variação
        let coefVar = 0
        coefVar = (desvioPadrao / media)*100

        //Logs para conferir os arrays  no console
        console.log(totalFi)
        console.log(fr)
                
        //Logs para aferição dos resultados no console
        console.log(at)
        console.log(n)
        console.log('Quantidade de Linhas: ' + Math.round(k))
        console.log('Intervalo: ' + Math.round(intervalo))


        
        //Exibição dos daods na nova tabela
        for(let i = 0; i < dados.length; i++){
            let linha = criarElemento('tr')
            tbody.appendChild(linha)

            for (let i = 0; i < Math.round(k); i++){
                while (dados[i] <= intervalo) {
                    
                }
            }


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

        //Exibição da Média, Moda e Mediana#####
        mtc.innerHTML += 'Média: ' + media.toFixed(2) + '</br>'
        + 'Moda: ' + moda + '</br>'
        + 'Mediana: ' + mediana + '</br>'
        + 'Quartil Q1: ' + q1 + '</br>'
        + 'Quartil Q2: ' + mediana + '</br>'
        + 'Quartil Q3: ' + q3 + '</br>'
        + 'Quintil K1: ' + k1 + '</br>'
        + 'Quintil K2: ' + k2 + '</br>'
        + 'Quintil K3: ' + k3 + '</br>'
        + 'Quintil K4: ' + k4 + '</br>'
        + 'Desvio Padrão: ' + desvioPadrao.toFixed(2) + '</br>'
        + 'Coeficiente de Variação: ' + coefVar.toFixed(2) + '%' + '</br>'

        //GRÁFICO
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: dados,
              datasets: [{
                label: 'Fr%',
                data: fr,
                backgroundColor: ['#000080', '#0000CD','#0000FF', '#6495ED', '#4169E1', '#1E90FF', '#00CED1', '#40E0D0', '#48D1CC', '#20B2AA', '#008B8B', '#008080', '#00FA9A', '#00FF7F', '#32CD32', '#3CB371', '#2E8B57', '#006400', '#008000', '#228B22'],
              }]
            },
            options: {
              scales: {
                xAxes: [{
                  display: false,
                  barPercentage: 1.25,
                  ticks: {
                      max: 3,
                  }
               }, {
                  display: true,
                  ticks: {
                      autoSkip: false,
                      max: 4,
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero:true
                  }
                }]
              }
            }
          });

    }
   
}

//Chamada da função no botão inserir
inserir.addEventListener('click', coletaDados)

//Ordenador da tabela
function moveDown (elem){

    let dados = []
    let fi = []
    let fr = []
    let fac = []
    let facP = []
    let numLinhas = document.getElementsByTagName('tr')

    for (let i = 0; i < numLinhas.length - 1; i++){
        dados.push(document.querySelector('.dado').innerText)
        fi.push(document.querySelector('.fi').innerText)
        
        let rDado = document.querySelector('.dado')
        rDado.classList.remove('dado')
        let rFi = document.querySelector('.fi')
        rFi.classList.remove('fi')

    }

    for(let i = 0; i < fi.length; i++){
    fi[i] = parseInt(fi[i])
    fr.push(fi[i])
    fac.push(fi[i])
    facP.push(fi[i])
    }

    console.log(dados)
    console.log(fi)

    tabela.innerHTML = ''
    mtc.innerHTML = ''
    ctx.innerHTML = ''

    function changePosition(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
    };

    dados = changePosition(dados, elem , elem + 1)
    fi = changePosition(fi, elem , elem + 1)
    fr = changePosition(fr, elem , elem + 1)
    fac = changePosition(fac, elem , elem + 1)
    facP = changePosition(facP, elem , elem + 1)

    console.log(dados)

    function criarElemento (elemento){
        return document.createElement(elemento)
    }


    let thead = criarElemento('thead')
    let tbody = criarElemento('tbody')

    let indicesTabela = [nomeVariavel.value, 'Frequência','Frequência (%)','Frequência Aculmulada','FAC%']


    tabela.appendChild(thead)
    tabela.appendChild(tbody)

    let linhaHead = criarElemento('tr')

    thead.appendChild(linhaHead)

    let tituloTab = criarElemento('caption')
        tituloTab.textContent = 'Váriavel Qualitativa Ordinal'
        tituloTab.style.fontWeight = 700
        tabela.appendChild(tituloTab)

        for (let i = 0; i < indicesTabela.length; i++){
            let th = criarElemento('th')
            th.textContent = indicesTabela[i]
            linhaHead.appendChild(th)
        }


        //-----------CALCULOS-----------

        let total = 0
        total = fi.reduce((total, currentElement) => total + currentElement) 

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


        // //Calculo da média######
        let soma = 0
        let media = 0
        soma = dadosSeparados.reduce((t, n) => n+++t , 0) // Soma do vetor dadosSeparados para calcular a média dos dados inseridos
        media = soma/dadosSeparados.length

        //Calculo##########
        
        //Acha a frequência de um número no Array
        function calcularFreq(numero, dadosSeparados){
            let num_vezes=0
            for (let pos in dadosSeparados) {
                if (dadosSeparados[pos]==numero) {
                    num_vezes++
                }
            }
            return num_vezes
        }

        //Descobre a posição do maior elemento
        function obterPosMaior(dadosSeparados){
            let posMaior=0
            let numMaior=dadosSeparados[0]
            for (var pos in dadosSeparados){
                if (dadosSeparados[pos]>numMaior) {
                    numMaior=dadosSeparados[pos]
                    posMaior=pos
                }
            }
            return posMaior
        }

        //Função para calcular a MODA
        function obterModa(dadosSeparados){
            let freq=new Array(dadosSeparados.length)
            for (let pos in dadosSeparados){
                let numero=dadosSeparados[pos]
                freq[pos]=calcularFreq(numero, dadosSeparados)
            }
            let posModa=obterPosMaior(freq)
            return dadosSeparados[posModa]
        }

        let vetModa = dadosSeparados
        let moda = obterModa(vetModa)

        //Calculo da Mediana####
        if(dadosSeparados.length % 2 == 0){
            let pos1 = dadosSeparados.length/2
            let pos2 = pos1 - 1
            let elem1 = dadosSeparados[pos1]
            let elem2 = dadosSeparados[pos2]
            var mediana = (parseInt(elem1)+parseInt(elem2))/2
        }
        else{
            let posCentro = (dadosSeparados.length - 1)/2
            var mediana = dadosSeparados[posCentro]
        }

        // Exibição dos dados na nova tabela
        for(let i = 0; i < dados.length; i++){

            let linha = criarElemento('tr')

            let posicao = dados.indexOf(dados[i])


            let seta = criarElemento('span')
            let tdDados = criarElemento('td')
            let pDados = criarElemento('p')
            pDados.textContent = dados[i]
            let tdFi = criarElemento('td')
            let pFi = criarElemento('p')
            pFi.textContent = fi[i]
            let tdFr = criarElemento('td')
            let pFr = criarElemento('p')
            pFr.textContent = fr[i].toFixed(2) + '%'
            let tdFac = criarElemento('td')
            let pFac = criarElemento('p')
            pFac.textContent = fac[i]
            let tdFacP = criarElemento('td')
            let pFacP = criarElemento('p')
            pFacP.textContent = facP[i].toFixed(2)+'%'

            linha.appendChild(tdDados)
            linha.appendChild(tdFi)
            linha.appendChild(tdFr)
            linha.appendChild(tdFac)
            linha.appendChild(tdFacP)

            tdDados.appendChild(pDados)
            tdFi.appendChild(pFi)
            tdFr.appendChild(pFr)
            tdFac.appendChild(pFac)
            tdFacP.appendChild(pFacP)
            
            tdDados.appendChild(seta)

            seta.classList.add('seta')
            seta.setAttribute('onclick', 'moveDown('+ posicao +')')

            pDados.classList.add('dado')
            pFi.classList.add('fi')
            pFr.classList.add('fr')
            pFac.classList.add('fac')
            pFacP.classList.add('facP')
            
            tbody.appendChild(linha)
            linha.classList.add('linha-tabela')

             //GRÁFICO
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: dados,
                datasets: [{
                data: fr,
                backgroundColor: ['#000080', '#0000CD','#0000FF', '#6495ED', '#4169E1', '#1E90FF', '#00CED1', '#40E0D0', '#48D1CC', '#20B2AA', '#008B8B', '#008080', '#00FA9A', '#00FF7F', '#32CD32', '#3CB371', '#2E8B57', '#006400', '#008000', '#228B22'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "FR%",
                    fontSize: 45,
                }
            }
        });


        }
        
                //Exibição da Média, Moda e Mediana#####
    mtc.innerHTML += 'Média: ' + media.toFixed(2) + '</br>' + 'Moda: ' + moda + '</br>' + 'Mediana: ' + mediana

} 