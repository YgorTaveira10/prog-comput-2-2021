            /* Java Scritp */
            function viagem(){
                //entrada de dados 
                //pedagio1 pedagio2 combustivel
                //Number() -> converte texto em numnero
                let pedagio1 = Number(document.getElementById("pedagio1").value)
                let pedagio2 = Number(document.getElementById("pedagio2").value)
                let combustivel = Number(document.getElementById("combustivel").value)
                //processamento
                let gasto = pedagio1 + pedagio2 + combustivel 
                alert(` O gasto com a viagem foi de ${gasto}`)
            }