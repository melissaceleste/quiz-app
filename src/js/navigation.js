import getByDataJs from './getByDataJs.js'

export default function navigation() {
  const pageHome = getByDataJs('pagehome')
  const pageBookmark = getByDataJs('pagebookmark')
  const pageCreate = getByDataJs('pagecreate')
  const pageProfile = getByDataJs('pageprofile')

  const iconHome = getByDataJs('iconhome')
  const iconBookmark = getByDataJs('iconbookmark')
  const iconCreate = getByDataJs('iconreate')
  const iconProfile = getByDataJs('iconprofile')

  iconHome.addEventListener('click', () => {
    pageHome.hidden = false
    pageBookmark.hidden = true
    pageCreate.hidden = true
    pageProfile.hidden = true

    iconHome.classList.add('active-icon')
    iconBookmark.classList.remove('active-icon')
    iconCreate.classList.remove('active-icon')
    iconProfile.classList.remove('active-icon')
  })

  iconBookmark.addEventListener('click', () => {
    pageHome.hidden = true
    pageBookmark.hidden = false
    pageCreate.hidden = true
    pageProfile.hidden = true

    iconHome.classList.remove('active-icon')
    iconBookmark.classList.add('active-icon')
    iconCreate.classList.remove('active-icon')
    iconProfile.classList.remove('active-icon')
  })

  iconCreate.addEventListener('click', () => {
    pageHome.hidden = true
    pageBookmark.hidden = true
    pageCreate.hidden = false
    pageProfile.hidden = true

    iconHome.classList.remove('active-icon')
    iconBookmark.classList.remove('active-icon')
    iconCreate.classList.add('active-icon')
    iconProfile.classList.remove('active-icon')
  })

  iconProfile.addEventListener('click', () => {
    pageHome.hidden = true
    pageBookmark.hidden = true
    pageCreate.hidden = true
    pageProfile.hidden = false

    iconHome.classList.remove('active-icon')
    iconBookmark.classList.remove('active-icon')
    iconCreate.classList.remove('active-icon')
    iconProfile.classList.add('active-icon')
  })
}
