const n1Input = document.querySelector('#n1')
const n2Input = document.querySelector('#n2')
const resultInput = document.querySelector('#result')

const visorInput1 = document.querySelector('#visor-1')
const visorInput2 = document.querySelector('#visor-2')
const visorInput3 = document.querySelector('#visor-3')

const operateButton = document.querySelector('#operate')
const addButton = document.querySelector('#add')
const substractButton = document.querySelector('#substract')
const multiplyButton = document.querySelector('#multiply')
const divideButton = document.querySelector('#divide')

const errorBox = document.querySelector('#calculator-error-box')

let operation = ''

addButton.addEventListener('click', () => {
  operation = 'add'
  visorInput2.value = '+'
  clearError('operationButton')
})

substractButton.addEventListener('click', () => {
  operation = 'substract'
  visorInput2.value = '-'
  clearError('operationButton')
})

multiplyButton.addEventListener('click', () => {
  operation = 'multiply'
  visorInput2.value = 'x'
  clearError('operationButton')
})

divideButton.addEventListener('click', () => {
  operation = 'divide'
  visorInput2.value = '/'
  clearError('operationButton')
})

n1Input.addEventListener('input', () => {
  visorInput1.value = n1Input.value
})

n2Input.addEventListener('input', () => {
  visorInput3.value = n2Input.value
})

const errors = []

operateButton.addEventListener('click', (e) => {
  e.preventDefault()

  const n1Value = parseInt(n1Input.value)
  const n2Value = parseInt(n2Input.value)

  let result = 0

  if (!n1Value || !n2Value) {
    errors.push('Ingrese un número en cada campo')
  }

  if (operation === '') {
    errors.push('Haga click en una operación')
  }

  if (!errors.length) {
    switch (operation) {
      case 'add':
        result = n1Value + n2Value
        break
      case 'substract':
        result = n1Value - n2Value
        break
      case 'multiply':
        result = n1Value * n2Value
        break
      case 'divide':
        result = n1Value / n2Value
        break
      default:
        break
    }

    resultInput.value = result
    n1Input.value = ''
    n2Input.value = ''
  } else {
    errorBox.innerHTML = ''
    printError(errors)
  }
})

function printError (errors) {
  const errorSet = new Set(errors)
  errorSet.forEach((error, i) => {
    const span = document.createElement('span')
    span.id = i
    span.textContent = error
    errorBox.append(span)
  })

  errorBox.classList.add('show')
}

window.addEventListener('load', () => {
  n1Input.focus()
})

function clearError (errorToClear) {
  if (errorToClear === 'operationButton') {
    errors.filter(error => error === 'Haga click en una operación')
  }
}
