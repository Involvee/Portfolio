const burger = document.querySelector('.burger');
const links = document.querySelectorAll('a[href*="#"]');
const body = document.body;
const nav = document.querySelector('.header__nav');

// Sticky header
// window.addEventListener('scroll', function () {
//   var header = document.querySelector('.header');
//   header.classList.toggle('sticky', window.scrollY > 0)
// })

// Burger
burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('open');
  body.classList.toggle('lock');
});

// smooth scrolling
links.forEach(function (link) {
  link.addEventListener('click', event => {
    event.preventDefault();

    const blockId = link.getAttribute('href').substring(1);
    if (blockId) {

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      nav.classList.remove('open');
      body.classList.remove('lock');
      burger.classList.remove('active');
    }
  });

});

// Получаем все изображения
var projectItems = document.querySelectorAll('.projects-item');

projectItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var projectId = this.getAttribute('data-project');
    console.log('Клик на проекте с id:', projectId);

    switch (projectId) {
      case '1':
        window.open('https://involvee.github.io/Gtech-landing-page/', '_blank');
        break;
      case '2':
        window.open('https://involvee.github.io/El-Dacha-landing-page/', '_blank');
        break;
      case '3':
        window.open('https://involvee.github.io/Filmberry-movie-app/', '_blank');
        break;
      case '4':
        window.open('https://involvee.github.io/Hydra-Landing-Page/', '_blank');
        break;
      case '5':
        window.open('https://involvee.github.io/Krypto-Landing-Page/', '_blank');
        break;
      case '6':
        window.open('https://involvee.github.io/GreenZone/', '_blank');
        break;
      case '7':
        window.open('https://involvee.github.io/Arcade/', '_blank');
        break;
      case '8':
        window.open('https://involvee.github.io/Crypto-Arcade/', '_blank');
        break;
      case '9':
        window.open('https://involvee.github.io/GreenZone/', '_blank');
        break;
      case '10':
        window.open('https://involvee.github.io/GreenZone/', '_blank');
        break;
      default:
        console.log('Неправильный id проекта:', projectId);
    }
  });
});

