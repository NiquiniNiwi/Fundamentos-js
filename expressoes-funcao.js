// declaração de função

function func(param) {
    //bloco de código
}

func("param")

//expressão de função

const soma = function(num1, num2) { // anonima
    return num1 + num2
}
console.log(soma(1, 1))

// diferença principal ?????

console.log(apresetar())

function apresetar() {
    return "Olá";
}

// console.log(apresentacao()); não da pra usar function com const antes

const apresentacao = function() { return `Olá so que errado` }

console.log(apresentacao());