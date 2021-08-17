function verificar(){

    let codigo = Number(document.getElementById("codigo").value)
    let qtde = Number(document.getElementById("qtde").value)

    let precoUnitario
    if ((codigo >= 1) && (codigo <= 10)){
        precoUnitario = 10
    }
    else if ((codigo >= 11) && (codigo <= 20)){
        precoUnitario = 15
    }
    else if ((codigo >= 21) && (codigo <= 30)){
        precoUnitario = 20
    }
    else if ((codigo >= 31) && (codigo <= 40)){
        precoUnitario = 30
    }
    else {
        precoUnitario = 0
    }
    let precoTotal = precoUnitario * qtde
    let valorDesconto
    if (precoTotal < 250){
        valorDesconto = (5 * precoTotal)/100
    }
    else if ((precoTotal >= 250) && (precoTotal <= 500)){
        valorDesconto = (10 * precoTotal)/100
    }
    else{
       valorDesconto = (15 * precoTotal)/100
    } 

    let precoFinal =  precoTotal - valorDesconto
    //saida
    document.getElementById("precoUnitario").innerHTML =  precoUnitario
    document.getElementById("precoTotal").innerHTML = precoTotal
    document.getElementById("valorDesconto").innerHTML = valorDesconto
    document.getElementById("precoFinal").innerHTML = precoFinal
}