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
    //ex2 o programa retorna quantos posts foram feitos em todas as redes sociais
    //ex3 o usuario informa o login do usuario, e o programa retorna quantos posts ele fez
    //ex4 o programa retorna quantos posts foram feitos por cada usuario
}