
document.addEventListener('DOMContentLoaded', function() {
    var fieldset = document.querySelector('.mainpage');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            fieldset.classList.add('visible');
        }
    }, { threshold: [0.1] }); 

    observer.observe(fieldset);
});



//Pour l'animation du menu

document.addEventListener('DOMContentLoaded', function() {
    var fieldset = document.querySelector('.fieldsetAnimationEntree');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            fieldset.classList.add('visible');
        }
    }, { threshold: [0.1] }); 

    observer.observe(fieldset);
});



document.addEventListener('DOMContentLoaded', function() {
    var fieldset = document.querySelector('.fieldsetAnimationPlat');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            fieldset.classList.add('visible');
        }
    }, { threshold: [0.1] }); 

    observer.observe(fieldset);
});


document.addEventListener('DOMContentLoaded', function() {
    var fieldset = document.querySelector('.fieldsetAnimationDessert');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            fieldset.classList.add('visible');
        }
    }, { threshold: [0.1] }); 

    observer.observe(fieldset);
});


document.addEventListener('DOMContentLoaded', function() {
    var fieldset = document.querySelector('.fieldsetAnimationCocktail');
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            fieldset.classList.add('visible');
        }
    }, { threshold: [0.1] }); 

    observer.observe(fieldset);
});
