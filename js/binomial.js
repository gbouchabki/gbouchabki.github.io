const amostra = document.getElementById("n")
const sucesso = document.getElementById("p")
const fracasso = document.getElementById("q")
const evento = document.getElementById("k")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function binomial(){
    let n = parseFloat(amostra.value)
    let k = parseFloat(evento.value)
    let p = parseFloat(sucesso.value)
    let q = parseFloat(fracasso.value)

    //Análise Combinatória
    function fatorial(x){
        let fat = 1
        for(let i=x; i>1; i--){
           fat *= i
        }
        return fat
    }    
    
    let fatN = fatorial(n)
    let fatK = fatorial(k)
    let fatNK = fatorial(n - k)
    let AC = fatN / (fatK * fatNK)
    
    console.log(AC, "Resultado da análise combinatória")
    
    function criarElemento(elemento) {
        return document.createElement(elemento);
    }
    //Criar Tabela
    let tabela = criarElemento('table')
    let thead = criarElemento("thead")
    let tbody = criarElemento("tbody")

    resultado.appendChild(tabela);
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    let th = criarElemento('th')
    th.textContent = 'Resultado'
    thead.appendChild(th)

    //Distribuição Binomial
    let DB = 0
    DB = (AC)*(p**k)*(q**(n-k)) * 100
    // resultado.innerHTML = DB.toFixed(2) + "%"
    let td = criarElemento('td')
    td.textContent = DB.toFixed(2) + "%"
    tbody.appendChild(td)



       
}

calcular.addEventListener("click", binomial)