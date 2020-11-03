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
    /*
    function fatorial(x){
        let fat = 1
        for(let i=x; i>1; i--){
            fat = fat * i
        }
        return fat
    }
    

    //Análise Combinatória
    let fatN = fatorial(n)
    let fatK = fatorial(k)
    let fatNK = fatorial(n - k)
    let res = fatN / (fatK * fatNK)
    */

    //Distribuição Binomial
    let DB = 0
    DB = (n/k)*(p**k)*(q**(n-k)) * 100


    resultado.innerHTML = DB.toFixed(2) + "%"
}

calcular.addEventListener("click", binomial)