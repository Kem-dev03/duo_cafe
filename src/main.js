import { header , footer , main } from './components'
import { getLanguage , setLanguage , getTranslation } from './i18n'
import { InitRouter } from './router'

import './style.css'

// JavaScript анимация: "Растущие" карточки и бегущие цифры по очереди
const initCounters = () => {
  const section = document.querySelector('.about-numbers-section');
  const cards = document.querySelectorAll('.number-card');
  
  if (!section || cards.length === 0) return; // Если мы не на странице About, ничего не делаем

  // Сразу подготавливаем карточки: сохраняем их финальный текст и ставим значение в "0"
  cards.forEach(card => {
    const counter = card.querySelector('h3');
    if (counter) {
      if (!counter.hasAttribute('data-target')) {
        counter.setAttribute('data-target', counter.innerText.trim());
      }
      const targetText = counter.getAttribute('data-target');
      const match = targetText.match(/^(\d+)(.*)$/);
      if (match) {
        counter.innerText = '0' + match[2]; // Ставим на ноль с суффиксом (например "0+")
      }
    }
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        // Функция для плавной анимации одного счетчика (возвращает Promise)
        const animateCounter = (card) => {
          return new Promise(resolve => {
            const counter = card.querySelector('h3');
            if (!counter) return resolve();
            
            const targetText = counter.getAttribute('data-target');
            const match = targetText.match(/^(\d+)(.*)$/);
            
            if (!match) return resolve();
            
            const targetNum = parseInt(match[1], 10);
            const suffix = match[2];
            
            const duration = 1200; // Длительность анимации (1.2 секунды на карточку)
            const start = performance.now();
            
            const update = (currentTime) => {
              const elapsed = currentTime - start;
              const progress = Math.min(elapsed / duration, 1);
              
              // Плавное замедление к концу
              const easeOut = 1 - (1 - progress) * (1 - progress);
              const currentNum = targetNum * easeOut;
              
              if (progress < 1) {
                counter.innerText = Math.ceil(currentNum) + suffix;
                requestAnimationFrame(update);
              } else {
                counter.innerText = targetNum + suffix;
                resolve(); // Сообщаем, что анимация завершена, можно запускать следующую
              }
            };
            
            requestAnimationFrame(update);
          });
        };

        // Запускаем карточки строго по очереди (слева направо)
        const runSequential = async () => {
          for (const card of cards) {
            await animateCounter(card);
          }
        };
        
        runSequential();
        obs.unobserve(section); // Отключаем отслеживание после того как анимация сработала
      }
    });
  }, { threshold: 0.3 }); // Срабатывает, когда секция видна на экране на 30%

  observer.observe(section);
};

// JavaScript логика для вкладок локаций меню
const initMenuTabs = () => {
  const locationBtns = document.querySelectorAll('.location-btn');
  const pizzaSection = document.getElementById('pizza-section');

  if (locationBtns.length === 0 || !pizzaSection) return;

  locationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Убираем активный класс у всех кнопок и добавляем текущей
      locationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Проверяем выбранную локацию
      const loc = btn.getAttribute('data-location');
      if (loc === 'praha3') pizzaSection.classList.add('show');
      else pizzaSection.classList.remove('show');
    });
  });
};

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

  // Инициализируем наши JS-анимации после каждого рендера
  initCounters();
  initMenuTabs();
}

InitRouter(renderApp)
