const form = document.getElementById('form')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('btnEnviar')
const paragrafo = document.getElementById('paragrafo')
const cadastro = document.getElementById('cadastroUsuarios')




btnEnviar.addEventListener('click', function (event) {
    event.preventDefault()

    let nome = inputNome.value
    let email = inputEmail.value

    if(nome === "" || email === "") {
        paragrafo.textContent = "Preencha os campos corretamente."
        paragrafo.style.color = "#ff0000"
        // paragrafo.classList.add('mensagem-alerta')
        // imagem.src = ""

        return
    } else {
        paragrafo.textContent = ""
    }

    alert(`Nome: ${nome}\nEmail: ${email}`)

    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <p> Email: ${email} </p>
    `
    cadastro.append(card)

    form.reset()

})