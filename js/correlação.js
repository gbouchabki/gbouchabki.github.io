const valorX = document.getElementById("valor-x")
const valorY = document.getElementById("valor-y")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

const ctx = document.getElementsByClassName("line-chart")


let x = []
let y = []

function correlacao(){
    //Entrada de dados, convertendo em Array
    x = valorX.value.split(";")
    y = valorY.value.split(";")

    let somaX = 0
    let somaY = 0
    let xQuad = []
    let yQuad = []
    let xy = []
    let somaxy = 0
    let xQuadSoma = 0
    let yQuadSoma = 0
    let n = 0

    //Conversão dos Arrays X, Y e XY de String para Interger
    x = x.map(Number)
    y = y.map(Number)
    xy = xy.map(Number)

    xQuad[0]
    yQuad[0]

    //Calcular o Array X ao Quadrado
    //Calcular o Array Y ao Quadrado
    //Calcular o Array X.Y
    for(let i = 0; i < x.length; i++){
        xQuad[i] = x[i]*x[i]
        yQuad[i] = y[i]*y[i]
        xy[i] = x[i]*y[i]
    }

    //Soma dos Arrays X
    for(let i = 0; i < x.length; i++ ){
        somaX += x[i];
    }
    //Soma do Array Y
    for(let i = 0; i < y.length; i++ ){
        somaY += y[i];
    }
    //Soma do Array xQuad
    for(let i = 0; i < xQuad.length; i++ ){
        xQuadSoma += xQuad[i];
    }
    //Soma do Array yQuad
    for(let i = 0; i < yQuad.length; i++ ){
        yQuadSoma += yQuad[i];
    }
    //Soma do Array XY
    for(let i = 0; i < xy.length; i++ ){
        somaxy += xy[i];
    }

    n = x.length
    

    console.log(x, "Vetor X")
    console.log(y, "Vetor Y")

    console.log(somaX, "Soma de X")
    console.log(somaY, "Soma de Y")

    console.log(xQuad, "x Quadrado")
    console.log(yQuad, "Y quadrado")

    console.log(xy, "X vezes Y")

    console.log(xQuadSoma, "Soma X Quadrado")
    console.log(yQuadSoma, "Soma Y Quadrado")
    console.log(somaxy, "Soma XY")
    console.log(n, "Quantidade de elementos do vetor X")

    //Coeficiente de correlação

    let cima = 0
    let baixo = 0
    let baixo1 = 0
    let baixo2 = 0
    let r = 0
    let cc = 0

    cima = n*somaxy - (somaX)*(somaY)
    baixo1 = (n*xQuadSoma - (somaX)*(somaX))
    baixo2 = (n*yQuadSoma - (somaY)*(somaY))

    baixo = Math.sqrt(baixo1) * Math.sqrt(baixo2)


    r = cima/baixo

    cc = r*100

    //Coeficiente A
    let a = 0
    let cimaA = 0
    let baixoA = 0
    cimaA = n*somaxy - somaX*somaY
    baixoA = n*xQuadSoma - (somaX)*(somaX)

    a = cimaA/baixoA

    //Coeficiente B
    let b = 0
    let novoY = 0
    let novoX = 0
    novoY = somaY/n
    novoX = somaX/n
    
    b = novoY - a*novoX


    console.log(cima, "Parte de cima da fração")
    console.log(Math.sqrt(baixo1), "Parte de baixo1 da fração")
    console.log(Math.sqrt(baixo2), "Parte de baixo2 da fração")
    console.log(baixo, "Parte de baixo da fração")
    console.log(r, "Resultado")
    console.log(cc.toFixed(2), "Coeficiente de Correlação")
    console.log(cimaA, "Cima A")
    console.log(baixoA, "Baixo A")
    console.log(a.toFixed(2), "Coeficiente A")
    console.log(b.toFixed(2), "Coeficiente B")
    

    resultado.innerHTML += "Coeficiente de Correlação: " + cc.toFixed(2) + "%" + "</br>"
    resultado.innerHTML += "Fórmula: Y=" + a.toFixed(2) + ".X + " + b.toFixed(2)



    //GRÁFICO
    new Chart(ctx, {
        type: "line",
        label: " ",
        data: {
          labels: x,
          datasets: [{
              label: "Dispersão",
              data: y,
              borderWidth: 3,
              backgroundColor: "#ADD8E6",
              borderColor: "#6495ED",
            }],
        },
        options: {
            maintainAspectRatio: true,
            title: {
              display: true,
              fontSize: 45,
            },
          },
      });
      
}

calcular.addEventListener("click", correlacao)
