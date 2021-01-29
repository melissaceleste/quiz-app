console.clear()

const pagehome = document.querySelector('[data-js=pagehome]')
const pagebookmark = document.querySelector('[data-js=pagebookmark]')
const pagecreate = document.querySelector('[data-js=pagecreate]')
const pageprofile = document.querySelector('[data-js=pageprofile]')

const iconhome = document.querySelector('[data-js=iconhome]')
const iconbookmark = document.querySelector('[data-js=iconbookmark]')
const iconcreate = document.querySelector('[data-js=iconreate]')
const iconprofile = document.querySelector('[data-js=iconprofile]')

const bookmarkIcons = document.querySelectorAll('[data-js="bookmarkicon"]')
const activeBookmarkIcons = document.querySelectorAll(
  '[data-js="activeBookmarkIcon"]'
)

const cards = document.querySelectorAll('[data-js="card"]')
const formContainer = document.querySelector('[data-js="formContainer"]')
const focusedInput = document.querySelector('[data-js="focusedInput"]')
const formCards = formContainer.querySelectorAll('[data-js="formCard"]')
const submitButton = document.querySelector('[data-js="submitButton"]')
const submitText = document.querySelector('[data-js="submitText"]')

iconhome.addEventListener('click', () => {
  pagehome.hidden = false
  pagebookmark.hidden = true
  pagecreate.hidden = true
  pageprofile.hidden = true

  iconhome.classList.add('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconbookmark.addEventListener('click', () => {
  pagehome.hidden = true
  pagebookmark.hidden = false
  pagecreate.hidden = true
  pageprofile.hidden = true

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.add('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconcreate.addEventListener('click', () => {
  pagehome.hidden = true
  pagebookmark.hidden = true
  pagecreate.hidden = false
  pageprofile.hidden = true

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.add('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconprofile.addEventListener('click', () => {
  pagehome.hidden = true
  pagebookmark.hidden = true
  pagecreate.hidden = true
  pageprofile.hidden = false

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.add('active-icon')
})

bookmarkIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('activebookmark')
  })
})

cards.forEach(card => {
  const buttonShowAnswer = card.querySelector('[data-js="buttonShowAnswer"]')
  const answer = card.querySelector('[data-js="answer"]')

  buttonShowAnswer.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

formContainer.addEventListener('submit', event => {
  event.preventDefault()
  formContainer.reset()
})

formCards.forEach(formCard => {
  const formInput = formCard.querySelector('[data-js="formInput"]')
  const counter = formCard.querySelector('[data-js="counter"]')

  formInput.addEventListener('input', () => {
    const textLength = formInput.value.length
    counter.innerHTML = formInput.maxLength - textLength
  })
})

submitButton.addEventListener('click', () => {
  submitText.hidden = false
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
/* iconhome.addEventListener('click', () => {
  pagehome.classList.remove('hidden')
  pagebookmark.classList.add('hidden')
  pagecreate.classList.add('hidden')
  pageprofile.classList.add('hidden')

  iconhome.classList.add('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconbookmark.addEventListener('click', () => {
  pagehome.classList.add('hidden')
  pagebookmark.classList.remove('hidden')
  pagecreate.classList.add('hidden')
  pageprofile.classList.add('hidden')

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.add('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconcreate.addEventListener('click', () => {
  pagehome.classList.add('hidden')
  pagebookmark.classList.add('hidden')
  pagecreate.classList.remove('hidden')
  pageprofile.classList.add('hidden')

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.add('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconprofile.addEventListener('click', () => {
  pagehome.classList.add('hidden')
  pagebookmark.classList.add('hidden')
  pagecreate.classList.add('hidden')
  pageprofile.classList.remove('hidden')

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.add('active-icon')
}) */

/* inputQuestion.addEventListener('input', () => {
  const textLength = inputQuestion.value.length
  counter.innerHTML = 100 - textLength
})
 */
