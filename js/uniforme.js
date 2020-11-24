const ptMin = document.getElementById("ponto-minimo")
const ptMax = document.getElementById("ponto-maximo")
const valor = document.getElementById("valor")
const valor2 = document.getElementById("valor2")

//Intervalo
const intervalo = document.getElementById('intervalo')
const maior = document.getElementById('maior')
const entre = document.getElementById('entre')
const menor = document.getElementById('menor')

const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function uniforme(){
    let pmin = parseFloat(ptMin.value)
    let pmax = parseFloat(ptMax.value)
    let v = parseFloat(valor.value)
    let v2 = parseFloat(valor2.value)
    
    //Calculo da média
    let media = 0
    media = (pmin+pmax)/2
    console.log(media)

    //Calculo Desvio Padrão
    let dp = 0
    dp = Math.sqrt((pmax-pmin)*(pmax-pmin)/12)
    console.log(dp)

    //Calculo Coeficiente Padrão
    let cv = 0
    cv = (dp/media)*100
    console.log(cv)

    //Criar Tabela
    let tabela = criarElemento('table')
    let thead = criarElemento("thead")
    let tbody = criarElemento("tbody")

    resultado.appendChild(tabela);
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    
    let cabecalho = ['Média Aritmética', 'Desvio Padrão', 'Coeficiente de variação', 'Probabilidade']

    for (let i = 0; i < cabecalho.length; i++) {
        let th = criarElemento('th')
        th.textContent = cabecalho[i]
        thead.appendChild(th)        
    }


    if(intervalo.selectedIndex == 1){ //Maior que**************************
        let int = pmax - v
        console.log(int)
        let prob = 1/(pmax - pmin)*int*100
        console.log(prob)

        //Exibição dos resultados
        // resultado.innerHTML += "Média aritmética é: " + media.toFixed(2) + "</br>"
        // resultado.innerHTML += "Desvio Padrão é: " + dp.toFixed(2) + "</br>"
        // resultado.innerHTML += "Coeficiente de variação é: " + cv.toFixed(2) + "%"  + "</br>"
        // resultado.innerHTML += "Probabilidade de: " + prob.toFixed(2) + "%"  + "</br>"

        let tdMedia = criarElemento('td')
        tdMedia.textContent = media.toFixed(2)
        tbody.appendChild(tdMedia)

        let tdDp = criarElemento('td')
        tdDp.textContent = dp.toFixed(2)
        tbody.appendChild(tdDp)

        let tdCv = criarElemento('td')
        tdCv.textContent = cv.toFixed(2) + "%" 
        tbody.appendChild(tdDv)

        let tdProb = criarElemento('td')
        tdProb.textContent =  prob.toFixed(2) + "%" 
        tbody.appendChild(tdProb)
    }
    else if(intervalo.selectedIndex == 2){ //Menor que*******************
        let int = v - pmin
        console.log(int)
        let prob = 1/(pmax - pmin)*int*100
        console.log(prob)

        //Exibição dos resultados
        // resultado.innerHTML += "Média aritmética é: " + media.toFixed(2) + "</br>"
        // resultado.innerHTML += "Desvio Padrão é: " + dp.toFixed(2) + "</br>"
        // resultado.innerHTML += "Coeficiente de variação é: " + cv.toFixed(2) + "%"  + "</br>"
        // resultado.innerHTML += "Probabilidade de: " + prob.toFixed(2) + "%"  + "</br>"

        let tdMedia = criarElemento('td')
        tdMedia.textContent = media.toFixed(2)
        tbody.appendChild(tdMedia)

        let tdDp = criarElemento('td')
        tdDp.textContent = dp.toFixed(2)
        tbody.appendChild(tdDp)

        let tdCv = criarElemento('td')
        tdCv.textContent = cv.toFixed(2) + "%" 
        tbody.appendChild(tdDv)

        let tdProb = criarElemento('td')
        tdProb.textContent =  prob.toFixed(2) + "%" 
        tbody.appendChild(tdProb)
    }
    else if(intervalo.selectedIndex == 3){ //Entre***********************
        let int = v2 - v
        console.log(int)
        let prob = 1/(pmax - pmin)*int*100
        console.log(prob)

        //Exibição dos resultados
        // resultado.innerHTML += "Média aritmética é: " + media.toFixed(2) + "</br>"
        // resultado.innerHTML += "Desvio Padrão é: " + dp.toFixed(2) + "</br>"
        // resultado.innerHTML += "Coeficiente de variação é: " + cv.toFixed(2) + "%"  + "</br>"
        // resultado.innerHTML += "Probabilidade de: " + prob.toFixed(2) + "%"  + "</br>"

        let tdMedia = criarElemento('td')
        tdMedia.textContent = media.toFixed(2)
        tbody.appendChild(tdMedia)

        let tdDp = criarElemento('td')
        tdDp.textContent = dp.toFixed(2)
        tbody.appendChild(tdDp)

        let tdCv = criarElemento('td')
        tdCv.textContent = cv.toFixed(2) + "%" 
        tbody.appendChild(tdDv)

        let tdProb = criarElemento('td')
        tdProb.textContent =  prob.toFixed(2) + "%" 
        tbody.appendChild(tdProb)
    }
}

calcular.addEventListener("click", uniforme)