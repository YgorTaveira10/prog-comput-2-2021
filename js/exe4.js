function mp() {
    //entrada de dados
    // sintaxe para declarar variavel em JS
    // let nome_variavel 
    // convereter texto para numero
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    //processamento
    let media = ((nota1 * 2) + (nota2 * 3)) / ( 2 + 3 )

    //saida de dados
    //innerHTML permite colocar conteudo dentro do elemento 
    //se a função é chamada por uma variavel, o nome começa com minúsculo 

    document.getElementById("resultado").innerHTML = media.toFixed(2) 

}