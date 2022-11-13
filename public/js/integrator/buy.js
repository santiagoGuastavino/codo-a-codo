const cards = [
  {
    target: 'Estudiante',
    text1: 'Tienen un descuento',
    percentage: '80%',
    text2: '* presentar documentación'
  },
  {
    target: 'Trainee',
    text1: 'Tienen un descuento',
    percentage: '50%',
    text2: '* presentar documentación'
  },
  {
    target: 'Junior',
    text1: 'Tienen un descuento',
    percentage: '15%',
    text2: '* presentar documentación'
  }
]

const cardHolder = document.querySelector('section.int-buy-cards')

cards.forEach((card, i) => {
  const cardArticle = document.createElement('article')
  cardArticle.id = 'article-' + i
  cardArticle.innerHTML = `
    <h3>${card.target}</h3>
    <p class="card-text-1">${card.text1}</p>
    <p class="card-percentage">${card.percentage}</p>
    <p class="card-text-2">${card.text2}</p>
  `
  cardHolder.append(cardArticle)
})

const submitButton = document.querySelector('button.button-resume')
const resetButton = document.querySelector('button.button-clear')
const quantityInput = document.querySelector('input#quantity')
const select = document.querySelector('select#category')
const printTotal = document.querySelector('div.form-total p b#print')
const printError = document.querySelector('p.print-error')

const DISCOUNT_TYPES = {
  student: 80,
  trainee: 50,
  junior: 15
}

let totalBeforeDiscount = 0
let apply = 0
let totalAfterDiscount = 0

submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  // check for errors
  if (!quantityInput.value) {
    printError.classList.add('show')
    printError.innerHTML = 'Antes de calcular, ingresá una cantidad'
  } else if (!select.value) {
    printError.classList.add('show')
    printError.innerHTML = 'Antes de calcular, elegí una categoría'
  } else {
    // remove printed errors (if any)
    printError.classList.remove('show')
    printError.innerHTML = ''

    // find out total without discount
    totalBeforeDiscount = quantityInput.value * 200

    // which discount should be applied?
    switch (select.value) {
      case 'student':
        apply = DISCOUNT_TYPES.student
        break
      case 'trainee':
        apply = DISCOUNT_TYPES.trainee
        break
      case 'junior':
        apply = DISCOUNT_TYPES.junior
        break
      default:
        break
    }

    totalAfterDiscount = totalBeforeDiscount * ((100 - apply) / 100)
    totalAfterDiscount = totalAfterDiscount.toFixed(2)

    printTotal.innerHTML = totalAfterDiscount
  }
})

resetButton.addEventListener('click', () => {
  printError.classList.remove('show')
  printError.innerHTML = ''
  printTotal.innerHTML = ''
})
