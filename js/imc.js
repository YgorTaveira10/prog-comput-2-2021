            /* Java Scritp */
            function organizar(){ /* usamos function para organizar */
                // vamos recuperar o peso digitado pelo usuario 
                // document -> representa o documento html
                //getElementById("peso") -> recupera a caixa de texto
                // .value -> recupera o valor dentro da caixa de texto
                // let peso -> declarando uma variavel que guarda o peso
                let peso = document.getElementById("peso").value
                // vamos recuperar a altura digitada pelo usuario 
                let altura = document.getElementById("altura").value
                // calcular e mostra o imc
                // comando de igual é de atribuição
                // a barra / significa divisão
                // * significa multiplicação
                // qnd a variavel passa por / ou *, automaticamente ocorre a conversao
                let imc = peso / (altura * altura)
                alert(`O valor do imc é de ${imc.toFixed(2)} `) // é o mais novo
            }