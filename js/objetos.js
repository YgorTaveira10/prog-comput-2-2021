


// criação de objeto

let console1 = new Object()
console1.marca = "Sony"
console1.modelo = "PlayStation5"
console1.lançamento = 2020
console1.controle = "Dualshock"
console1.preco = 4499

console.log(console1)

let console2 = new Object()
console2.marca = "Microsoft"
console2.modelo = "Xbox One S"
console2.lançamento = 2019
console2.controle = "Joystick"
console2.preco = 4000

console.log(console2)


let time1 = {
    nome: "Corinthians",
    mundiais: 2,
    aplido: "Timão",
    localizacao: "SP",
    torcedores: 100000
}

console.log(time1)

let time2 = {
    nome: "Santos",
    mundiais: 3,
    aplido: "Peixe",
    localizacao: "SP",
    torcedores: 3
}

console.log(time2)

let camisa1 = {
    marca: "Nike",
    modelo: "Dri-fit",
    lancamento: 2019,
    preco: 200
}

console.log(camisa1)


let nuvem1 = new Object()

nuvem1["local"] = "Amazon"
nuvem1["disco"] = "rigido"
nuvem1["ram"] = "1terá"

console.log(nuvem1)


// cria vetores com objetos
//A
let vetor = []

for(let i=0; i<4; i++){
    //cria objeto

    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        qtde: Number(prompt(`Informe a qtde do produto`)),
        preco: Number(prompt(`Informe preço do produto`))
    }
    // adiciona o objeto no vetor
    vetor.push(objeto)
}


// calcula a média dos produtos
let soma = 0 


for(let i=0; i<4; i++){

    soma = soma + vetor[i].preco   

}

console.log(`A média é de ${soma/4}`)



