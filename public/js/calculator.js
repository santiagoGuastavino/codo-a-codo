const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const operate = document.querySelector('#operate')

const add = document.querySelector('#add')
const substract = document.querySelector('#substract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

let operation = ''

add.addEventListener('click', () => {
  operation = '+'
})

substract.addEventListener('click', () => {
  operation = '-'
})

multiply.addEventListener('click', () => {
  operation = '*'
})

divide.addEventListener('click', () => {
  operation = '/'
})

n1.addEventListener('input', () => {
  const { value } = n1
})

n2.addEventListener('input', () => {
  const { value } = n2
})

// function math (n1, n2, operation) {

//   console.log()
//   return result
// }

operate.addEventListener('click', (e) => {
  const { n1Value } = n1
  if (operation === '') {
    e.preventDefault()
  }
})
