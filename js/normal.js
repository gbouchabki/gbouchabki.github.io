const media = document.getElementById("media")
const desvioPadrao = document.getElementById("desvio-padrao")
const valor = document.getElementById("valor")
const valor2 = document.getElementById("valor2")

const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")
const intervalo = document.getElementById("intervalo")

function normal(){
    let z = 0
    let z2 = 0
    let m = parseFloat(media.value)
    let dp = parseFloat(desvioPadrao.value)
    let v = parseFloat(valor.value)
    let v2 = parseFloat(valor2.value)

    console.log(v)
    console.log(v2)

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

    if(intervalo.selectedIndex == 1){ //Maior que *************************************
        z = (v - m)/dp
        z = z.toFixed(2)
    }
    else if(intervalo.selectedIndex == 2) { //Menor que *******************************
        z = (v - m)/dp
        z = z.toFixed(2)

        console.log(z)
    }
    else if(intervalo.selectedIndex == 3){ //Entre ************************************
        if(v == m && v2 > m){ //Se valor1 for igual a média e o valor2 maior que a média
            
            z = (v2 - m)/dp
            z = z.toFixed(2)

            console.log("Um")
            console.log(z)
        }
        else if(v < m && v2 == m){ //Se o valor1 for menor que a média e o valor2 igual a média
            z = (v - m)/dp
            z = z.toFixed(2)
        }
        else{ //Se a média fica entre o valor1 e o valor2
            z = (v - m)/dp
            z = z.toFixed(2)

            z2 = (v2 - m)/dp
            z2 = z2.toFixed(2)

            console.log("Três")
        }
        
    }
    
    
    //console.log(z2)
    z = parseFloat(z).toFixed(2)
    let escoreZ = 0

    if(z == 0.00 & z < 0.01 || z == -0.00 & z > -0.01) escoreZ = 0.0000
    else if(z == 0.01 & z < 0.02 || z == -0.01 & z > -0.02) escoreZ = 0.0040
    else if(z == 0.02 & z < 0.03 || z == -0.02 & z > -0.03) escoreZ = 0.0080
    else if(z == 0.03 & z < 0.04 || z == -0.03 & z > -0.04) escoreZ = 0.0120
    else if(z == 0.04 & z < 0.05 || z == -0.04 & z > -0.05) escoreZ = 0.0160
    else if(z == 0.05 & z < 0.06 || z == -0.05 & z > -0.06) escoreZ = 0.0199
    else if(z == 0.06 & z < 0.07 || z == -0.06 & z > -0.07) escoreZ = 0.0239
    else if(z == 0.07 & z < 0.08 || z == -0.07 & z > -0.08) escoreZ = 0.0279
    else if(z == 0.08 & z < 0.09 || z == -0.08 & z > -0.09) escoreZ = 0.0319
    else if(z == 0.09 & z < 0.10 || z == -0.09 & z > -0.10) escoreZ = 0.0359

    else if(z == 0.10 & z < 0.11 || z == -0.10 & z > -0.11) escoreZ = 0.0298
    else if(z == 0.11 & z < 0.12 || z == -0.11 & z > -0.12) escoreZ = 0.0438
    else if(z == 0.12 & z < 0.13 || z == -0.12 & z > -0.13) escoreZ = 0.0478
    else if(z == 0.13 & z < 0.14 || z == -0.13 & z > -0.14) escoreZ = 0.0517
    else if(z == 0.14 & z < 0.15 || z == -0.14 & z > -0.15) escoreZ = 0.0557
    else if(z == 0.15 & z < 0.16 || z == -0.15 & z > -0.16) escoreZ = 0.0596
    else if(z == 0.16 & z < 0.17 || z == -0.16 & z > -0.17) escoreZ = 0.0636
    else if(z == 0.17 & z < 0.18 || z == -0.17 & z > -0.18) escoreZ = 0.0675
    else if(z == 0.18 & z < 0.19 || z == -0.18 & z > -0.19) escoreZ = 0.0714
    else if(z == 0.19 & z < 0.20 || z == -0.19 & z > -0.20) escoreZ = 0.0753

    else if(z == 0.20 & z < 0.21 || z == -0.20 & z > -0.21) escoreZ = 0.0793
    else if(z == 0.21 & z < 0.22 || z == -0.21 & z > -0.22) escoreZ = 0.0832
    else if(z == 0.22 & z < 0.23 || z == -0.22 & z > -0.23) escoreZ = 0.0871
    else if(z == 0.23 & z < 0.24 || z == -0.23 & z > -0.24) escoreZ = 0.0910
    else if(z == 0.24 & z < 0.25 || z == -0.24 & z > -0.25) escoreZ = 0.0948
    else if(z == 0.25 & z < 0.26 || z == -0.25 & z > -0.26) escoreZ = 0.0987
    else if(z == 0.26 & z < 0.27 || z == -0.26 & z > -0.27) escoreZ = 0.1026
    else if(z == 0.27 & z < 0.28 || z == -0.27 & z > -0.28) escoreZ = 0.1064
    else if(z == 0.28 & z < 0.29 || z == -0.28 & z > -0.29) escoreZ = 0.1103
    else if(z == 0.29 & z < 0.30 || z == -0.29 & z > -0.30) escoreZ = 0.1141

    else if(z == 0.30 & z < 0.31 || z == -0.30 & z > -0.31) escoreZ = 0.1179
    else if(z == 0.31 & z < 0.32 || z == -0.31 & z > -0.32) escoreZ = 0.1217
    else if(z == 0.32 & z < 0.33 || z == -0.32 & z > -0.33) escoreZ = 0.1255
    else if(z == 0.33 & z < 0.34 || z == -0.33 & z > -0.34) escoreZ = 0.1293
    else if(z == 0.34 & z < 0.35 || z == -0.34 & z > -0.35) escoreZ = 0.1331
    else if(z == 0.35 & z < 0.36 || z == -0.35 & z > -0.36) escoreZ = 0.1368
    else if(z == 0.36 & z < 0.37 || z == -0.36 & z > -0.37) escoreZ = 0.1406
    else if(z == 0.37 & z < 0.38 || z == -0.37 & z > -0.38) escoreZ = 0.1443
    else if(z == 0.38 & z < 0.39 || z == -0.38 & z > -0.39) escoreZ = 0.1480
    else if(z == 0.39 & z < 0.40 || z == -0.39 & z > -0.40) escoreZ = 0.1517

    else if(z == 0.40 & z < 0.41 || z == -0.40 & z > -0.41) escoreZ = 0.1556
    else if(z == 0.41 & z < 0.42 || z == -0.41 & z > -0.42) escoreZ = 0.1591
    else if(z == 0.42 & z < 0.43 || z == -0.42 & z > -0.43) escoreZ = 0.1628
    else if(z == 0.43 & z < 0.44 || z == -0.43 & z > -0.44) escoreZ = 0.1664
    else if(z == 0.44 & z < 0.45 || z == -0.44 & z > -0.45) escoreZ = 0.1700
    else if(z == 0.45 & z < 0.46 || z == -0.45 & z > -0.46) escoreZ = 0.1736
    else if(z == 0.46 & z < 0.47 || z == -0.46 & z > -0.47) escoreZ = 0.1772
    else if(z == 0.47 & z < 0.48 || z == -0.47 & z > -0.48) escoreZ = 0.1808
    else if(z == 0.48 & z < 0.49 || z == -0.48 & z > -0.49) escoreZ = 0.1844
    else if(z == 0.49 & z < 0.50 || z == -0.49 & z > -0.50) escoreZ = 0.1879

    else if(z == 0.50 & z < 0.51 || z == -0.50 & z > -0.51) escoreZ = 0.1915
    else if(z == 0.51 & z < 0.52 || z == -0.51 & z > -0.52) escoreZ = 0.1950
    else if(z == 0.52 & z < 0.53 || z == -0.52 & z > -0.53) escoreZ = 0.1985
    else if(z == 0.53 & z < 0.54 || z == -0.53 & z > -0.54) escoreZ = 0.2019
    else if(z == 0.54 & z < 0.55 || z == -0.54 & z > -0.55) escoreZ = 0.2054
    else if(z == 0.55 & z < 0.56 || z == -0.55 & z > -0.56) escoreZ = 0.2088
    else if(z == 0.56 & z < 0.57 || z == -0.56 & z > -0.57) escoreZ = 0.2123
    else if(z == 0.57 & z < 0.58 || z == -0.57 & z > -0.58) escoreZ = 0.2157
    else if(z == 0.58 & z < 0.59 || z == -0.58 & z > -0.59) escoreZ = 0.2190
    else if(z == 0.59 & z < 0.60 || z == -0.59 & z > -0.60) escoreZ = 0.2224

    else if(z == 0.60 & z < 0.61 || z == -0.60 & z > -0.61) escoreZ = 0.2267
    else if(z == 0.61 & z < 0.62 || z == -0.61 & z > -0.62) escoreZ = 0.2291
    else if(z == 0.62 & z < 0.63 || z == -0.62 & z > -0.63) escoreZ = 0.2324
    else if(z == 0.63 & z < 0.64 || z == -0.63 & z > -0.64) escoreZ = 0.2357
    else if(z == 0.64 & z < 0.65 || z == -0.64 & z > -0.65) escoreZ = 0.2389
    else if(z == 0.65 & z < 0.66 || z == -0.65 & z > -0.66) escoreZ = 0.2422
    else if(z == 0.66 & z < 0.67 || z == -0.66 & z > -0.67) escoreZ = 0.2454
    else if(z == 0.67 & z < 0.68 || z == -0.67 & z > -0.68) escoreZ = 0.2486
    else if(z == 0.68 & z < 0.69 || z == -0.68 & z > -0.69) escoreZ = 0.2517
    else if(z == 0.69 & z < 0.70 || z == -0.69 & z > -0.70) escoreZ = 0.2549

    else if(z == 0.70 & z < 0.71 || z == -0.70 & z > -0.71) escoreZ = 0.2580
    else if(z == 0.71 & z < 0.72 || z == -0.71 & z > -0.72) escoreZ = 0.2611
    else if(z == 0.72 & z < 0.73 || z == -0.72 & z > -0.73) escoreZ = 0.2642
    else if(z == 0.73 & z < 0.74 || z == -0.73 & z > -0.74) escoreZ = 0.2673
    else if(z == 0.74 & z < 0.75 || z == -0.74 & z > -0.75) escoreZ = 0.2703
    else if(z == 0.75 & z < 0.76 || z == -0.75 & z > -0.76) escoreZ = 0.2734
    else if(z == 0.76 & z < 0.77 || z == -0.76 & z > -0.77) escoreZ = 0.2764
    else if(z == 0.77 & z < 0.78 || z == -0.77 & z > -0.78) escoreZ = 0.2794
    else if(z == 0.78 & z < 0.79 || z == -0.78 & z > -0.79) escoreZ = 0.2823
    else if(z == 0.79 & z < 0.80 || z == -0.79 & z > -0.80) escoreZ = 0.2852

    else if(z == 0.80 & z < 0.81 || z == -0.80 & z > -0.81) escoreZ = 0.2881
    else if(z == 0.81 & z < 0.82 || z == -0.81 & z > -0.82) escoreZ = 0.2910
    else if(z == 0.82 & z < 0.83 || z == -0.82 & z > -0.83) escoreZ = 0.2939
    else if(z == 0.83 & z < 0.84 || z == -0.83 & z > -0.84) escoreZ = 0.2967
    else if(z == 0.84 & z < 0.85 || z == -0.84 & z > -0.85) escoreZ = 0.2995
    else if(z == 0.85 & z < 0.86 || z == -0.85 & z > -0.86) escoreZ = 0.3023
    else if(z == 0.86 & z < 0.87 || z == -0.86 & z > -0.87) escoreZ = 0.3051
    else if(z == 0.87 & z < 0.88 || z == -0.87 & z > -0.88) escoreZ = 0.3078
    else if(z == 0.88 & z < 0.89 || z == -0.88 & z > -0.89) escoreZ = 0.3106
    else if(z == 0.89 & z < 0.90 || z == -0.89 & z > -0.90) escoreZ = 0.3133

    else if(z == 0.90 & z < 0.91 || z == -0.90 & z > -0.91) escoreZ = 0.3159
    else if(z == 0.91 & z < 0.92 || z == -0.91 & z > -0.92) escoreZ = 0.3186
    else if(z == 0.92 & z < 0.93 || z == -0.92 & z > -0.93) escoreZ = 0.3212
    else if(z == 0.93 & z < 0.94 || z == -0.93 & z > -0.94) escoreZ = 0.3238
    else if(z == 0.94 & z < 0.95 || z == -0.94 & z > -0.95) escoreZ = 0.3264
    else if(z == 0.95 & z < 0.96 || z == -0.95 & z > -0.96) escoreZ = 0.3289
    else if(z == 0.96 & z < 0.97 || z == -0.96 & z > -0.97) escoreZ = 0.3315
    else if(z == 0.97 & z < 0.98 || z == -0.97 & z > -0.98) escoreZ = 0.3340
    else if(z == 0.98 & z < 0.99 || z == -0.98 & z > -0.99) escoreZ = 0.3365
    else if(z == 0.99 & z < 1.00 || z == -0.99 & z > -1.00) escoreZ = 0.3389

    else if(z == 1.00 & z < 1.01 || z == -1.00 & z > -1.01) escoreZ = 0.3413
    else if(z == 1.01 & z < 1.02 || z == -1.01 & z > -1.02) escoreZ = 0.3438
    else if(z == 1.02 & z < 1.03 || z == -1.02 & z > -1.03) escoreZ = 0.3461
    else if(z == 1.03 & z < 1.04 || z == -1.03 & z > -1.04) escoreZ = 0.3485
    else if(z == 1.04 & z < 1.05 || z == -1.04 & z > -1.05) escoreZ = 0.3508
    else if(z == 1.05 & z < 1.06 || z == -1.05 & z > -1.06) escoreZ = 0.3531
    else if(z == 1.06 & z < 1.07 || z == -1.06 & z > -1.07) escoreZ = 0.3554
    else if(z == 1.07 & z < 1.08 || z == -1.07 & z > -1.08) escoreZ = 0.3577
    else if(z == 1.08 & z < 1.09 || z == -1.08 & z > -1.09) escoreZ = 0.3599
    else if(z == 1.09 & z < 1.10 || z == -1.09 & z > -1.10) escoreZ = 0.3621

    else if(z == 1.10 & z < 1.11 || z == -1.10 & z > -1.11) escoreZ = 0.3643
    else if(z == 1.11 & z < 1.12 || z == -1.11 & z > -1.12) escoreZ = 0.3665
    else if(z == 1.12 & z < 1.13 || z == -1.12 & z > -1.13) escoreZ = 0.3686
    else if(z == 1.13 & z < 1.14 || z == -1.13 & z > -1.14) escoreZ = 0.3708
    else if(z == 1.14 & z < 1.15 || z == -1.14 & z > -1.15) escoreZ = 0.3729
    else if(z == 1.15 & z < 1.16 || z == -1.15 & z > -1.16) escoreZ = 0.3749
    else if(z == 1.16 & z < 1.17 || z == -1.16 & z > -1.17) escoreZ = 0.3770
    else if(z == 1.17 & z < 1.18 || z == -1.17 & z > -1.18) escoreZ = 0.3790
    else if(z == 1.18 & z < 1.19 || z == -1.18 & z > -1.19) escoreZ = 0.3810
    else if(z == 1.19 & z < 1.20 || z == -1.19 & z > -1.20) escoreZ = 0.3830

    else if(z == 1.20 & z < 1.21 || z == -1.20 & z > -1.21) escoreZ = 0.3849
    else if(z == 1.21 & z < 1.22 || z == -1.21 & z > -1.22) escoreZ = 0.3869
    else if(z == 1.22 & z < 1.23 || z == -1.22 & z > -1.23) escoreZ = 0.3888
    else if(z == 1.23 & z < 1.24 || z == -1.23 & z > -1.24) escoreZ = 0.3907
    else if(z == 1.24 & z < 1.25 || z == -1.24 & z > -1.25) escoreZ = 0.3925
    else if(z == 1.25 & z < 1.26 || z == -1.25 & z > -1.26) escoreZ = 0.3944
    else if(z == 1.26 & z < 1.27 || z == -1.26 & z > -1.27) escoreZ = 0.3962
    else if(z == 1.27 & z < 1.28 || z == -1.27 & z > -1.28) escoreZ = 0.3980
    else if(z == 1.28 & z < 1.29 || z == -1.28 & z > -1.29) escoreZ = 0.3997
    else if(z == 1.29 & z < 1.30 || z == -1.29 & z > -1.30) escoreZ = 0.4015

    else if(z == 1.30 & z < 1.31 || z == -1.30 & z > -1.31) escoreZ = 0.4032
    else if(z == 1.31 & z < 1.32 || z == -1.31 & z > -1.32) escoreZ = 0.4049
    else if(z == 1.32 & z < 1.33 || z == -1.32 & z > -1.33) escoreZ = 0.4066
    else if(z == 1.33 & z < 1.34 || z == -1.33 & z > -1.34) escoreZ = 0.4082
    else if(z == 1.34 & z < 1.35 || z == -1.34 & z > -1.35) escoreZ = 0.4099
    else if(z == 1.35 & z < 1.36 || z == -1.35 & z > -1.36) escoreZ = 0.4115
    else if(z == 1.36 & z < 1.37 || z == -1.36 & z > -1.37) escoreZ = 0.4131
    else if(z == 1.37 & z < 1.38 || z == -1.37 & z > -1.38) escoreZ = 0.4147
    else if(z == 1.38 & z < 1.39 || z == -1.38 & z > -1.39) escoreZ = 0.4162
    else if(z == 1.39 & z < 1.40 || z == -1.39 & z > -1.40) escoreZ = 0.4177

    else if(z == 1.40 & z < 1.41 || z == -1.40 & z > -1.41) escoreZ = 0.4192
    else if(z == 1.41 & z < 1.42 || z == -1.41 & z > -1.42) escoreZ = 0.4207
    else if(z == 1.42 & z < 1.43 || z == -1.42 & z > -1.43) escoreZ = 0.4222
    else if(z == 1.43 & z < 1.44 || z == -1.43 & z > -1.44) escoreZ = 0.4236
    else if(z == 1.44 & z < 1.45 || z == -1.44 & z > -1.45) escoreZ = 0.4251
    else if(z == 1.45 & z < 1.46 || z == -1.45 & z > -1.46) escoreZ = 0.4265
    else if(z == 1.46 & z < 1.47 || z == -1.46 & z > -1.47) escoreZ = 0.4279
    else if(z == 1.47 & z < 1.48 || z == -1.47 & z > -1.48) escoreZ = 0.4292
    else if(z == 1.48 & z < 1.49 || z == -1.48 & z > -1.49) escoreZ = 0.4306
    else if(z == 1.49 & z < 1.50 || z == -1.49 & z > -1.50) escoreZ = 0.4319

    else if(z == 1.50 & z < 1.51 || z == -1.50 & z > -1.51) escoreZ = 0.4332
    else if(z == 1.51 & z < 1.52 || z == -1.51 & z > -1.52) escoreZ = 0.4345
    else if(z == 1.52 & z < 1.53 || z == -1.52 & z > -1.53) escoreZ = 0.4357
    else if(z == 1.53 & z < 1.54 || z == -1.53 & z > -1.54) escoreZ = 0.4370
    else if(z == 1.54 & z < 1.55 || z == -1.54 & z > -1.55) escoreZ = 0.4382
    else if(z == 1.55 & z < 1.56 || z == -1.55 & z > -1.56) escoreZ = 0.4394
    else if(z == 1.56 & z < 1.57 || z == -1.56 & z > -1.57) escoreZ = 0.4406
    else if(z == 1.57 & z < 1.58 || z == -1.57 & z > -1.58) escoreZ = 0.4418
    else if(z == 1.58 & z < 1.59 || z == -1.58 & z > -1.59) escoreZ = 0.4429
    else if(z == 1.59 & z < 1.60 || z == -1.59 & z > -1.60) escoreZ = 0.4441

    else if(z == 1.60 & z < 1.61 || z == -1.60 & z > -1.61) escoreZ = 0.4452
    else if(z == 1.61 & z < 1.62 || z == -1.61 & z > -1.62) escoreZ = 0.4463
    else if(z == 1.62 & z < 1.63 || z == -1.62 & z > -1.63) escoreZ = 0.4474
    else if(z == 1.63 & z < 1.64 || z == -1.63 & z > -1.64) escoreZ = 0.4484
    else if(z == 1.64 & z < 1.65 || z == -1.64 & z > -1.65) escoreZ = 0.4495
    else if(z == 1.65 & z < 1.66 || z == -1.65 & z > -1.66) escoreZ = 0.4505
    else if(z == 1.66 & z < 1.67 || z == -1.66 & z > -1.67) escoreZ = 0.4515
    else if(z == 1.67 & z < 1.68 || z == -1.67 & z > -1.68) escoreZ = 0.4525
    else if(z == 1.68 & z < 1.69 || z == -1.68 & z > -1.69) escoreZ = 0.4535
    else if(z == 1.69 & z < 1.70 || z == -1.69 & z > -1.70) escoreZ = 0.4545

    else if(z == 1.70 & z < 1.71 || z == -1.70 & z > -1.71) escoreZ = 0.4554
    else if(z == 1.71 & z < 1.72 || z == -1.71 & z > -1.72) escoreZ = 0.4564
    else if(z == 1.72 & z < 1.73 || z == -1.72 & z > -1.73) escoreZ = 0.4573
    else if(z == 1.73 & z < 1.74 || z == -1.73 & z > -1.74) escoreZ = 0.4582
    else if(z == 1.74 & z < 1.75 || z == -1.74 & z > -1.75) escoreZ = 0.4591
    else if(z == 1.75 & z < 1.76 || z == -1.75 & z > -1.76) escoreZ = 0.4599
    else if(z == 1.76 & z < 1.77 || z == -1.76 & z > -1.77) escoreZ = 0.4608
    else if(z == 1.77 & z < 1.78 || z == -1.77 & z > -1.78) escoreZ = 0.4616
    else if(z == 1.78 & z < 1.79 || z == -1.78 & z > -1.79) escoreZ = 0.4625
    else if(z == 1.79 & z < 1.80 || z == -1.79 & z > -1.80) escoreZ = 0.4633

    else if(z == 1.80 & z < 1.81 || z == -1.80 & z > -1.81) escoreZ = 0.4641
    else if(z == 1.81 & z < 1.82 || z == -1.81 & z > -1.82) escoreZ = 0.4649
    else if(z == 1.82 & z < 1.83 || z == -1.82 & z > -1.83) escoreZ = 0.4656
    else if(z == 1.83 & z < 1.84 || z == -1.83 & z > -1.84) escoreZ = 0.4664
    else if(z == 1.84 & z < 1.85 || z == -1.84 & z > -1.85) escoreZ = 0.4671
    else if(z == 1.85 & z < 1.86 || z == -1.85 & z > -1.86) escoreZ = 0.4778
    else if(z == 1.86 & z < 1.87 || z == -1.86 & z > -1.87) escoreZ = 0.4686
    else if(z == 1.87 & z < 1.88 || z == -1.87 & z > -1.88) escoreZ = 0.4693
    else if(z == 1.88 & z < 1.89 || z == -1.88 & z > -1.89) escoreZ = 0.4699
    else if(z == 1.89 & z < 1.90 || z == -1.89 & z > -1.90) escoreZ = 0.4706

    else if(z == 1.90 & z < 1.91 || z == -1.90 & z > -1.91) escoreZ = 0.4713
    else if(z == 1.91 & z < 1.92 || z == -1.91 & z > -1.92) escoreZ = 0.4719
    else if(z == 1.92 & z < 1.93 || z == -1.92 & z > -1.93) escoreZ = 0.4726
    else if(z == 1.93 & z < 1.94 || z == -1.93 & z > -1.94) escoreZ = 0.4732
    else if(z == 1.94 & z < 1.95 || z == -1.94 & z > -1.95) escoreZ = 0.4738
    else if(z == 1.95 & z < 1.96 || z == -1.95 & z > -1.96) escoreZ = 0.4744
    else if(z == 1.96 & z < 1.97 || z == -1.96 & z > -1.97) escoreZ = 0.4750
    else if(z == 1.97 & z < 1.98 || z == -1.97 & z > -1.98) escoreZ = 0.4756
    else if(z == 1.98 & z < 1.99 || z == -1.98 & z > -1.99) escoreZ = 0.4761
    else if(z == 1.99 & z < 2.00 || z == -1.98 & z > -1.99) escoreZ = 0.4767

    else if(z == 2.00 & z < 2.01 || z == -2.00 & z > -2.01) escoreZ = 0.4772
    else if(z == 2.01 & z < 2.02 || z == -2.01 & z > -2.02) escoreZ = 0.4778
    else if(z == 2.02 & z < 2.03 || z == -2.02 & z > -2.03) escoreZ = 0.4783
    else if(z == 2.03 & z < 2.04 || z == -2.03 & z > -2.04) escoreZ = 0.4788
    else if(z == 2.04 & z < 2.05 || z == -2.04 & z > -2.05) escoreZ = 0.4793
    else if(z == 2.05 & z < 2.06 || z == -2.05 & z > -2.06) escoreZ = 0.4798
    else if(z == 2.06 & z < 2.07 || z == -2.06 & z > -2.07) escoreZ = 0.4803
    else if(z == 2.07 & z < 2.08 || z == -2.07 & z > -2.08) escoreZ = 0.4808
    else if(z == 2.08 & z < 2.09 || z == -2.08 & z > -2.09) escoreZ = 0.4812
    else if(z == 2.09 & z < 2.10 || z == -2.09 & z > -2.10) escoreZ = 0.4817

    else if(z == 2.10 & z < 2.11 || z == -2.10 & z > -2.11) escoreZ = 0.4821
    else if(z == 2.11 & z < 2.12 || z == -2.11 & z > -2.12) escoreZ = 0.4826
    else if(z == 2.12 & z < 2.13 || z == -2.12 & z > -2.13) escoreZ = 0.4830
    else if(z == 2.13 & z < 2.14 || z == -2.13 & z > -2.14) escoreZ = 0.4834
    else if(z == 2.14 & z < 2.15 || z == -2.14 & z > -2.15) escoreZ = 0.4838
    else if(z == 2.15 & z < 2.16 || z == -2.15 & z > -2.16) escoreZ = 0.4842
    else if(z == 2.16 & z < 2.17 || z == -2.16 & z > -2.17) escoreZ = 0.4846
    else if(z == 2.17 & z < 2.18 || z == -2.17 & z > -2.18) escoreZ = 0.4850
    else if(z == 2.18 & z < 2.19 || z == -2.18 & z > -2.19) escoreZ = 0.4854
    else if(z == 2.19 & z < 2.20 || z == -2.19 & z > -2.20) escoreZ = 0.4857

    else if(z == 2.20 & z < 2.21 || z == -2.20 & z > -2.21) escoreZ = 0.4861
    else if(z == 2.21 & z < 2.22 || z == -2.21 & z > -2.22) escoreZ = 0.4864
    else if(z == 2.22 & z < 2.23 || z == -2.22 & z > -2.23) escoreZ = 0.4868
    else if(z == 2.23 & z < 2.24 || z == -2.23 & z > -2.24) escoreZ = 0.4871
    else if(z == 2.24 & z < 2.25 || z == -2.24 & z > -2.25) escoreZ = 0.4875
    else if(z == 2.25 & z < 2.26 || z == -2.25 & z > -2.26) escoreZ = 0.4878
    else if(z == 2.26 & z < 2.27 || z == -2.26 & z > -2.27) escoreZ = 0.4881
    else if(z == 2.27 & z < 2.28 || z == -2.27 & z > -2.28) escoreZ = 0.4884
    else if(z == 2.28 & z < 2.29 || z == -2.28 & z > -2.29) escoreZ = 0.4887
    else if(z == 2.29 & z < 2.30 || z == -2.29 & z > -2.30) escoreZ = 0.4890

    else if(z == 2.30 & z < 2.31 || z == -2.30 & z > -2.31) escoreZ = 0.4893
    else if(z == 2.31 & z < 2.32 || z == -2.31 & z > -2.32) escoreZ = 0.4896
    else if(z == 2.32 & z < 2.33 || z == -2.32 & z > -2.33) escoreZ = 0.4898
    else if(z == 2.33 & z < 2.34 || z == -2.33 & z > -2.34) escoreZ = 0.4901
    else if(z == 2.34 & z < 2.35 || z == -2.34 & z > -2.35) escoreZ = 0.4904
    else if(z == 2.35 & z < 2.36 || z == -2.35 & z > -2.36) escoreZ = 0.4906
    else if(z == 2.36 & z < 2.37 || z == -2.36 & z > -2.37) escoreZ = 0.4909
    else if(z == 2.37 & z < 2.38 || z == -2.37 & z > -2.38) escoreZ = 0.4911
    else if(z == 2.38 & z < 2.39 || z == -2.38 & z > -2.39) escoreZ = 0.4913
    else if(z == 2.39 & z < 2.40 || z == -2.39 & z > -2.40) escoreZ = 0.4916

    else if(z == 2.40 & z < 2.41 || z == -2.40 & z > -2.41) escoreZ = 0.4918
    else if(z == 2.41 & z < 2.42 || z == -2.41 & z > -2.42) escoreZ = 0.4920
    else if(z == 2.42 & z < 2.43 || z == -2.42 & z > -2.43) escoreZ = 0.4922
    else if(z == 2.43 & z < 2.44 || z == -2.43 & z > -2.44) escoreZ = 0.4925
    else if(z == 2.44 & z < 2.45 || z == -2.44 & z > -2.45) escoreZ = 0.4927
    else if(z == 2.45 & z < 2.46 || z == -2.45 & z > -2.46) escoreZ = 0.4929
    else if(z == 2.46 & z < 2.47 || z == -2.46 & z > -2.47) escoreZ = 0.4931
    else if(z == 2.47 & z < 2.48 || z == -2.47 & z > -2.48) escoreZ = 0.4832
    else if(z == 2.48 & z < 2.49 || z == -2.48 & z > -2.49) escoreZ = 0.4934
    else if(z == 2.49 & z < 2.50 || z == -2.49 & z > -2.50) escoreZ = 0.4936

    else if(z == 2.50 & z < 2.51 || z == -2.50 & z > -2.51) escoreZ = 0.4938
    else if(z == 2.51 & z < 2.52 || z == -2.51 & z > -2.52) escoreZ = 0.4940
    else if(z == 2.52 & z < 2.53 || z == -2.52 & z > -2.53) escoreZ = 0.4941
    else if(z == 2.53 & z < 2.54 || z == -2.53 & z > -2.54) escoreZ = 0.4943
    else if(z == 2.54 & z < 2.55 || z == -2.54 & z > -2.55) escoreZ = 0.4945
    else if(z == 2.55 & z < 2.56 || z == -2.55 & z > -2.56) escoreZ = 0.4946
    else if(z == 2.56 & z < 2.57 || z == -2.56 & z > -2.57) escoreZ = 0.4948
    else if(z == 2.57 & z < 2.58 || z == -2.57 & z > -2.58) escoreZ = 0.4949
    else if(z == 2.58 & z < 2.59 || z == -2.58 & z > -2.59) escoreZ = 0.4951
    else if(z == 2.59 & z < 2.60 || z == -2.59 & z > -2.60) escoreZ = 0.4952

    else if(z == 2.60 & z < 2.61 || z == -2.60 & z > -2.61) escoreZ = 0.4953
    else if(z == 2.61 & z < 2.62 || z == -2.61 & z > -2.62) escoreZ = 0.4955
    else if(z == 2.62 & z < 2.63 || z == -2.62 & z > -2.63) escoreZ = 0.4956
    else if(z == 2.63 & z < 2.64 || z == -2.63 & z > -2.64) escoreZ = 0.4957
    else if(z == 2.64 & z < 2.65 || z == -2.64 & z > -2.65) escoreZ = 0.4959
    else if(z == 2.65 & z < 2.66 || z == -2.65 & z > -2.66) escoreZ = 0.4960
    else if(z == 2.66 & z < 2.67 || z == -2.66 & z > -2.67) escoreZ = 0.4961
    else if(z == 2.67 & z < 2.68 || z == -2.67 & z > -2.68) escoreZ = 0.4962
    else if(z == 2.68 & z < 2.69 || z == -2.68 & z > -2.69) escoreZ = 0.4963
    else if(z == 2.69 & z < 2.70 || z == -2.69 & z > -2.70) escoreZ = 0.4964

    else if(z == 2.70 & z < 2.71 || z == -2.70 & z > -2.71) escoreZ = 0.4965
    else if(z == 2.71 & z < 2.72 || z == -2.71 & z > -2.72) escoreZ = 0.4966
    else if(z == 2.72 & z < 2.73 || z == -2.72 & z > -2.73) escoreZ = 0.4967
    else if(z == 2.73 & z < 2.74 || z == -2.73 & z > -2.74) escoreZ = 0.4968
    else if(z == 2.74 & z < 2.75 || z == -2.74 & z > -2.75) escoreZ = 0.4969
    else if(z == 2.75 & z < 2.76 || z == -2.75 & z > -2.76) escoreZ = 0.5970
    else if(z == 2.76 & z < 2.77 || z == -2.76 & z > -2.77) escoreZ = 0.4971
    else if(z == 2.77 & z < 2.78 || z == -2.77 & z > -2.78) escoreZ = 0.4972
    else if(z == 2.78 & z < 2.79 || z == -2.78 & z > -2.79) escoreZ = 0.4973
    else if(z == 2.79 & z < 2.80 || z == -2.79 & z > -2.80) escoreZ = 0.4974

    else if(z == 2.80 & z < 2.81 || z == -2.80 & z > -2.81) escoreZ = 0.4974
    else if(z == 2.81 & z < 2.82 || z == -2.81 & z > -2.82) escoreZ = 0.4975
    else if(z == 2.82 & z < 2.83 || z == -2.82 & z > -2.83) escoreZ = 0.4967
    else if(z == 2.83 & z < 2.85 || z == -2.83 & z > -2.85) escoreZ = 0.4977
    else if(z == 2.85 & z < 2.86 || z == -2.85 & z > -2.86) escoreZ = 0.4978
    else if(z == 2.86 & z < 2.88 || z == -2.86 & z > -2.88) escoreZ = 0.4979
    else if(z == 2.88 & z < 2.89 || z == -2.88 & z > -2.89) escoreZ = 0.4980
    else if(z == 2.89 & z < 2.90 || z == -2.89 & z > -2.90) escoreZ = 0.4981

    else if(z == 2.90 & z < 2.91 || z == -2.90 & z > -2.91) escoreZ = 0.4981
    else if(z == 2.91 & z < 2.93 || z == -2.91 & z > -2.93) escoreZ = 0.4982
    else if(z == 2.93 & z < 2.94 || z == -2.93 & z > -2.94) escoreZ = 0.4983
    else if(z == 2.94 & z < 2.96 || z == -2.94 & z > -2.96) escoreZ = 0.4984
    else if(z == 2.96 & z < 2.98 || z == -2.96 & z > -2.98) escoreZ = 0.4985
    else if(z == 2.98 & z < 3.00 || z == -2.98 & z > -3.00) escoreZ = 0.4986

    else if(z == 3.00 & z < 3.03 || z == -3.00 & z > -3.03) escoreZ = 0.4987
    else if(z == 3.03 & z < 3.05 || z == -3.03 & z > -3.05) escoreZ = 0.4988
    else if(z == 3.05 & z < 3.08 || z == -3.05 & z > -3.08) escoreZ = 0.4989
    else if(z == 3.08 & z < 3.11 || z == -3.08 & z > -3.11) escoreZ = 0.4990
    else if(z == 3.11 & z < 3.14 || z == -3.11 & z > -3.14) escoreZ = 0.4991
    else if(z == 3.14 & z < 3.18 || z == -3.14 & z > -3.18) escoreZ = 0.4992
    else if(z == 3.18 & z < 3.22 || z == -3.18 & z > -3.22) escoreZ = 0.4993
    else if(z == 3.22 & z < 3.27 || z == -3.22 & z > -3.27) escoreZ = 0.4994
    else if(z == 3.27 & z < 3.33 || z == -3.27 & z > -3.33) escoreZ = 0.4995
    else if(z == 3.33 & z < 3.39 || z == -3.33 & z > -3.39) escoreZ = 0.4996
    else if(z == 3.39 & z < 3.49 || z == -3.39 & z > -3.49) escoreZ = 0.4997
    else if(z == 3.49 & z < 3.62 || z == -3.49 & z > -3.62) escoreZ = 0.4998
    else if(z == 3.62 & z < 3.90 || z == -3.62 & z > -3.90) escoreZ = 0.4999
    else if(z == 3.90 & z < 4.00 || z == -3.90 & z > -4.00) escoreZ = 0.5000

    console.log(escoreZ)

    let escoreZ2 = 0 //Tabela z2***********************************************************

    if(z2 == 0.00 & z < 0.01 || z2 == -0.00 & z > -0.01) escoreZ2 = 0.0000
    else if(z2 == 0.01 & z2 < 0.02 || z2 == -0.01 & z2 > -0.02) escoreZ2 = 0.0040
    else if(z2 == 0.02 & z2 < 0.03 || z2 == -0.02 & z2 > -0.03) escoreZ2 = 0.0080
    else if(z2 == 0.03 & z2 < 0.04 || z2 == -0.03 & z2 > -0.04) escoreZ2 = 0.0120
    else if(z2 == 0.04 & z2 < 0.05 || z2 == -0.04 & z2 > -0.05) escoreZ2 = 0.0160
    else if(z2 == 0.05 & z2 < 0.06 || z2 == -0.05 & z2 > -0.06) escoreZ2 = 0.0199
    else if(z2 == 0.06 & z2 < 0.07 || z2 == -0.06 & z2 > -0.07) escoreZ2 = 0.0239
    else if(z2 == 0.07 & z2 < 0.08 || z2 == -0.07 & z2 > -0.08) escoreZ2 = 0.0279
    else if(z2 == 0.08 & z2 < 0.09 || z2 == -0.08 & z2 > -0.09) escoreZ2 = 0.0319
    else if(z2 == 0.09 & z2 < 0.10 || z2 == -0.09 & z2 > -0.10) escoreZ2 = 0.0359

    else if(z2 == 0.10 & z2 < 0.11 || z2 == -0.10 & z2 > -0.11) escoreZ2 = 0.0298
    else if(z2 == 0.11 & z2 < 0.12 || z2 == -0.11 & z2 > -0.12) escoreZ2 = 0.0438
    else if(z2 == 0.12 & z2 < 0.13 || z2 == -0.12 & z2 > -0.13) escoreZ2 = 0.0478
    else if(z2 == 0.13 & z2 < 0.14 || z2 == -0.13 & z2 > -0.14) escoreZ2 = 0.0517
    else if(z2 == 0.14 & z2 < 0.15 || z2 == -0.14 & z2 > -0.15) escoreZ2 = 0.0557
    else if(z2 == 0.15 & z2 < 0.16 || z2 == -0.15 & z2 > -0.16) escoreZ2 = 0.0596
    else if(z2 == 0.16 & z2 < 0.17 || z2 == -0.16 & z2 > -0.17) escoreZ2 = 0.0636
    else if(z2 == 0.17 & z2 < 0.18 || z2 == -0.17 & z2 > -0.18) escoreZ2 = 0.0675
    else if(z2 == 0.18 & z2 < 0.19 || z2 == -0.18 & z2 > -0.19) escoreZ2 = 0.0714
    else if(z2 == 0.19 & z2 < 0.20 || z2 == -0.19 & z2 > -0.20) escoreZ2 = 0.0753

    else if(z2 == 0.20 & z2 < 0.21 || z2 == -0.20 & z2 > -0.21) escoreZ2 = 0.0793
    else if(z2 == 0.21 & z2 < 0.22 || z2 == -0.21 & z2 > -0.22) escoreZ2 = 0.0832
    else if(z2 == 0.22 & z2 < 0.23 || z2 == -0.22 & z2 > -0.23) escoreZ2 = 0.0871
    else if(z2 == 0.23 & z2 < 0.24 || z2 == -0.23 & z2 > -0.24) escoreZ2 = 0.0910
    else if(z2 == 0.24 & z2 < 0.25 || z2 == -0.24 & z2 > -0.25) escoreZ2 = 0.0948
    else if(z2 == 0.25 & z2 < 0.26 || z2 == -0.25 & z2 > -0.26) escoreZ2 = 0.0987
    else if(z2 == 0.26 & z2 < 0.27 || z2 == -0.26 & z2 > -0.27) escoreZ2 = 0.1026
    else if(z2 == 0.27 & z2 < 0.28 || z2 == -0.27 & z2 > -0.28) escoreZ2 = 0.1064
    else if(z2 == 0.28 & z2 < 0.29 || z2 == -0.28 & z2 > -0.29) escoreZ2 = 0.1103
    else if(z2 == 0.29 & z2 < 0.30 || z2 == -0.29 & z2 > -0.30) escoreZ2 = 0.1141

    else if(z2 == 0.30 & z2 < 0.31 || z2 == -0.30 & z2 > -0.31) escoreZ2 = 0.1179
    else if(z2 == 0.31 & z2 < 0.32 || z2 == -0.31 & z2 > -0.32) escoreZ2 = 0.1217
    else if(z2 == 0.32 & z2 < 0.33 || z2 == -0.32 & z2 > -0.33) escoreZ2 = 0.1255
    else if(z2 == 0.33 & z2 < 0.34 || z2 == -0.33 & z2 > -0.34) escoreZ2 = 0.1293
    else if(z2 == 0.34 & z2 < 0.35 || z2 == -0.34 & z2 > -0.35) escoreZ2 = 0.1331
    else if(z2 == 0.35 & z2 < 0.36 || z2 == -0.35 & z2 > -0.36) escoreZ2 = 0.1368
    else if(z2 == 0.36 & z2 < 0.37 || z2 == -0.36 & z2 > -0.37) escoreZ2 = 0.1406
    else if(z2 == 0.37 & z2 < 0.38 || z2 == -0.37 & z2 > -0.38) escoreZ2 = 0.1443
    else if(z2 == 0.38 & z2 < 0.39 || z2 == -0.38 & z2 > -0.39) escoreZ2 = 0.1480
    else if(z2 == 0.39 & z2 < 0.40 || z2 == -0.39 & z2 > -0.40) escoreZ2 = 0.1517

    else if(z2 == 0.40 & z2 < 0.41 || z2 == -0.40 & z2 > -0.41) escoreZ2 = 0.1556
    else if(z2 == 0.41 & z2 < 0.42 || z2 == -0.41 & z2 > -0.42) escoreZ2 = 0.1591
    else if(z2 == 0.42 & z2 < 0.43 || z2 == -0.42 & z2 > -0.43) escoreZ2 = 0.1628
    else if(z2 == 0.43 & z2 < 0.44 || z2 == -0.43 & z2 > -0.44) escoreZ2 = 0.1664
    else if(z2 == 0.44 & z2 < 0.45 || z2 == -0.44 & z2 > -0.45) escoreZ2 = 0.1700
    else if(z2 == 0.45 & z2 < 0.46 || z2 == -0.45 & z2 > -0.46) escoreZ2 = 0.1736
    else if(z2 == 0.46 & z2 < 0.47 || z2 == -0.46 & z2 > -0.47) escoreZ2 = 0.1772
    else if(z2 == 0.47 & z2 < 0.48 || z2 == -0.47 & z2 > -0.48) escoreZ2 = 0.1808
    else if(z2 == 0.48 & z2 < 0.49 || z2 == -0.48 & z2 > -0.49) escoreZ2 = 0.1844
    else if(z2 == 0.49 & z2 < 0.50 || z2 == -0.49 & z2 > -0.50) escoreZ2 = 0.1879

    else if(z2 == 0.50 & z2 < 0.51 || z2 == -0.50 & z2 > -0.51) escoreZ2 = 0.1915
    else if(z2 == 0.51 & z2 < 0.52 || z2 == -0.51 & z2 > -0.52) escoreZ2 = 0.1950
    else if(z2 == 0.52 & z2 < 0.53 || z2 == -0.52 & z2 > -0.53) escoreZ2 = 0.1985
    else if(z2 == 0.53 & z2 < 0.54 || z2 == -0.53 & z2 > -0.54) escoreZ2 = 0.2019
    else if(z2 == 0.54 & z2 < 0.55 || z2 == -0.54 & z2 > -0.55) escoreZ2 = 0.2054
    else if(z2 == 0.55 & z2 < 0.56 || z2 == -0.55 & z2 > -0.56) escoreZ2 = 0.2088
    else if(z2 == 0.56 & z2 < 0.57 || z2 == -0.56 & z2 > -0.57) escoreZ2 = 0.2123
    else if(z2 == 0.57 & z2 < 0.58 || z2 == -0.57 & z2 > -0.58) escoreZ2 = 0.2157
    else if(z2 == 0.58 & z2 < 0.59 || z2 == -0.58 & z2 > -0.59) escoreZ2 = 0.2190
    else if(z2 == 0.59 & z2 < 0.60 || z2 == -0.59 & z2 > -0.60) escoreZ2 = 0.2224

    else if(z2 == 0.60 & z2 < 0.61 || z2 == -0.60 & z2 > -0.61) escoreZ2 = 0.2267
    else if(z2 == 0.61 & z2 < 0.62 || z2 == -0.61 & z2 > -0.62) escoreZ2 = 0.2291
    else if(z2 == 0.62 & z2 < 0.63 || z2 == -0.62 & z2 > -0.63) escoreZ2 = 0.2324
    else if(z2 == 0.63 & z2 < 0.64 || z2 == -0.63 & z2 > -0.64) escoreZ2 = 0.2357
    else if(z2 == 0.64 & z2 < 0.65 || z2 == -0.64 & z2 > -0.65) escoreZ2 = 0.2389
    else if(z2 == 0.65 & z2 < 0.66 || z2 == -0.65 & z2 > -0.66) escoreZ2 = 0.2422
    else if(z2 == 0.66 & z2 < 0.67 || z2 == -0.66 & z2 > -0.67) escoreZ2 = 0.2454
    else if(z2 == 0.67 & z2 < 0.68 || z2 == -0.67 & z2 > -0.68) escoreZ2 = 0.2486
    else if(z2 == 0.68 & z2 < 0.69 || z2 == -0.68 & z2 > -0.69) escoreZ2 = 0.2517
    else if(z2 == 0.69 & z2 < 0.70 || z2 == -0.69 & z2 > -0.70) escoreZ2 = 0.2549

    else if(z2 == 0.70 & z2 < 0.71 || z2 == -0.70 & z2 > -0.71) escoreZ2 = 0.2580
    else if(z2 == 0.71 & z2 < 0.72 || z2 == -0.71 & z2 > -0.72) escoreZ2 = 0.2611
    else if(z2 == 0.72 & z2 < 0.73 || z2 == -0.72 & z2 > -0.73) escoreZ2 = 0.2642
    else if(z2 == 0.73 & z2 < 0.74 || z2 == -0.73 & z2 > -0.74) escoreZ2 = 0.2673
    else if(z2 == 0.74 & z2 < 0.75 || z2 == -0.74 & z2 > -0.75) escoreZ2 = 0.2703
    else if(z2 == 0.75 & z2 < 0.76 || z2 == -0.75 & z2 > -0.76) escoreZ2 = 0.2734
    else if(z2 == 0.76 & z2 < 0.77 || z2 == -0.76 & z2 > -0.77) escoreZ2 = 0.2764
    else if(z2 == 0.77 & z2 < 0.78 || z2 == -0.77 & z2 > -0.78) escoreZ2 = 0.2794
    else if(z2 == 0.78 & z2 < 0.79 || z2 == -0.78 & z2 > -0.79) escoreZ2 = 0.2823
    else if(z2 == 0.79 & z2 < 0.80 || z2 == -0.79 & z2 > -0.80) escoreZ2 = 0.2852

    else if(z2 == 0.80 & z2 < 0.81 || z2 == -0.80 & z2 > -0.81) escoreZ2 = 0.2881
    else if(z2 == 0.81 & z2 < 0.82 || z2 == -0.81 & z2 > -0.82) escoreZ2 = 0.2910
    else if(z2 == 0.82 & z2 < 0.83 || z2 == -0.82 & z2 > -0.83) escoreZ2 = 0.2939
    else if(z2 == 0.83 & z2 < 0.84 || z2 == -0.83 & z2 > -0.84) escoreZ2 = 0.2967
    else if(z2 == 0.84 & z2 < 0.85 || z2 == -0.84 & z2 > -0.85) escoreZ2 = 0.2995
    else if(z2 == 0.85 & z2 < 0.86 || z2 == -0.85 & z2 > -0.86) escoreZ2 = 0.3023
    else if(z2 == 0.86 & z2 < 0.87 || z2 == -0.86 & z2 > -0.87) escoreZ2 = 0.3051
    else if(z2 == 0.87 & z2 < 0.88 || z2 == -0.87 & z2 > -0.88) escoreZ2 = 0.3078
    else if(z2 == 0.88 & z2 < 0.89 || z2 == -0.88 & z2 > -0.89) escoreZ2 = 0.3106
    else if(z2 == 0.89 & z2 < 0.90 || z2 == -0.89 & z2 > -0.90) escoreZ2 = 0.3133

    else if(z2 == 0.90 & z2 < 0.91 || z2 == -0.90 & z2 > -0.91) escoreZ2 = 0.3159
    else if(z2 == 0.91 & z2 < 0.92 || z2 == -0.91 & z2 > -0.92) escoreZ2 = 0.3186
    else if(z2 == 0.92 & z2 < 0.93 || z2 == -0.92 & z2 > -0.93) escoreZ2 = 0.3212
    else if(z2 == 0.93 & z2 < 0.94 || z2 == -0.93 & z2 > -0.94) escoreZ2 = 0.3238
    else if(z2 == 0.94 & z2 < 0.95 || z2 == -0.94 & z2 > -0.95) escoreZ2 = 0.3264
    else if(z2 == 0.95 & z2 < 0.96 || z2 == -0.95 & z2 > -0.96) escoreZ2 = 0.3289
    else if(z2 == 0.96 & z2 < 0.97 || z2 == -0.96 & z2 > -0.97) escoreZ2 = 0.3315
    else if(z2 == 0.97 & z2 < 0.98 || z2 == -0.97 & z2 > -0.98) escoreZ2 = 0.3340
    else if(z2 == 0.98 & z2 < 0.99 || z2 == -0.98 & z2 > -0.99) escoreZ2 = 0.3365
    else if(z2 == 0.99 & z2 < 1.00 || z2 == -0.99 & z2 > -1.00) escoreZ2 = 0.3389

    else if(z2 == 1.00 & z2 < 1.01 || z2 == -1.00 & z2 > -1.01) escoreZ2 = 0.3413
    else if(z2 == 1.01 & z2 < 1.02 || z2 == -1.01 & z2 > -1.02) escoreZ2 = 0.3438
    else if(z2 == 1.02 & z2 < 1.03 || z2 == -1.02 & z2 > -1.03) escoreZ2 = 0.3461
    else if(z2 == 1.03 & z2 < 1.04 || z2 == -1.03 & z2 > -1.04) escoreZ2 = 0.3485
    else if(z2 == 1.04 & z2 < 1.05 || z2 == -1.04 & z2 > -1.05) escoreZ2 = 0.3508
    else if(z2 == 1.05 & z2 < 1.06 || z2 == -1.05 & z2 > -1.06) escoreZ2 = 0.3531
    else if(z2 == 1.06 & z2 < 1.07 || z2 == -1.06 & z2 > -1.07) escoreZ2 = 0.3554
    else if(z2 == 1.07 & z2 < 1.08 || z2 == -1.07 & z2 > -1.08) escoreZ2 = 0.3577
    else if(z2 == 1.08 & z2 < 1.09 || z2 == -1.08 & z2 > -1.09) escoreZ2 = 0.3599
    else if(z2 == 1.09 & z2 < 1.10 || z2 == -1.09 & z2 > -1.10) escoreZ2 = 0.3621

    else if(z2 == 1.10 & z2 < 1.11 || z2 == -1.10 & z2 > -1.11) escoreZ2 = 0.3643
    else if(z2 == 1.11 & z2 < 1.12 || z2 == -1.11 & z2 > -1.12) escoreZ2 = 0.3665
    else if(z2 == 1.12 & z2 < 1.13 || z2 == -1.12 & z2 > -1.13) escoreZ2 = 0.3686
    else if(z2 == 1.13 & z2 < 1.14 || z2 == -1.13 & z2 > -1.14) escoreZ2 = 0.3708
    else if(z2 == 1.14 & z2 < 1.15 || z2 == -1.14 & z2 > -1.15) escoreZ2 = 0.3729
    else if(z2 == 1.15 & z2 < 1.16 || z2 == -1.15 & z2 > -1.16) escoreZ2 = 0.3749
    else if(z2 == 1.16 & z2 < 1.17 || z2 == -1.16 & z2 > -1.17) escoreZ2 = 0.3770
    else if(z2 == 1.17 & z2 < 1.18 || z2 == -1.17 & z2 > -1.18) escoreZ2 = 0.3790
    else if(z2 == 1.18 & z2 < 1.19 || z2 == -1.18 & z2 > -1.19) escoreZ2 = 0.3810
    else if(z2 == 1.19 & z2 < 1.20 || z2 == -1.19 & z2 > -1.20) escoreZ2 = 0.3830

    else if(z2 == 1.20 & z2 < 1.21 || z2 == -1.20 & z2 > -1.21) escoreZ2 = 0.3849
    else if(z2 == 1.21 & z2 < 1.22 || z2 == -1.21 & z2 > -1.22) escoreZ2 = 0.3869
    else if(z2 == 1.22 & z2 < 1.23 || z2 == -1.22 & z2 > -1.23) escoreZ2 = 0.3888
    else if(z2 == 1.23 & z2 < 1.24 || z2 == -1.23 & z2 > -1.24) escoreZ2 = 0.3907
    else if(z2 == 1.24 & z2 < 1.25 || z2 == -1.24 & z2 > -1.25) escoreZ2 = 0.3925
    else if(z2 == 1.25 & z2 < 1.26 || z2 == -1.25 & z2 > -1.26) escoreZ2 = 0.3944
    else if(z2 == 1.26 & z2 < 1.27 || z2 == -1.26 & z2 > -1.27) escoreZ2 = 0.3962
    else if(z2 == 1.27 & z2 < 1.28 || z2 == -1.27 & z2 > -1.28) escoreZ2 = 0.3980
    else if(z2 == 1.28 & z2 < 1.29 || z2 == -1.28 & z2 > -1.29) escoreZ2 = 0.3997
    else if(z2 == 1.29 & z2 < 1.30 || z2 == -1.29 & z2 > -1.30) escoreZ2 = 0.4015

    else if(z2 == 1.30 & z2 < 1.31 || z2 == -1.30 & z2 > -1.31) escoreZ2 = 0.4032
    else if(z2 == 1.31 & z2 < 1.32 || z2 == -1.31 & z2 > -1.32) escoreZ2 = 0.4049
    else if(z2 == 1.32 & z2 < 1.33 || z2 == -1.32 & z2 > -1.33) escoreZ2 = 0.4066
    else if(z2 == 1.33 & z2 < 1.34 || z2 == -1.33 & z2 > -1.34) escoreZ2 = 0.4082
    else if(z2 == 1.34 & z2 < 1.35 || z2 == -1.34 & z2 > -1.35) escoreZ2 = 0.4099
    else if(z2 == 1.35 & z2 < 1.36 || z2 == -1.35 & z2 > -1.36) escoreZ2 = 0.4115
    else if(z2 == 1.36 & z2 < 1.37 || z2 == -1.36 & z2 > -1.37) escoreZ2 = 0.4131
    else if(z2 == 1.37 & z2 < 1.38 || z2 == -1.37 & z2 > -1.38) escoreZ2 = 0.4147
    else if(z2 == 1.38 & z2 < 1.39 || z2 == -1.38 & z2 > -1.39) escoreZ2 = 0.4162
    else if(z2 == 1.39 & z2 < 1.40 || z2 == -1.39 & z2 > -1.40) escoreZ2 = 0.4177

    else if(z2 == 1.40 & z2 < 1.41 || z2 == -1.40 & z2 > -1.41) escoreZ2 = 0.4192
    else if(z2 == 1.41 & z2 < 1.42 || z2 == -1.41 & z2 > -1.42) escoreZ2 = 0.4207
    else if(z2 == 1.42 & z2 < 1.43 || z2 == -1.42 & z2 > -1.43) escoreZ2 = 0.4222
    else if(z2 == 1.43 & z2 < 1.44 || z2 == -1.43 & z2 > -1.44) escoreZ2 = 0.4236
    else if(z2 == 1.44 & z2 < 1.45 || z2 == -1.44 & z2 > -1.45) escoreZ2 = 0.4251
    else if(z2 == 1.45 & z2 < 1.46 || z2 == -1.45 & z2 > -1.46) escoreZ2 = 0.4265
    else if(z2 == 1.46 & z2 < 1.47 || z2 == -1.46 & z2 > -1.47) escoreZ2 = 0.4279
    else if(z2 == 1.47 & z2 < 1.48 || z2 == -1.47 & z2 > -1.48) escoreZ2 = 0.4292
    else if(z2 == 1.48 & z2 < 1.49 || z2 == -1.48 & z2 > -1.49) escoreZ2 = 0.4306
    else if(z2 == 1.49 & z2 < 1.50 || z2 == -1.49 & z2 > -1.50) escoreZ2 = 0.4319

    else if(z2 == 1.50 & z2 < 1.51 || z2 == -1.50 & z2 > -1.51) escoreZ2 = 0.4332
    else if(z2 == 1.51 & z2 < 1.52 || z2 == -1.51 & z2 > -1.52) escoreZ2 = 0.4345
    else if(z2 == 1.52 & z2 < 1.53 || z2 == -1.52 & z2 > -1.53) escoreZ2 = 0.4357
    else if(z2 == 1.53 & z2 < 1.54 || z2 == -1.53 & z2 > -1.54) escoreZ2 = 0.4370
    else if(z2 == 1.54 & z2 < 1.55 || z2 == -1.54 & z2 > -1.55) escoreZ2 = 0.4382
    else if(z2 == 1.55 & z2 < 1.56 || z2 == -1.55 & z2 > -1.56) escoreZ2 = 0.4394
    else if(z2 == 1.56 & z2 < 1.57 || z2 == -1.56 & z2 > -1.57) escoreZ2 = 0.4406
    else if(z2 == 1.57 & z2 < 1.58 || z2 == -1.57 & z2 > -1.58) escoreZ2 = 0.4418
    else if(z2 == 1.58 & z2 < 1.59 || z2 == -1.58 & z2 > -1.59) escoreZ2 = 0.4429
    else if(z2 == 1.59 & z2 < 1.60 || z2 == -1.59 & z2 > -1.60) escoreZ2 = 0.4441

    else if(z2 == 1.60 & z2 < 1.61 || z2 == -1.60 & z2 > -1.61) escoreZ2 = 0.4452
    else if(z2 == 1.61 & z2 < 1.62 || z2 == -1.61 & z2 > -1.62) escoreZ2 = 0.4463
    else if(z2 == 1.62 & z2 < 1.63 || z2 == -1.62 & z2 > -1.63) escoreZ2 = 0.4474
    else if(z2 == 1.63 & z2 < 1.64 || z2 == -1.63 & z2 > -1.64) escoreZ2 = 0.4484
    else if(z2 == 1.64 & z2 < 1.65 || z2 == -1.64 & z2 > -1.65) escoreZ2 = 0.4495
    else if(z2 == 1.65 & z2 < 1.66 || z2 == -1.65 & z2 > -1.66) escoreZ2 = 0.4505
    else if(z2 == 1.66 & z2 < 1.67 || z2 == -1.66 & z2 > -1.67) escoreZ2 = 0.4515
    else if(z2 == 1.67 & z2 < 1.68 || z2 == -1.67 & z2 > -1.68) escoreZ2 = 0.4525
    else if(z2 == 1.68 & z2 < 1.69 || z2 == -1.68 & z2 > -1.69) escoreZ2 = 0.4535
    else if(z2 == 1.69 & z2 < 1.70 || z2 == -1.69 & z2 > -1.70) escoreZ2 = 0.4545

    else if(z2 == 1.70 & z2 < 1.71 || z2 == -1.70 & z2 > -1.71) escoreZ2 = 0.4554
    else if(z2 == 1.71 & z2 < 1.72 || z2 == -1.71 & z2 > -1.72) escoreZ2 = 0.4564
    else if(z2 == 1.72 & z2 < 1.73 || z2 == -1.72 & z2 > -1.73) escoreZ2 = 0.4573
    else if(z2 == 1.73 & z2 < 1.74 || z2 == -1.73 & z2 > -1.74) escoreZ2 = 0.4582
    else if(z2 == 1.74 & z2 < 1.75 || z2 == -1.74 & z2 > -1.75) escoreZ2 = 0.4591
    else if(z2 == 1.75 & z2 < 1.76 || z2 == -1.75 & z2 > -1.76) escoreZ2 = 0.4599
    else if(z2 == 1.76 & z2 < 1.77 || z2 == -1.76 & z2 > -1.77) escoreZ2 = 0.4608
    else if(z2 == 1.77 & z2 < 1.78 || z2 == -1.77 & z2 > -1.78) escoreZ2 = 0.4616
    else if(z2 == 1.78 & z2 < 1.79 || z2 == -1.78 & z2 > -1.79) escoreZ2 = 0.4625
    else if(z2 == 1.79 & z2 < 1.80 || z2 == -1.79 & z2 > -1.80) escoreZ2 = 0.4633

    else if(z2 == 1.80 & z2 < 1.81 || z2 == -1.80 & z2 > -1.81) escoreZ2 = 0.4641
    else if(z2 == 1.81 & z2 < 1.82 || z2 == -1.81 & z2 > -1.82) escoreZ2 = 0.4649
    else if(z2 == 1.82 & z2 < 1.83 || z2 == -1.82 & z2 > -1.83) escoreZ2 = 0.4656
    else if(z2 == 1.83 & z2 < 1.84 || z2 == -1.83 & z2 > -1.84) escoreZ2 = 0.4664
    else if(z2 == 1.84 & z2 < 1.85 || z2 == -1.84 & z2 > -1.85) escoreZ2 = 0.4671
    else if(z2 == 1.85 & z2 < 1.86 || z2 == -1.85 & z2 > -1.86) escoreZ2 = 0.4778
    else if(z2 == 1.86 & z2 < 1.87 || z2 == -1.86 & z2 > -1.87) escoreZ2 = 0.4686
    else if(z2 == 1.87 & z2 < 1.88 || z2 == -1.87 & z2 > -1.88) escoreZ2 = 0.4693
    else if(z2 == 1.88 & z2 < 1.89 || z2 == -1.88 & z2 > -1.89) escoreZ2 = 0.4699
    else if(z2 == 1.89 & z2 < 1.90 || z2 == -1.89 & z2 > -1.90) escoreZ2 = 0.4706

    else if(z2 == 1.90 & z2 < 1.91 || z2 == -1.90 & z2 > -1.91) escoreZ2 = 0.4713
    else if(z2 == 1.91 & z2 < 1.92 || z2 == -1.91 & z2 > -1.92) escoreZ2 = 0.4719
    else if(z2 == 1.92 & z2 < 1.93 || z2 == -1.92 & z2 > -1.93) escoreZ2 = 0.4726
    else if(z2 == 1.93 & z2 < 1.94 || z2 == -1.93 & z2 > -1.94) escoreZ2 = 0.4732
    else if(z2 == 1.94 & z2 < 1.95 || z2 == -1.94 & z2 > -1.95) escoreZ2 = 0.4738
    else if(z2 == 1.95 & z2 < 1.96 || z2 == -1.95 & z2 > -1.96) escoreZ2 = 0.4744
    else if(z2 == 1.96 & z2 < 1.97 || z2 == -1.96 & z2 > -1.97) escoreZ2 = 0.4750
    else if(z2 == 1.97 & z2 < 1.98 || z2 == -1.97 & z2 > -1.98) escoreZ2 = 0.4756
    else if(z2 == 1.98 & z2 < 1.99 || z2 == -1.98 & z2 > -1.99) escoreZ2 = 0.4761
    else if(z2 == 1.99 & z2 < 2.00 || z2 == -1.98 & z2 > -1.99) escoreZ2 = 0.4767

    else if(z2 == 2.00 & z2 < 2.01 || z2 == -2.00 & z2 > -2.01) escoreZ2 = 0.4772
    else if(z2 == 2.01 & z2 < 2.02 || z2 == -2.01 & z2 > -2.02) escoreZ2 = 0.4778
    else if(z2 == 2.02 & z2 < 2.03 || z2 == -2.02 & z2 > -2.03) escoreZ2 = 0.4783
    else if(z2 == 2.03 & z2 < 2.04 || z2 == -2.03 & z2 > -2.04) escoreZ2 = 0.4788
    else if(z2 == 2.04 & z2 < 2.05 || z2 == -2.04 & z2 > -2.05) escoreZ2 = 0.4793
    else if(z2 == 2.05 & z2 < 2.06 || z2 == -2.05 & z2 > -2.06) escoreZ2 = 0.4798
    else if(z2 == 2.06 & z2 < 2.07 || z2 == -2.06 & z2 > -2.07) escoreZ2 = 0.4803
    else if(z2 == 2.07 & z2 < 2.08 || z2 == -2.07 & z2 > -2.08) escoreZ2 = 0.4808
    else if(z2 == 2.08 & z2 < 2.09 || z2 == -2.08 & z2 > -2.09) escoreZ2 = 0.4812
    else if(z2 == 2.09 & z2 < 2.10 || z2 == -2.09 & z2 > -2.10) escoreZ2 = 0.4817

    else if(z2 == 2.10 & z2 < 2.11 || z2 == -2.10 & z2 > -2.11) escoreZ2 = 0.4821
    else if(z2 == 2.11 & z2 < 2.12 || z2 == -2.11 & z2 > -2.12) escoreZ2 = 0.4826
    else if(z2 == 2.12 & z2 < 2.13 || z2 == -2.12 & z2 > -2.13) escoreZ2 = 0.4830
    else if(z2 == 2.13 & z2 < 2.14 || z2 == -2.13 & z2 > -2.14) escoreZ2 = 0.4834
    else if(z2 == 2.14 & z2 < 2.15 || z2 == -2.14 & z2 > -2.15) escoreZ2 = 0.4838
    else if(z2 == 2.15 & z2 < 2.16 || z2 == -2.15 & z2 > -2.16) escoreZ2 = 0.4842
    else if(z2 == 2.16 & z2 < 2.17 || z2 == -2.16 & z2 > -2.17) escoreZ2 = 0.4846
    else if(z2 == 2.17 & z2 < 2.18 || z2 == -2.17 & z2 > -2.18) escoreZ2 = 0.4850
    else if(z2 == 2.18 & z2 < 2.19 || z2 == -2.18 & z2 > -2.19) escoreZ2 = 0.4854
    else if(z2 == 2.19 & z2 < 2.20 || z2 == -2.19 & z2 > -2.20) escoreZ2 = 0.4857

    else if(z2 == 2.20 & z2 < 2.21 || z2 == -2.20 & z2 > -2.21) escoreZ2 = 0.4861
    else if(z2 == 2.21 & z2 < 2.22 || z2 == -2.21 & z2 > -2.22) escoreZ2 = 0.4864
    else if(z2 == 2.22 & z2 < 2.23 || z2 == -2.22 & z2 > -2.23) escoreZ2 = 0.4868
    else if(z2 == 2.23 & z2 < 2.24 || z2 == -2.23 & z2 > -2.24) escoreZ2 = 0.4871
    else if(z2 == 2.24 & z2 < 2.25 || z2 == -2.24 & z2 > -2.25) escoreZ2 = 0.4875
    else if(z2 == 2.25 & z2 < 2.26 || z2 == -2.25 & z2 > -2.26) escoreZ2 = 0.4878
    else if(z2 == 2.26 & z2 < 2.27 || z2 == -2.26 & z2 > -2.27) escoreZ2 = 0.4881
    else if(z2 == 2.27 & z2 < 2.28 || z2 == -2.27 & z2 > -2.28) escoreZ2 = 0.4884
    else if(z2 == 2.28 & z2 < 2.29 || z2 == -2.28 & z2 > -2.29) escoreZ2 = 0.4887
    else if(z2 == 2.29 & z2 < 2.30 || z2 == -2.29 & z2 > -2.30) escoreZ2 = 0.4890

    else if(z2 == 2.30 & z2 < 2.31 || z2 == -2.30 & z2 > -2.31) escoreZ2 = 0.4893
    else if(z2 == 2.31 & z2 < 2.32 || z2 == -2.31 & z2 > -2.32) escoreZ2 = 0.4896
    else if(z2 == 2.32 & z2 < 2.33 || z2 == -2.32 & z2 > -2.33) escoreZ2 = 0.4898
    else if(z2 == 2.33 & z2 < 2.34 || z2 == -2.33 & z2 > -2.34) escoreZ2 = 0.4901
    else if(z2 == 2.34 & z2 < 2.35 || z2 == -2.34 & z2 > -2.35) escoreZ2 = 0.4904
    else if(z2 == 2.35 & z2 < 2.36 || z2 == -2.35 & z2 > -2.36) escoreZ2 = 0.4906
    else if(z2 == 2.36 & z2 < 2.37 || z2 == -2.36 & z2 > -2.37) escoreZ2 = 0.4909
    else if(z2 == 2.37 & z2 < 2.38 || z2 == -2.37 & z2 > -2.38) escoreZ2 = 0.4911
    else if(z2 == 2.38 & z2 < 2.39 || z2 == -2.38 & z2 > -2.39) escoreZ2 = 0.4913
    else if(z2 == 2.39 & z2 < 2.40 || z2 == -2.39 & z2 > -2.40) escoreZ2 = 0.4916

    else if(z2 == 2.40 & z2 < 2.41 || z2 == -2.40 & z2 > -2.41) escoreZ2 = 0.4918
    else if(z2 == 2.41 & z2 < 2.42 || z2 == -2.41 & z2 > -2.42) escoreZ2 = 0.4920
    else if(z2 == 2.42 & z2 < 2.43 || z2 == -2.42 & z2 > -2.43) escoreZ2 = 0.4922
    else if(z2 == 2.43 & z2 < 2.44 || z2 == -2.43 & z2 > -2.44) escoreZ2 = 0.4925
    else if(z2 == 2.44 & z2 < 2.45 || z2 == -2.44 & z2 > -2.45) escoreZ2 = 0.4927
    else if(z2 == 2.45 & z2 < 2.46 || z2 == -2.45 & z2 > -2.46) escoreZ2 = 0.4929
    else if(z2 == 2.46 & z2 < 2.47 || z2 == -2.46 & z2 > -2.47) escoreZ2 = 0.4931
    else if(z2 == 2.47 & z2 < 2.48 || z2 == -2.47 & z2 > -2.48) escoreZ2 = 0.4832
    else if(z2 == 2.48 & z2 < 2.49 || z2 == -2.48 & z2 > -2.49) escoreZ2 = 0.4934
    else if(z2 == 2.49 & z2 < 2.50 || z2 == -2.49 & z2 > -2.50) escoreZ2 = 0.4936

    else if(z2 == 2.50 & z2 < 2.51 || z2 == -2.50 & z2 > -2.51) escoreZ2 = 0.4938
    else if(z2 == 2.51 & z2 < 2.52 || z2 == -2.51 & z2 > -2.52) escoreZ2 = 0.4940
    else if(z2 == 2.52 & z2 < 2.53 || z2 == -2.52 & z2 > -2.53) escoreZ2 = 0.4941
    else if(z2 == 2.53 & z2 < 2.54 || z2 == -2.53 & z2 > -2.54) escoreZ2 = 0.4943
    else if(z2 == 2.54 & z2 < 2.55 || z2 == -2.54 & z2 > -2.55) escoreZ2 = 0.4945
    else if(z2 == 2.55 & z2 < 2.56 || z2 == -2.55 & z2 > -2.56) escoreZ2 = 0.4946
    else if(z2 == 2.56 & z2 < 2.57 || z2 == -2.56 & z2 > -2.57) escoreZ2 = 0.4948
    else if(z2 == 2.57 & z2 < 2.58 || z2 == -2.57 & z2 > -2.58) escoreZ2 = 0.4949
    else if(z2 == 2.58 & z2 < 2.59 || z2 == -2.58 & z2 > -2.59) escoreZ2 = 0.4951
    else if(z2 == 2.59 & z2 < 2.60 || z2 == -2.59 & z2 > -2.60) escoreZ2 = 0.4952

    else if(z2 == 2.60 & z2 < 2.61 || z2 == -2.60 & z2 > -2.61) escoreZ2 = 0.4953
    else if(z2 == 2.61 & z2 < 2.62 || z2 == -2.61 & z2 > -2.62) escoreZ2 = 0.4955
    else if(z2 == 2.62 & z2 < 2.63 || z2 == -2.62 & z2 > -2.63) escoreZ2 = 0.4956
    else if(z2 == 2.63 & z2 < 2.64 || z2 == -2.63 & z2 > -2.64) escoreZ2 = 0.4957
    else if(z2 == 2.64 & z2 < 2.65 || z2 == -2.64 & z2 > -2.65) escoreZ2 = 0.4959
    else if(z2 == 2.65 & z2 < 2.66 || z2 == -2.65 & z2 > -2.66) escoreZ2 = 0.4960
    else if(z2 == 2.66 & z2 < 2.67 || z2 == -2.66 & z2 > -2.67) escoreZ2 = 0.4961
    else if(z2 == 2.67 & z2 < 2.68 || z2 == -2.67 & z2 > -2.68) escoreZ2 = 0.4962
    else if(z2 == 2.68 & z2 < 2.69 || z2 == -2.68 & z2 > -2.69) escoreZ2 = 0.4963
    else if(z2 == 2.69 & z2 < 2.70 || z2 == -2.69 & z2 > -2.70) escoreZ2 = 0.4964

    else if(z2 == 2.70 & z2 < 2.71 || z2 == -2.70 & z2 > -2.71) escoreZ2 = 0.4965
    else if(z2 == 2.71 & z2 < 2.72 || z2 == -2.71 & z2 > -2.72) escoreZ2 = 0.4966
    else if(z2 == 2.72 & z2 < 2.73 || z2 == -2.72 & z2 > -2.73) escoreZ2 = 0.4967
    else if(z2 == 2.73 & z2 < 2.74 || z2 == -2.73 & z2 > -2.74) escoreZ2 = 0.4968
    else if(z2 == 2.74 & z2 < 2.75 || z2 == -2.74 & z2 > -2.75) escoreZ2 = 0.4969
    else if(z2 == 2.75 & z2 < 2.76 || z2 == -2.75 & z2 > -2.76) escoreZ2 = 0.5970
    else if(z2 == 2.76 & z2 < 2.77 || z2 == -2.76 & z2 > -2.77) escoreZ2 = 0.4971
    else if(z2 == 2.77 & z2 < 2.78 || z2 == -2.77 & z2 > -2.78) escoreZ2 = 0.4972
    else if(z2 == 2.78 & z2 < 2.79 || z2 == -2.78 & z2 > -2.79) escoreZ2 = 0.4973
    else if(z2 == 2.79 & z2 < 2.80 || z2 == -2.79 & z2 > -2.80) escoreZ2 = 0.4974

    else if(z2 == 2.80 & z2 < 2.81 || z2 == -2.80 & z2 > -2.81) escoreZ2 = 0.4974
    else if(z2 == 2.81 & z2 < 2.82 || z2 == -2.81 & z2 > -2.82) escoreZ2 = 0.4975
    else if(z2 == 2.82 & z2 < 2.83 || z2 == -2.82 & z2 > -2.83) escoreZ2 = 0.4967
    else if(z2 == 2.83 & z2 < 2.85 || z2 == -2.83 & z2 > -2.85) escoreZ2 = 0.4977
    else if(z2 == 2.85 & z2 < 2.86 || z2 == -2.85 & z2 > -2.86) escoreZ2 = 0.4978
    else if(z2 == 2.86 & z2 < 2.88 || z2 == -2.86 & z2 > -2.88) escoreZ2 = 0.4979
    else if(z2 == 2.88 & z2 < 2.89 || z2 == -2.88 & z2 > -2.89) escoreZ2 = 0.4980
    else if(z2 == 2.89 & z2 < 2.90 || z2 == -2.89 & z2 > -2.90) escoreZ2 = 0.4981

    else if(z2 == 2.90 & z2 < 2.91 || z2 == -2.90 & z2 > -2.91) escoreZ2 = 0.4981
    else if(z2 == 2.91 & z2 < 2.93 || z2 == -2.91 & z2 > -2.93) escoreZ2 = 0.4982
    else if(z2 == 2.93 & z2 < 2.94 || z2 == -2.93 & z2 > -2.94) escoreZ2 = 0.4983
    else if(z2 == 2.94 & z2 < 2.96 || z2 == -2.94 & z2 > -2.96) escoreZ2 = 0.4984
    else if(z2 == 2.96 & z2 < 2.98 || z2 == -2.96 & z2 > -2.98) escoreZ2 = 0.4985
    else if(z2 == 2.98 & z2 < 3.00 || z2 == -2.98 & z2 > -3.00) escoreZ2 = 0.4986

    else if(z2 == 3.00 & z2 < 3.03 || z2 == -3.00 & z2 > -3.03) escoreZ2 = 0.4987
    else if(z2 == 3.03 & z2 < 3.05 || z2 == -3.03 & z2 > -3.05) escoreZ2 = 0.4988
    else if(z2 == 3.05 & z2 < 3.08 || z2 == -3.05 & z2 > -3.08) escoreZ2 = 0.4989
    else if(z2 == 3.08 & z2 < 3.11 || z2 == -3.08 & z2 > -3.11) escoreZ2 = 0.4990
    else if(z2 == 3.11 & z2 < 3.14 || z2 == -3.11 & z2 > -3.14) escoreZ2 = 0.4991
    else if(z2 == 3.14 & z2 < 3.18 || z2 == -3.14 & z2 > -3.18) escoreZ2 = 0.4992
    else if(z2 == 3.18 & z2 < 3.22 || z2 == -3.18 & z2 > -3.22) escoreZ2 = 0.4993
    else if(z2 == 3.22 & z2 < 3.27 || z2 == -3.22 & z2 > -3.27) escoreZ2 = 0.4994
    else if(z2 == 3.27 & z2 < 3.33 || z2 == -3.27 & z2 > -3.33) escoreZ2 = 0.4995
    else if(z2 == 3.33 & z2 < 3.39 || z2 == -3.33 & z2 > -3.39) escoreZ2 = 0.4996
    else if(z2 == 3.39 & z2 < 3.49 || z2 == -3.39 & z2 > -3.49) escoreZ2 = 0.4997
    else if(z2 == 3.49 & z2 < 3.62 || z2 == -3.49 & z2 > -3.62) escoreZ2 = 0.4998
    else if(z2 == 3.62 & z2 < 3.90 || z2 == -3.62 & z2 > -3.90) escoreZ2 = 0.4999
    else if(z2 == 3.90 & z2 < 4.00 || z2 == -3.90 & z2 > -4.00) escoreZ2 = 0.5000

    console.log(escoreZ2)

    if(intervalo.selectedIndex == 1){ //Maior que*************************************
        if(v > m){
            let prob = 0
            prob = (0.5 - escoreZ)*100 

            //Exibir Resultado-------------------------------------------------------
            // resultado.innerHTML += prob.toFixed(2) + "%"
            let td = criarElemento('td')
            td.textContent = prob.toFixed(2) + "%"
            tbody.appendChild(td)
        }
        else if(v < m){
            let prob = 0
            prob = (escoreZ + 0.5)*100

            //Exibir Resultado--------------------------------------------------------
            // resultado.innerHTML += prob.toFixed(2) + "%"
            let td = criarElemento('td')
            td.textContent = prob.toFixed(2) + "%"
            tbody.appendChild(td)
        }

    }
    else if(intervalo.selectedIndex == 2){ //Menor que********************************
        if(v < m){
            let prob = 0
            prob = (0.5 - escoreZ)*100 

            //Exibir Resultado-------------------------------------------------------
            // resultado.innerHTML += prob.toFixed(2) + "%"
            let td = criarElemento('td')
            td.textContent = prob.toFixed(2) + "%"
            tbody.appendChild(td)
        }
        if(v > m){
            let prob = 0
            prob = (escoreZ + 0.5)*100

            //Exibir Resultado-------------------------------------------------------
            // resultado.innerHTML += prob.toFixed(2) + "%"
            let td = criarElemento('td')
            td.textContent = prob.toFixed(2) + "%"
            tbody.appendChild(td)
        }
    }
    else if(intervalo.selectedIndex == 3){ //Entre***********************************
        if(v < m && v2 > m){
            let prob = 0
            prob = (escoreZ + escoreZ2)*100

            //Exibir Resultado-------------------------------------------------------
            // resultado.innerHTML += prob.toFixed(2) + "%"
            let td = criarElemento('td')
            td.textContent = prob.toFixed(2) + "%"
            tbody.appendChild(td)
        }
        else if(v == m && v2 > m || v < m && v2 == m){
            let prob = 0
            prob = escoreZ*100

            //Exibir Resultado-------------------------------------------------------
            // resultado.innerHTML += prob.toFixed(2) + "%"
            let td = criarElemento('td')
            td.textContent = prob.toFixed(2) + "%"
            tbody.appendChild(td)
        }
        else if(v > m && v2 > m || v < m && v2 < m){
            let prob = 0
            prob = (escoreZ - escoreZ2)*100

            //Exibir Resultado-------------------------------------------------------
            // resultado.innerHTML += prob.toFixed(2) + "%"
            let td = criarElemento('td')
            td.textContent = prob.toFixed(2) + "%"
            tbody.appendChild(td)
        }
    }
}

calcular.addEventListener("click", normal)