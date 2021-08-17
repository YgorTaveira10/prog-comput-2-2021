function calcular(){

    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let opcao = Number(document.getElementById("opcao").value)

    //calculo do resultado 
    let resultado 
    switch(opcao){
        case 1: 
                resultado = (num1 + num2) / 2
                break
        case 2: 
                if (num1 > num2){
                 resultado = num1 - num2
                }
                 else {
                resultado = num2 - num1 
                }
                break
        case 3: 
                resultado = num1 * num2
                break
        case 4: 
                if ( num2 != 0){
                 resultado = num1 / num2
                }
                else {
                 resultado = "Não pode dividir por zero !!!"
                 }
        default : resultado = "Opção invalida"
        
        alert(`O resultado é ${resultado}`)
                                        
          
    }
    if (opcao == 1){ // resultado sera média
        resultado = (num1 + num2) / 2
    }
    else if (opcao == 2){ // resultado será o maior menos o menor 
            if (num1 > num2){
                resultado = num1 - num2
            }
            else {
                resultado = num2 - num1 
            }
    }
    else if (opcao == 3){ // multiplicação
        resultado = num1 * num2 
    }
    else if (opcao == 4){
             if ( num2 != 0){
                 resultado = num1 / num2
             }
             else {
                 resultado = "Não pode dividir por zero !!!"
             }
    }
    else {
        resultado = "Opçao invalida"
        
    }
    alert(`O resultado é ${resultado}`)
}