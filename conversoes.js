// tipo de dado
// boelanos

// conersão implícita

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString) // compara valor e tipo

console.log(numero == numeroString) // compara valor

console.log(numero + numeroString) // contatena numero e string 

// conversão explíicta
// Number()
// String()

console.log(numero + Number(numeroString)) // String to Number

console.log(String(numero) + numeroString) // Number to String

const stringzinha = "ABC123"

console.log(Number(stringzinha));