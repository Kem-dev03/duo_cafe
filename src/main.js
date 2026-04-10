import { header , footer , main } from './components'
import { getLanguage , setLanguage , getTranslation } from './i18n'
import { InitRouter } from './router'

import './style.css'

const renderApp = (page,currentPath) => {
  const currentLang = getLanguage();
  const t = (key) => getTranslation(currentLang,key);
  document.querySelector('#app').innerHTML = `
  ${header(currentPath , t)}
  ${main(page, t)}
  ${footer()}
  `;

  // Mobile menu open/close logic
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const headerMenu = document.getElementById('header-menu');
  if (hamburgerBtn && headerMenu) {
    hamburgerBtn.addEventListener('click', () => {
      headerMenu.classList.toggle('is-open');
    });
  }

  const langBtn = document.querySelectorAll('.btn_lang')
  langBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang
      setLanguage(lang)
      renderApp(page,currentPath)
    })
  })
}

InitRouter(renderApp)
