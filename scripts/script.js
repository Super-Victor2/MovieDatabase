'use strict';

window.addEventListener('load', () => {
    console.log('load');
    //Förslagsvis anropar ni era funktioner som skall sätta lyssnare, rendera objekt osv. härifrån
    setupCarousel();
});

//Denna funktion skapar funktionalitet för karusellen
function setupCarousel() {
    console.log('carousel');
    const buttons = document.querySelectorAll('[data-carousel-btn]');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const offset = btn.dataset.carouselBtn === 'next' ? 1 : -1;
            const slides = btn.closest('[data-carousel').querySelector('[data-slides');
            const activeSlide = slides.querySelector('[data-active]');
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            
            if (newIndex < 0) {
                newIndex = slides.children.length - 1;
            } else if (newIndex >= slides.children.length) {
                newIndex = 0;
            }

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });

    const slidesContainer = document.querySelector('[data-carousel]');
    const slides = slidesContainer.querySelector('[data-slides]');
    const randomIndex = Math.floor(Math.random() * slides.children.length);
    slides.children[randomIndex].dataset.active = true;
}

async function getMovies() {
    try {
      const response = await fetch('https://santosnr6.github.io/Data/movies.json');
      if (!response.ok) {
        throw new Error('Response was not ok');
    }
    const movies = await response.json();
    console.log(movies);

    const cardCointainerRef = document.querySelector('.popular__card-container')
    if (!cardCointainerRef) {
        throw new error('Section not found')
    } console.log(cardCointainerRef)


    movies.forEach(movies => {
        const titleRef = document.createElement('h3')
        titleRef.classList.add('movieTitles')
        titleRef.textContent = `${movies.title}`

        const imageRef = document.createElement('img')
        imageRef.src = `${movies.poster}`
        imageRef.classList.add('image')

        const starRef = document.createElement('i')
        starRef.classList.add('fa-solid', 'fa-star', 'star')

        const cardRef = document.createElement('div')
        cardRef.classList.add('card')

        cardRef.appendChild(titleRef)
        cardRef.appendChild(starRef)
        cardRef.appendChild(imageRef)
        cardCointainerRef.appendChild(cardRef)
    })

    } catch (error) {
      console.error('There was a problem:', error);
    }
}
  
getMovies();


setupCarousel();