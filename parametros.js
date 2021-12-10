//Parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 2));

// Parâmetros x argumentos

// ordem dos parametros 

function nomeIdade(nome, idade) {
    return `Meu nome meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(20, "Gabriel"))
console.log(nomeIdade("Gabriel", 20))

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(2, 3), soma(4, 5)));