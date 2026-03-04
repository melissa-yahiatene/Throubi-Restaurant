let lastScrollTop = 0;
let isScrolling;

window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //affiche le header lors du scroll vers le bas ou vers le haut
  header.classList.remove('hidden');

  //efface le header apres une seconde 
  
  clearTimeout(isScrolling);
  isScrolling = setTimeout(function() {
    if (scrollTop > 0) {
      header.classList.add('hidden');
    }
  }, 1000);

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, false);

//assure que le header reste visible en haut de la page
window.addEventListener('load', function() {
  let header = document.querySelector('header');
  if (window.pageYOffset === 0) {
    header.classList.remove('hidden');
  }
});

window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  if (window.pageYOffset === 0) {
    header.classList.remove('hidden');
  }
});
