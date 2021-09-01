let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3 Procura venda \n4. Soma Venda/vendedor \n5. Sair`))
        switch(opcao){
            case 1: let objeto = {
                        codigo: Number(prompt(`Informe código`)),
                        nome: prompt(`Informe nome`),
                        rg: prompt(`Informe rg`) // 23.646.356-1
                    }
                    // verifica se já tem outro vendedor com o mesmo código
                    let achou = false
                    // vetVendedores.length retorna o tamanho do vetor
                    for(let i=0; i < vetVendedores.length;i++){
                        if (vetVendedores[i].codigo == objeto.codigo){
                            achou = true // achei - não posso cadastrar      
                        }
                    }
                    if (!achou){
                         // adiciona objeto no vetor
                        vetVendedores.push(objeto)
                        alert(`Vendedor cadastrado com sucesso`)
                    }
                    else {
                        alert(`Vendedor já existe com este código`)	
                    }
                    console.log(vetVendedores)
                    break
            case 2: let objeto1 = {
                        codigo: Number(prompt(`Informe código do vendedor`)),
                        mes: Number(prompt(`Informe mês da venda`)),
                        valor: Number(prompt(`Informe o valor da venda`)) 
                    }
                    let achou1 = false
                    for(let i=0;i<vetVendas.length;i++){
                        // nao podemos cadastrar duas vendas para o mesmo vendedor no mesmo mes
                        if ((vetVendas[i].codigo == objeto1.codigo) && (vetVendas[i].mes == objeto1.mes)){
                            achou1 = true // encontrei - não podemos cadastrar venda
                        }
                    }
                    if (!achou1){
                        vetVendas.push(objeto1)
                    }
                    else {
                        alert(`Já existe vende deste vendedor neste mês`)
                    }
                    console.log(vetVendas)
                    break
            case 3: let codigo = Number(prompt(`Informe o codigo do vendedor`))
                    let mes = Number(prompt(`Informe o mês da venda`))
                    // percorre o vetor do vendas
                    let achou3 = false
                    for (let i=0; i<vetVendas.length; i++){
                        if ((vetVendas[i].codigo == codigo) && (vetVendas[i].mes == mes)){
                            console.log(`O valor da venda do funcionario ${codigo} no mes ${mes} foi ${vetVendas[i].valor}`)
                            achou = true
                        }                        
                    }
                    if (!achou3){
                        console.log(`Venda não encontrada para este funcionario neste mes`)
                    }
                    break
            case 4: let codigo4 = Number(prompt(`Informe o codigo do vendedor`))
                    // percorre o vetor de vendas
                    let soma = 0
                    let achou4 = false
                    for(let i=0; i<vetVendas.length; i++){
                        if(vetVendas[i].codigo == codigo4){
                            soma = soma + vetVendas[i].valor
                            achou4 = true
                        }
                    }
                    if (soma == 0){
                        console.log(`Venda não encontrada para este funcionario, ou venda igual a 0`)
                    }
                    else {
                        console.log(`O total de vendas do vendedor ${codigo} foi ${soma}`)
                    }
                    break
            case 5: let mes5 = Number(prompt(`Informe o mes de interesse`))
                    let maiorvalor = 0
                    let vendedorMaisVendeu = 0
                    for(let i=0; i<vetVendas.length; i++){
                        if ( vetVendas[i].mes == mes5){
                            if(vetVendas[i].valor > maiorvalor){
                                maiorvalor = vetVendas[i].valor // atualiza seu valor
                                vendedorMaisVendeu = vetVendas[i].codigo
                            }
                        }
                    }
                    console.log(`O vendedor que mais vendeu foi ${vendedorMaisVendeu} com ${maiorvalor}`)
                    break                
            case 6: alert(`O programa será encerrado`) 
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 6)
}