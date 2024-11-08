import CardMover from "./dnd"
export default class Form {
    constructor (colon){
        this.colon = colon
        this.buttonOK
        this.buttonExit
        this.form
        this.textArea
        this.createForm = this.createForm.bind(this)
        this.saveCard = this.saveCard.bind(this)
        this.colon.querySelector('.colon-bottom').addEventListener('click', () => this.createForm())
        
    }
    createForm() {
        if (this.form){
            return
        }
        const cardContainer = this.colon.querySelector('.card-container')
        this.form = document.createElement('form')
        this.form.classList.add('form')
        this.textArea = document.createElement('textarea')
        this.textArea.classList.add('input-text-area')
        this.form.append(this.textArea)
        this.buttonOK = document.createElement('input')
        this.buttonOK.type = 'button'
        this.buttonOK.value = 'Add Card'
        this.buttonOK.classList.add('button')
        this.form.append(this.buttonOK)
        this.buttonExit = document.createElement('input')
        this.buttonExit.type = 'button'
        this.buttonExit.value = 'Exit'
        this.buttonExit.classList.add('button')
        this.form.append(this.buttonExit)
        cardContainer.append(this.form)
        this.buttonOK.addEventListener('click', this.saveCard)
        this.buttonExit.addEventListener('click', (e) => {
            e.preventDefault()
            this.form.remove()
            this.form = undefined
        })
    }

    saveCard(e){
        e.preventDefault()
        const cardContainer = this.colon.querySelector('.card-container')
        const card = document.createElement('div')
        const del = document.createElement('div')
        del.classList.add('del')
        card.classList.add('card')
        card.textContent = this.textArea.value
        card.append(del)
        cardContainer.append(card)
        this.form.remove()
        this.form = undefined
        const cardMover = new CardMover(card)
        card.addEventListener('mousedown', cardMover.moveCard)
        del.addEventListener('click', (e) => {
            e.stopPropagation()
            card.remove()})
    }
}