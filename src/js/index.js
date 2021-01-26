console.log('hello world')

const pagehome = document.querySelector('[data-js=pagedocument]')
const pagebookmark = document.querySelector('[data-js=pagebookmark]')
const pagecreate = document.querySelector('[data-js=pagecreate]')
const pageprofile = document.querySelector('[data-js=pageprofile]')

const iconhome = document.querySelector('[data-js=iconhome]')
const iconbookmark = document.querySelector('[data-js=iconbookmark]')
const iconcreate = document.querySelector('[data-js=iconreate]')
const iconprofile = document.querySelector('[data-js=iconprofile]')

iconhome.addEventListener('click', () => {
  pagehome.classList
    .remove('hidden')
    [(pagebookmark, pagecreate, pageprofile)].forEach(page => {
      page.classList.add('hidden')
    })
})

iconbookmark.addEventListener('click', () => {
  pagehome.classList.add('hidden')
  pagebookmark.classList.remove('hidden')
  pagecreate.classList.add('hidden')
  pageprofile.classList.add('hidden')
})

iconcreate.addEventListener('click', () => {
  pagehome.classList.add('hidden')
  pagebookmark.classList.add('hidden')
  pagecreate.classList.remove('hidden')
  pageprofile.classList.add('hidden')
})

iconprofile.addEventListener('click', () => {
  pagehome.classList.add('hidden')
  pagebookmark.classList.add('hidden')
  pagecreate.classList.add('hidden')
  pageprofile.classList.remove('hidden')
})
