function userName() {
    return prompt("Insira o seu nome: ")
}

function userAge() {
    return prompt("Insira a sua idade: ")
}

function printUserInfo(name, age) {
    alert(`Seja bem vindo ${name}! Você tem ${age} anos.`)
}

function codeRun() {
    nome = userName()
    idade = userAge()
    printUserInfo(nome, idade)
}

codeRun()
alert(nome)
