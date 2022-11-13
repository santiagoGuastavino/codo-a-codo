// this prevents page reload when submitting form
window.addEventListener('load', () => {
  const form = document.querySelector('.int-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })
})
