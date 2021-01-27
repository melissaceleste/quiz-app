console.clear()

const pagehome = document.querySelector('[data-js=pagehome]')
const pagebookmark = document.querySelector('[data-js=pagebookmark]')
const pagecreate = document.querySelector('[data-js=pagecreate]')
const pageprofile = document.querySelector('[data-js=pageprofile]')

const iconhome = document.querySelector('[data-js=iconhome]')
const iconbookmark = document.querySelector('[data-js=iconbookmark]')
const iconcreate = document.querySelector('[data-js=iconreate]')
const iconprofile = document.querySelector('[data-js=iconprofile]')

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

iconhome.addEventListener('click', () => {
  pagehome.hidden = false
  pagebookmark.hidden = true
  pagecreate.hidden = true // Boolean: true or false
  pageprofile.hidden = true

  iconhome.classList.add('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconbookmark.addEventListener('click', () => {
  pagehome.hidden = true
  pagebookmark.hidden = false
  pagecreate.hidden = true // Boolean: true or false
  pageprofile.hidden = true

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.add('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconcreate.addEventListener('click', () => {
  pagehome.hidden = true
  pagebookmark.hidden = true
  pagecreate.hidden = false // Boolean: true or false
  pageprofile.hidden = true

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.add('active-icon')
  iconprofile.classList.remove('active-icon')
})

iconprofile.addEventListener('click', () => {
  pagehome.hidden = true
  pagebookmark.hidden = true
  pagecreate.hidden = true // Boolean: true or false
  pageprofile.hidden = false

  iconhome.classList.remove('active-icon')
  iconbookmark.classList.remove('active-icon')
  iconcreate.classList.remove('active-icon')
  iconprofile.classList.add('active-icon')
})

const submittext = document.querySelector('[data-js=submittext]')
const submitbutton = document.querySelector('[data-js=submitbutton]')

submitbutton.addEventListener('click', () => {
  submittext.hidden = false
})
