console.log('Hello!');
console.log('Score: 65');

import i18Obj, * as trans from './translate.js';

// variables

//adaptive menu
const hamburger = document.querySelector('.hamburger');
const adaptive_nav = document.querySelector('.adaptive-nav');
const adap_link = document.querySelector('.adap-list');
const cover = document.querySelector('.cover');
//buttons img
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImgs = document.querySelectorAll('.portfolio-img');
const portfolioButtons = document.querySelector('.portolio-buttons');
const portfolioBtnPress = document.querySelectorAll('.button-press');

const languageSwitch = document.querySelectorAll('.lan-switch');

const themeSwitch = document.querySelector('.switch-theme');  


//functions
function toggleMenu() {
  console.log('open');
  hamburger.classList.toggle('open');
  adaptive_nav.classList.toggle('open');
  cover.classList.toggle('cover-up');
}

function closeMenu() {
  console.log('close');
  hamburger.classList.remove('open');
  adaptive_nav.classList.remove('open');
  cover.classList.remove('cover-up');
}


function preloadImages() {
  const season = ['winter', 'spring', 'summer', 'autumn'];
  season.forEach((season) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.scr = `./assets/img/${season}/${i + 1}.jpg`;  
    }
  })
}

function changeImage(event) {
  console.log(event);
  if (event.target.classList.contains('portfolio-btn')) {
    changeClassActive(event);
    let season = event.target.dataset.season;
    console.log(season);
    portfolioImgs.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);  
  }
}

function changeClassActive(nameClass) {
  portfolioBtnPress.forEach(portfolioBtnPress => {
    portfolioBtnPress.classList.remove('active')
  })
  nameClass.target.classList.toggle('active');
}

function changeClassActiveLanguageSwitch(name) {
  console.log(name);
  languageSwitch.forEach(item => {
    item.classList.remove('active')
  })
  name.target.classList.toggle('active');
}

function getTraslate(language) {
  let arr = [];
  const lanClass = document.querySelectorAll('.lan');

  lanClass.forEach(key => {
   if (key.dataset.i18n in i18Obj[language]) key.textContent = i18Obj[language][key.dataset.i18n];
   if (key.placeholder) {
     console.log('placeholder');
     key.placeholder = i18Obj[language][key.dataset.i18n];
     key.textContent = '';
   }
 });
}

function changeTheme () {
  console.log('theme');
  const sections = ['body', '.skills-section', '.portfolio-section',
  '.video-section', '.section-price',];
  const wrappers = document.querySelectorAll('.section-wrapper-title');
  const titles = document.querySelectorAll('.section-title');
  const buttons = document.querySelectorAll('.button-press');

  document.querySelector('.switch-theme').classList.toggle('night');

  sections.forEach(item => {
    document.querySelector(item).classList.toggle('light-theme');
  });
  wrappers.forEach(item => {
    item.classList.toggle('light-wrapper');
  });
  titles.forEach(item => {
    console.log(item.classList.contains('light-theme'));
    if (item.classList.contains('light-theme')) {
      item.style.backgroundColor = '';
      item.style.color = '';
    } else {
      item.style.backgroundColor = 'white';
      item.style.color = 'black';
    }
    item.classList.toggle('light-theme'); 
  });
  buttons.forEach(item => {
    item.classList.toggle('light-theme')
  });
  
}


// cache imgs
preloadImages();

// pressing hamburger-icon
hamburger.addEventListener('click', toggleMenu);
adap_link.addEventListener('click', closeMenu);

// pressing portfolio buttons
portfolioBtn.forEach(portfolioBtn => {
  portfolioBtn.addEventListener('click', changeImage);
});

// pressing language-switch
languageSwitch.forEach(languageSwitch => {
  let language = '';
  if (languageSwitch.classList.contains('ru')) {
      language = 'ru';
    } else {
      language = 'en';
    }
  languageSwitch.addEventListener('click', function(){
    getTraslate(language)
  })
  })

languageSwitch.forEach(languageSwitch => {
  languageSwitch.addEventListener('click', changeClassActiveLanguageSwitch)})

// pressing Theme
themeSwitch.addEventListener('click', changeTheme);