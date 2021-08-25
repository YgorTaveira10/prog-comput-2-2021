let gerenciaRedesSociais = () => {
    // cadastro das redes sociais 
    let vetorRedesSociais = []
    for (let i=0; i<5; i++)
    {
        let objeto = {
            codigo: Number(propmt(`Informe o codigo da Rede Social`)),
            nome: propmt(`Informe seu nome`),
            url: prompt(`Informe url da rede social`)
        }
        //inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }

    // cadastro dos usuarios
    let vetorUsuarios = []
    for (let i=0; i<5; i++){
        let objeto = {
            login: prompt(`Informe o login do usuario`),
            nome: prompt(`Informe o nome do usuario`),
            codigoRedeSocial: Number(prompt(`Informe o codigo da rede social`)),
            qtdePosts: Number(prompt(`Informe a qtde de Posts`))
        }
        // so faremos isso se a rede social existir
        let achou = false // assumo que nao encontrei a rede
        let j = 0 // indice do vetor das redes
        while (!achou && j<5){ // sai porque ou achou ou acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
                vetorUsuarios.push(objeto) //inserimos
                achou = true
                alert(`Usuario inserido com sucesso`)
            }
            j++
        }
        if (!achou){
            alert(`Rede social não encontrada`)
        }
        
    }
    //ex1 o usuario informa a rede social e o programa retorna quantos posts foram feitos

    let codigo = Number(prompt(`Informe o codigo da rede social`))
    //percorre o vetor procurando
    let conta = 0
    for(let i=0; i<5; i++) // percorre vetor usuarios
    {
       if(vetorUsuarios[i].codigoRedeSocial == codigo){// encontrei
       conta = conta + vetorUsuarios[i].qtdePosts
       }
    }
    if (conta == 0){
        console.log(`Não houve nenhuma postagem ou rede social não existe`)
    }
    else {
        console.log(`A qdte de post na rede social ${codigo} foi ${conta}`)
    }
    //ex2 o programa retorna quantos posts foram feitos em todas as redes sociais

    for(let i=0; i<5; i++) // para cada rede social
    {
        let conta = 0
        for( let j=0; j<5; j++)
        {
            if (vetorRedesSociais[i].codigo == vetorUsuarios[j].codigoRedeSocial){
                conta = conta + vetorUsuarios[i].qtdePosts
            }
        }
        // terminou de somar os posts de uma rede social
        console.log(`A qtde de post da rede social ${vetorRedesSociais[i].codigo} é ${conta}`)

    }
    //ex3 o usuario informa o login do usuario, e o programa retorna quantos posts ele fez
    // solicita o usuario informar o login

    let login = prompt(`Informe o login do usuario desejado`)
    //procura o login no vetor de usuarios
    let somaPosts = 0 
    let achou = false // nao encontrei o usuario
    for (let i =0; i<5; i++)
    {
        if (login == vetorUsuarios[i].login){// achei o usuario procurado
              somaPosts = somaPosts + vetorUsuarios[i].qtdePosts
              achou =  true // achou o usuario
        }
    }
    if (achou){
        alert(`O usuario com login ${login} realizou ${somaPosts}`)
    }
    else {
        alert(`Usuario não encontrado`)
    }

    //ex4 o programa retorna quantos posts foram feitos por cada usuario
    let vetorusuariosPosts = []
    for (let i=0; i<5; i++) //para cada usuario do vetor
    {
        let achou = false // nao achou
        for(let j=0; j<vetorusuariosPosts.length; j++)
        {
            if (vetorUsuarios[i].login == vetorusuariosPosts.login)
            {
                //soma a qtde de posts do usuario
                vetorusuariosPosts[j].qtde = vetorusuariosPosts[j].qtde + vetorUsuarios[i].qtdePosts
                achou = true
            }
        }
        //usuario ainda nao existe no vetor vetorusuarioPosts, entao vamos criar
        if (!achou){
            vetorusuariosPosts.push({
                login: vetorUsuarios[i].login,
                qtde: vetorUsuarios[i].qtdePosts

            })
        }
    }
    console.log(vetorusuariosPosts)
}