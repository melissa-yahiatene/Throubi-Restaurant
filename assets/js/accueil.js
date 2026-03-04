  document.addEventListener('DOMContentLoaded', (event) => {

    const bloc = document.querySelector('.description');
    bloc.classList.add('visible');
  });

  document.addEventListener('DOMContentLoaded', (event) => {

    const bloc = document.querySelector('.Bienvenue');
    bloc.classList.add('visible');
  });

/*animation pour le tableau*/

  document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
        }
      });
    }, {
      threshold: 0.04 
    });
  

    const elements = document.querySelectorAll('.animation');
    elements.forEach(el => observer.observe(el));
  });

/*animation pour les images du tableau*/

  document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
        }
      });
    }, {
      threshold: 0.04
    });
  

    const elements = document.querySelectorAll('.im');
    elements.forEach(el => observer.observe(el));
  });

  /*Slide*/

  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      type : 'loop',
      type  : 'fade',
      autoplay: true,
      interval: 2000,
      pagination: false,
      rewind: true,
    });
    splide.mount();
  } );

  /*animation du bloc d'images*/

  document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
        }
      });
    }, {
      threshold: 0.04 
    });
  

    const elements = document.querySelectorAll('.splide');
    elements.forEach(el => observer.observe(el));
  });

/*animation du titre 2*/

  document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
        }
      });
    }, {
      threshold: 0.04 
    });
  

    const elements = document.querySelectorAll('.Titre2');
    elements.forEach(el => observer.observe(el));
  });

  /*animation du Boutton*/

  document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
        }
      });
    }, {
      threshold: 0.01 
    });
  
    const elements = document.querySelectorAll('.BouttonReservation');
    elements.forEach(el => observer.observe(el));
  });
  