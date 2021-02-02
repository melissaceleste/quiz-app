import getAllByDataJs from './getAllByDataJs.js'
import getByDataJs from './getByDataJs.js'

export default function createForm() {
  const form = getByDataJs('form')
  const formCards = getAllByDataJs('formCard', form)
  const submitText = getByDataJs('submitText')

  form.addEventListener('submit', event => {
    event.preventDefault()
    form.reset()
    submitText.hidden = false
  })

  // (submit= Typ , event= Information), nur leere Klammer (), wenn ich das Event nicht benutzen will

  formCards.forEach(formCard => {
    const formInput = getByDataJs('formInput', formCard)
    const counter = getByDataJs('counter', formCard)

    formInput.addEventListener('input', () => {
      const textLength = formInput.value.length
      counter.innerHTML = formInput.maxLength - textLength
    })
  })
}
