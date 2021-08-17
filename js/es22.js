function verificar(){
    //recuperar dados
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)

    let risco
    //switch cas é para casos e igualdade e nao de > e  < 
    if  (idade < 20 ){
        if(peso < 60){
        risco = 9
        }
        else if ((peso >= 60) && (peso <= 90)){
            risco = 8
        }
        else{
            risco = 7
        }        
    }
    else if (( idade >= 20) && (idade <= 50)){
        if(peso < 60){
            risco = 6
            }
            else if ((peso >= 60) && (peso <= 90)){
                risco = 5
            }
            else{
                risco = 4
            }                      
    }
    else { // certeza que idade é maior q 50
         if (peso < 60){
            risco = 3
        }
        else if ((peso >= 60) && (peso <= 90)){
            risco = 2
        }
        else {
            risco = 1
        }
    }
    document.getElementById("resultado").innerHTML = `O risco  é de ${risco}`        
}