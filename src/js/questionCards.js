import getAllByDataJs from './getAllByDataJs.js'
import getByDataJs from './getByDataJs.js'

export default function questioncards() {
  const cards = getAllByDataJs('card')

  cards.forEach(card => {
    const buttonShowAnswer = getByDataJs('buttonShowAnswer', card)
    const answer = getByDataJs('answer', card)

    buttonShowAnswer.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
