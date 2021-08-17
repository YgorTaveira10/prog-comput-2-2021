let exercicio0 = function (){
    let soma = 0 // o valor que neutraliza a soma

    let i = 1

    while (i <= 10){
        let nota = Number(prompt(`Informe a nota`)) // document.getelementById("nota").value

        soma = soma + nota

        i++

    }
    let media = soma/10
    alert(`A média das notas é ${media}`)    
}

let exercicio1 = function (){
        let v = 1

        while (v <= 5){
        let A, B, C, D, aux
        A  = Number(prompt(`Inofrme o primerio valor`))
        B = Number(prompt(`Informe o segundo valor`))
        C = Number(prompt(`Informe o terceiro valor`))
        D = Number(prompt(`Informe o quarto valor`))


      
        let i = 1

        while(i <= 3 ){

        if (A > B){ // troca a com b
            aux = A
            A = B
            B = aux      
        }
        if (B > C){ // troca b com c
            aux = B
            B = C
            C = aux
        }
        if (C > D){ // troca c com d
            aux = C
            C = D
            D = aux
        }        
        i++
    }
    alert(`Ordem crescente ${A} ${B} ${C} ${D} e a ordem decrescente é ${D} ${C} ${B} ${A}`)
        v++
    }

}

let exercicio2 = function (){
    let qtde = 120
    let lucro
    let saida = ""
    let MaiorLucro = 0 
    let MaiorQtde = 0
    MaiorPreco = 0
    for(let preco = 5.0; preco >= 1.0; preco = preco - 0.5){

        lucro = (preco * qtde) - 200

        if (lucro > MaiorLucro){
            MaiorLucro = lucro
            MaiorQtde = qtde
            MaiorPreco = preco
        }
        saida = saida + ` <tr> <td> R$: ${preco.toFixed(2)} </td> <td> ${qtde} </td>  <td> R$: 200 </td> <td> R$: ${lucro.toFixed(2)} </td> </tr>`
        qtde = qtde + 26
    }
    document.getElementById("corpo").innerHTML = saida
    alert(`Maior lucro ${MaiorLucro} com qtde ${MaiorQtde} com preço ${MaiorPreco}`)

}

let exercicio3 = function (){
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    let i = 1

    while(i <= 8){
    let idade = Number(prompt(`Informe a idade ${i}`))
    
    if (idade <= 15){
        f1++
    }
    else if (( idade > 15) && (idade <= 30)){
        f2++
    }
    else if ((idade > 30) && (idade <= 45)){
        f3++
    }
    else if ((idade > 45) && (idade <= 60)){
        f4++
    }
    else { // > 60
        f5++
    }
    i++ // precisa colocar, senao o programa roda pra sempre
    }
    
    alert(`Faixa 1 ${f1} \nFaixa 2 ${f2} \nFaixa 3 ${f3} \nFaixa 4 ${f4} \nFaixa 5 ${f5} \n%F1 ${f1/8*100} \n%F5 ${f5/8*100}`)

}
let exercicio6 = function (){
    let valor
    let tipo
    let totalprazo = 0
    let totalavista = 0
    
    for(let i =1;i<=15;i++){
        valor = Number(prompt(`Informe o valor da transação ${i}`))
        tipo = prompt(`Informe o tipo (V para á vista e P para á prazo) da transação ${i}`).toUpperCase()
        if (tipo == 'V'){// a vista
            totalavista = totalavista + valor
        }
        else if (tipo == 'P'){
            totalprazo = totalprazo + valor
        }

    }
    //soma os totais

    let totalgeral = totalprazo + totalavista
    //primeira parcela do total a prazo

    let parcela = totalprazo / 3

    alert(`Total a vista ${totalavista} - Total a prazo ${totalprazo} - Total geral ${totalgeral} - Valor primeira parcela ${parcela}`)

}
let exercicio21 = function (){
    let voto;
    let qtde1 = 0; let qtde2 = 0;let qtde3 = 0; let qtde4 = 0; let qtdeBranco = 0; let qtdeNulo = 0
    voto = Number(prompt(`Informe um voto`))
    do {
        switch (voto){
            case 1: qtde1++
                    break
            case 2: qtde2++
                    break
            case 3: qtde3++
                    break
            case 4: qtde4++
                    break
            case 5: qtdeNulo++
                    break
            case 6: qtdeBranco++
                    break                                        
        }
        voto = Number(prompt(`Informe um novo voto. Digite 0 para encerrar a votação`))
    }
    while (voto != 0 )

    let total = qtde1 + qtde2 + qtde3 + qtde4 + qtdeBranco + qtdeNulo 
    console.log(` Cand1 ${qtde1} - Cand2 ${qtde2} - Cand3 ${qtde3} - Cand4 ${qtde4} `)
    console.log(` Votos nulos ${qtdeNulo} - Percentual de votos nulos ${qtdeNulo/total*100} `)
    console.log(` Votos em branco ${qtdeBranco} - Percentual de votos em brancos ${qtdeBranco/total*100} `)
}

// programção funcional 
// a nossa função é uma variavel
// let * variavel* =  function(){}
// programação estrutural é a outra forma 

let exercicio23 = function (){
    let opcao // recebe opçao do usuario
    // vamos oferecer um menu de opçoes 
    let salario // recebe salario
    do{
        opcao = Number(prompt(`Digite \n 1. Novo Salário \n 2. Férias \n 3. Décimo terceiro \n 4. Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o salário `))
                    if (salario < 2100){
                        alert(`Novo salário ${salario + salario*15/100}`)
                    }
                    else if ((salario > 2100) && (salario <= 6000)){
                        alert(`Novo salario ${salario + salario*10/100}`)
                    }
                    else {
                        alert(`Novo salário ${salario + salario*5/100}`)
                    }
                   break
            case 2: salario = Number(prompt(`Informe o salário `))
                    alert(`O valor das férias é ${salario + 1/3*salario}`)
                   break
            case 3: salario = Number(prompt(`Informe o salário `))
                    let meses = Number(prompt(`Informe quantos meses foram trabalhados`))
                    let decimoterceiro = salario * meses/12
                    alert(`Décimo Terceiro é ${decimoterceiro}`)
                   break
            case 4: alert(`O programa será encerrado.
            `)
                   break
            default: alert(`Opção invalida. Tente novamente!!!`)
        }
    }

    while( opcao != 4 )
        

}