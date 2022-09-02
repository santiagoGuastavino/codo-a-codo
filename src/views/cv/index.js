const aside = document.querySelector('.my-aside')
const triggerDisplay = document.querySelector('.trigger-box i')
const mainSection = document.querySelector('.my-section')

triggerDisplay.addEventListener('click', () => {
  aside.classList.toggle('display')
  mainSection.classList.toggle('blur')
  if (aside.classList.contains('display')) {
    triggerDisplay.classList.remove('fa-bars')
    triggerDisplay.classList.add('fa-xmark')
  } else {
    triggerDisplay.classList.remove('fa-xmark')
    triggerDisplay.classList.add('fa-bars')
  }
})

window.addEventListener('resize', () => {
  if (
    window.matchMedia('(min-width: 768px)').matches &&
    mainSection.classList.contains('blur')
  ) {
    mainSection.classList.remove('blur')
    aside.classList.remove('display')
    triggerDisplay.classList.remove('fa-xmark')
    triggerDisplay.classList.add('fa-bars')
  }
})
