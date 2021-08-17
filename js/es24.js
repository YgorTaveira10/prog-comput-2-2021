function calcular(){
    // recuperar dados
    let preco = Number(document.getElementById("preco").value)
    let cat = Number(document.getElementById("cat").value)
    let situacao 
    if (document.getElementById("R").checked){ // Sim esta checado
        situacao = "R"
    }
    else {
        situacao = "N" // Não esta checado
    }
    // alert(situacao) pra saber se estava funcionando

    let aumento 
    if (preco <= 25){
        // switch para casos 1 2 e 3
        switch(cat){
            case 1: aumento = (5 * preco) / 100
                    break
            case 2: aumento = (8 * preco) / 100
                    break
            case 3: aumento = (10 * preco) / 100
                    break 
        }                          
    }
    else {
        switch(cat){
            case 1: aumento = (12 * preco) / 100
                    break
            case 2: aumento = (15 * preco) / 100
                    break
            case 3: aumento = (18 * preco) / 100
                    break 
        }  
    }
    
    let imposto
    if ((cat == 2) || (situacao == 'R')){
        imposto = (5 * preco) / 100
    }
    else {
        imposto = (8 * preco) / 100
    }

    let novo = preco + aumento - imposto
    let classi
    if (novo <= 50){
        classi = "barato"
    }
    else if ((novo > 50) && (novo < 120)){
        classi = "normal"
    }
    else (novo >= 120) 
          

      // mostrar os resultados
    document.getElementById("aumento").innerHTML = aumento
    document.getElementById("imposto").innerHTML = imposto
    document.getElementById("novo").innerHTML = novo
    document.getElementById("classi").innerHTML = classi
  


}