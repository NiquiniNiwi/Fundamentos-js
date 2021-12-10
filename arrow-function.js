function apresentar(nome) {
    return `Meu nome é ${nome}`
}

const apresetarArrow = nome => `Meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

// Arrow function com + de 1 linha de instrução

const somaNumPequenos = (num1, num2) => {
    if (num1 || num2 >= 10) {
        return "somente numeros de 1 a nove"
    } else {
        return num1 + num2
    }
}

// Hoisting: arrow function se comporta como expressão

// >= não é a mesma coisa que =>