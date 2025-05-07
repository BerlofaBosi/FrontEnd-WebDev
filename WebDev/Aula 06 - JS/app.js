// Funções!

function soma(num1, num2 = 0) {
    return num1 + num2
}

soma(68)

// ----------------------------------------
let nome = "Arthur"

console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.includes("@"))
console.log(nome.trim())

let numero = 5

console.log(numero.toFixed(2))
console.log(isNaN(numero))

console.log(Math.floor(Math.random() * 11)) // Arredonda para cima
console.log(Math.ceil(Math.random() * 11)) // Arredonda para baixo
console.log(Math.round(Math.random() * 11)) // Arredonda comum

let dataAtual = new Date()
console.log(dataAtual)
console.log(dataAtual.getMonth())
