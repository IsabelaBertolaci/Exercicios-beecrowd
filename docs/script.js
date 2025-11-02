function mostrar1 (){
    let A = parseInt(document.querySelector(".valor-1").value);
    let B = parseInt(document.querySelector(".valor-2").value);

    if (!isNaN(A) && !isNaN(B)){

    document.querySelector(".resultado1").innerHTML = A + B}

    else{
    alert("Insira um número em ambas as caixas de texto do exercício 1002 para que o cálculo seja efetuado.")
    }

}


function mostrar2 (){
    let raio = parseInt(document.querySelector(".valor-raio").value);
    let area = Math.PI.toFixed(5) * Math.pow(raio,2);

    if (!isNaN(raio)){

    document.querySelector(".resultado2").innerHTML = area}

    else{
    alert("Insira um número na caixa de texto do exercício 1003 para que o cálculo seja efetuado.")
    }

}


function mostrar3 (){
    let A = parseInt(document.querySelector(".valor-A").value);
    let B = parseInt(document.querySelector(".valor-B").value);

    if (!isNaN(A) && !isNaN(B)){

    document.querySelector(".resultado3").innerHTML = A + B}

    else{
    alert("Insira um número em ambas as caixas de texto do exercício 1004 para que o cálculo seja efetuado.")
    }

}


function mostrar4 (){
    let A = parseInt(document.querySelector(".valor-m1").value);
    let B = parseInt(document.querySelector(".valor-m2").value);

    if (!isNaN(A) && !isNaN(B)){

    document.querySelector(".resultado4").innerHTML = A * B;}
 
    else{
    alert("Insira um número em ambas as caixas de texto do exercício 1005 para que o cálculo seja efetuado.")
    }

}