import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
    //adicionar uma escuta para verificar o botão de marcar como lido
    button.addEventListener("click", handleClick)

})


//Quando o botão delete for clicado ele abri a modal
const deleteButton = document.querySelectorAll(".actions a.trash")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text}`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} está pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //Abri modal
    modal.open()
}

