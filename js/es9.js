function efeito(){

    let saldo = Number(document.getElementById("saldo").value)
    
    let credito
    if (saldo > 400.00){
        credito = saldo * 0.3
    }
    else if (( saldo > 300 )&& (saldo <= 400)){
        credito = saldo * 0.25
    }
    else if ((saldo > 200) && (saldo <= 300)){
        credito = saldo * 0.2
    }
    else if (( saldo <= 200) && (saldo >= 0)) {
        credito = saldo * 0.1
    }
    else {
        credito = 0
    }
    document.getElementById("resultado").innerHTML = `O crédito oferecido é de ${credito.toFixed(2)}`
}