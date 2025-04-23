let usuarioInput = prompt("Insira o usuário: ")
let senhaInput = prompt("Insira a senha: ")

const usuario1 = "Arthur"
const senha1 = "Arthur123"

const usuario2 = "Danilo"
const senha2 = "Danilo123"

const usuario3 = "Tuco"
const senha3 = "Tuco123"

if(
    (usuarioInput === usuario1 && senhaInput === senha1) || 
    (usuarioInput === usuario2 && senhaInput === senha2) ||
    (usuarioInput === usuario3 && senhaInput === senha3)
) {
    alert("Login efetuado com sucesso!")
} else {
    alert("Usuário ou senha incorreto.")
}
