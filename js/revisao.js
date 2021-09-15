
let sistemaImobiliaria = () => {
    let opcao
    let vetImovel = [] // vetor de imoveis

    do {
        opcao = Number(prompt(`Informe \n1. Cadastra \n2. Consulta A \n3. Consulta B \n4. Consulta C \n.5 Sair`))
        switch(opcao){
            case 1: cadastrarimoveis(vetImovel)
                    break
            case 2: let tipo = prompt(`Qual o tipo de Imovel A ou C?`).toUpperCase()
                    consultaImoveis(vetImovel, tipo)
                    break
            case 3: consultavalortotal(vetImovel)
                    break
            case 4: consultaimoveisgrandes(vetImovel)
                    break
            case 5: alert(`O programa será encerrado`)    
            default: alert(`Opção Invalida`)            
        }
    }
    while (opcao != 5)
}

let cadastrarimoveis = (vetImovel) => {
    let objeto = {
        codigo: Number(prompt(`Informe o codigo do imovel`)),
        tamanho: Number(prompt(`Digite quantos metros² possui o imovel`)),
        tipo: prompt(`Tipo do imovel: C p/ casa e A p/ apto`).toUpperCase(),
        valor: Number(prompt(`Digite o valor do imovel`))
    }
    //verificamos se não ha nenhum imovel cadastrado com o codigo
    let achou = false
    for(let i =0 ; i< vetImovel.length; i++){
        if(vetImovel[i].codigo == objeto.codigo){
            achou = true
            alert(`Codigo já existente`)
        }
    }
    if (!achou){
        vetImovel.push(objeto)
        alert(`Imóvel cadastrado com sucesso`)
    }

}

let consultaImoveis = (vetImovel, tipo) => {
    for (let i=0; i< vetImovel.length; i++){
        if(vetImovel[i].tipo == tipo){
            console.log(vetImovel[i])
        }
    }
}

let consultavalortotal = (vetImovel) => {
    let soma = 0

    for(let i=0; i<vetImovel.length; i++){
        soma = soma + vetImovel[i].valor
    }
    alert(`O valor total dos imoveis é ${soma}`)
}

let consultaimoveisgrandes= (vetImovel) => {
    for(let i=0; i<vetImovel.length; i++){
        if(vetImovel[i].tamanho > 100){
            console.log(vetImovel[i])
        }
    }
}