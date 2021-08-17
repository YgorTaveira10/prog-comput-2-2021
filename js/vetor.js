let exercicio0 = function(){

    let vet = [] // declaração do vetor
    //entrada de dados

    for(let i=0; i<5; i++){
        vet.push(Number(prompt(`Inofrme o valor ${i+1}`)))
    }
    //processamento
    //soma 10 em todos os elementos do vetor
    for(let i=0; i<5; i++){
        vet[i] = vet[i] + 10
    }
    console.log(vet) //o comando console.log() identifica o vetor e mostra os elementos
} 
let exercicio1 = function(){
    let vet = [] // declarando vetor


    for(let i=0; i<6; i++){
        vet.push(Number(prompt(`Digite o numero ${i+1}`)))
    }
    //processamento
    let impares = [] // vetor contando numeros impares
    let pares = [] // vetor contando numeros pares
    for(let i=0; i<6; i++){ // para cada elemento do vetor
        if(vet[i] % 2 == 0){ // verifico se o num é par
            pares.push(vet[i])// insere o elemento par no vetor pares 
        }
        else{
            impares.push(vet[i]) // insere o elemento impar no vetor impar
        }
    } 
    console.log(`Os valores pares são ${pares} e a qauntidade deles é ${pares.length}`)
    console.log(`Os valores impares são ${impares} e a qautidade deles é ${impares.length}`)
}

//up na empregabilidade 
//arrow function ou função com seta () =>
//ecma Script 6 - ES6 (troque a palavra function por uma seta => )

let exercicio4 = () => {

    let vet = []
    //entrada de dados

    for(let i=0; i<15; i++){
        vet.push(Number(prompt(`Digite um numero ${i+1}`)))
    }
    //processamento

    let posicao30 = []

    for(let i=0; i<15; i++){
        if (vet[i] == 30)
            posicao30.push(i) // guarda a posição i e não o 30 - vet[i]
        }

        console.log(`As posições onde aparecem o numero 30 são ${posicao30}`)
}

let exercicio5 = () => {
    let log = []
    let prog = []

    //entrada de dados 

    for( let i=0; i<15; i++){
        log.push(Number(prompt(`Digite o codigo do ${i+1}° aluno de Lógica `)))
    }    
    for (let j=0; j<10; j++){
        prog.push(Number(prompt(`Digite o codigo do ${j+1}° aluno de Ling. de Programação `)))
    }  
    
    //interseccao
    let interseccao = []
    for (let i=0; i<15; i++){
        for(let j=0; j<10; j++){
            if (log[i] == prog[j]){
               interseccao.push(log[i])  
            }             
        }
    }
    console.log(`Os alunos que fazem os dois curso são ${interseccao}`)

}

let exercicio3 = () => {

    let vet1 = []
    let vet2 = []

    //entrada de dados

    for( let i=0; i<10; i++){
        vet1.push(prompt(` Informe o codigo do produto `))    
        vet2.push(Number(prompt(`Informe o estoque do ${vet1[i]} produto`)))
    }    

    //faremos as compras
    let codigocliente = Number(prompt(`Informe o codigo do cliente`))
    do{
    //pede cod. para compra
    let codigo = prompt(`Informe o codigo do produto para compra`)
    //verifica se o codigo existe
    for(let i=0; i<10; i++){
        if(vet1[i] == codigo){
            achou = true
            // se existe, pede qtde para comprar
            let qtde = Number(prompt(`Informe a qtde para comprar`))
            if(qtde <= vet2[i]){
                //se tem em estoque, atualiza-o
                vet2[i] = vet2[i] - qtde
            }
            else {
                alert(`Infelizmente não temos o produto em estoque`)
            }
        }
    }
    if(achou == false){
        alert(`O codigo não existe`)

    }
        codigocliente = Number(prompt(`Informe o codigo do cliente para proxima compra. Informe 0 para cancelar`))
    }
    while(codigocliente != 0)

    console.log(`O valor do estoque é ${vet2}`)


}
let exercicio6 = () => {
    let vendas = [] // total de vendas de cada vendedor
    let percentuais = [] // percentual de comissão de cada vendedor
    let nomes = [] // nome de cada vendedor

    // entrada de dados

    for(let i=0; i<3; i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        percentuais.push(Number(prompt(`Informe o percentual de comissão de vendas do vendedor ${i+1}`)))

    }

    //processamento
    
    let comissoes = [] // valor a receber de comissao
    let totalvendas = 0 // total vendido pelos vendedores
    let maiorComissao = 0 // inicia com o primeiro vendedor
    let nomeMaiorComissao = "" // inicia vazio
    let menorComissao = 100000 // inicia com um numero bem grande
    let nomeMenorComissao = "" // inicia vazio

    for (let i=0; i<3; i++){
        comissoes[i] = (vendas[i] * percentuais[i]/100)
        if (comissoes[i] > maiorComissao){ //verifica se a comissao é maior que maior comissao
            maiorComissao = comissoes[i]
            nomeMaiorComissao = nomes[i]
        }
        if (comissoes[i] < menorComissao){ //verifica se a comissao é menor que a menor comissao
            menorComissao = comissoes[i]
            nomeMenorComissao = nomes[i]
        }
        totalvendas = totalvendas + vendas[i] //acumula total de vendas        
    }
    //apresenta os resultados no console do navegador

    console.log(`Total de vendas ${totalvendas}`)
    console.log(`Comissões a receber ${comissoes}`)
    console.log(`Maior comissão ${maiorComissao} do vendedor ${nomeMaiorComissao}`)
    console.log(`Menor comissão ${menorComissao} do vendedor ${nomeMenorComissao}`)
}
let prova = () => {
   
    let voto;
    // varias = 0 pois vai somalas 
    let AVA = 0; let papel = 0; let WhatsApp = 0; let email = 0; let tantofaz = 0
    //entrada de votos
    voto = Number(prompt(`Informe um voto`))  
    do {
        switch (voto){
            case 1: AVA++
                     break
            case 2: papel++
                    break
            case 3: WhatsApp++
                     break
            case 4: email++
                     break
            case 5: tantofaz++
                    break                                       
            }
            voto = Number(prompt(`Informe um novo voto. Digite 0 para encerrar a votação`))
        }
        while (voto != 0 )
        //calcular o total de votos
        let total = AVA + papel + WhatsApp + email + tantofaz 
        //calcular a porcentagem
        let porcentagem = tantofaz / total*100

        //mostrar no console do navegar
        console.log(`Total de votos para ser pelo Ava: ${AVA}`)
        console.log(`Total de votos para ser por papel ${papel}`)
        console.log(`Total de votos para ser pelo Whatsapp: ${WhatsApp}`)
        console.log(`Total de votos para ser por email ${email}`)
        console.log(`Tanto faz ${tantofaz}`) 
        console.log(`Porcentagem de votos que Tanto faz é: ${porcentagem}%`)
        
        let i = 0
        while ( i <= 4){
        if (AVA > papel){ // troca AVA com papel
            aux = AVA
            AVA = papel
            papel = aux      
        }
        if (papel > WhatsApp){ // troca paepl com whatsapp
            aux = papel
            papel = WhatsApp
            WhatsApp = aux
        }
        if (WhatsApp > email){ // troca whatsapp com email
            aux = WhatsApp
            WhatsApp = email
            email = aux
        }
        if (email > tantofaz){ // troca email com tantofaz
            aux = email
            email = tantofaz
            tantofaz = aux
        }        
        i++
    }
    //para mostra no console
        console.log(`ordem decrescente é ${tantofaz} ${email} ${WhatsApp} ${papel} ${AVA}`)


}
let prova2 = () => {

//declaração de vetor

let nomes = [] // nome do atleta
let media = [] // media de pontos

//entrada de dados-

for (let i=0; i<4; i++){
    nomes.push(prompt(`Informe o nome do atleta ${i+1}`))
    media.push(Number(prompt(`Informe a média de pontos do ${i+1}° atleta`)))
}

//processamento

let mediapontos = 0 // inicia com 0 pois vai somar de todos
let nomejogadormaispontos = "" // inicia vazio
let maiorpontos = 0 // inicia com 0
let pontospares =[]

for (let i=0; i<4; i++){
    mediapontos = mediapontos + media[i]
    if (media[i] > maiorpontos){
        maiorpontos = media[i]
        nomejogadormaispontos = nomes[i]
    }
    if (media[i] % 2 == 0){
        pontospares[i] = nomes[i]
    }   
}
// mostrar no console do navegador 

console.log(`A média de pontos do time foi ${mediapontos/12}`)
console.log(`O nome do jogador que mais pontou é ${nomejogadormaispontos} e seus pontos foram ${maiorpontos}`)
console.log(`O nome dos jogadores que fizeram pontos pares é ${pontospares}`)

}
