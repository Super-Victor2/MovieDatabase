'use strict';

window.addEventListener('load', () => {
    console.log('load');
    //Förslagsvis anropar ni era funktioner som skall sätta lyssnare, rendera objekt osv. härifrån
    //setupCarousel();
    //localStorage.setItem('movies', JSON.stringify(movies));
    searchMovies()
});

//Denna funktion skapar funktionalitet för karusellen
function setupCarousel(movies) {
    const slidesContainer = document.querySelector('[data-carousel]');
    const slides = slidesContainer.querySelector('[data-slides]');
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
    // Clear existing slides

    const carouselSlides = document.querySelectorAll('.carousel__slide');

    // Skapa en iframe för varje film i karusellen
    movies.forEach((movie, index) => {
        const iframe = document.createElement('iframe');
        iframe.classList.add('video-source');
        iframe.src = movie.trailer_link;
    
        const slideIndex = index % carouselSlides.length;
        carouselSlides[slideIndex].appendChild(iframe);
    });

    
}

async function getMovies() {
    try {
      const response = await fetch('https://santosnr6.github.io/Data/movies.json');
      if (!response.ok) {
        throw new Error('Response was not ok');
    }
    const movies = await response.json();
    console.log(movies);

    // Få in randomiserat med filmer i trailern
    const randomMovies = selectRandomMovies(movies, 5);
    // Och renderar dom
    setupCarousel(randomMovies);


    // 20 Filmer som syns på första sidan
    const cardCointainerRef = document.querySelector('.popular__card-container')
    if (!cardCointainerRef) {
        throw new error('Section not found')
    }

    // För varje film som tas upp så syns, title, poster och stjärnan
    movies.forEach(movies => {

        //skapar titel till de 20 bilderna
        const titleRef = document.createElement('h3')
        titleRef.classList.add('movieTitles')
        titleRef.textContent = `${movies.title}`

        // Skapa poster till de 20 bilderna
        const imageRef = document.createElement('img')
        imageRef.src = `${movies.poster}`
        imageRef.classList.add('image')

        // Stjärnan till de 20 bilderna
        const starRef = document.createElement('i');
        starRef.classList.add('fa-solid', 'fa-star', 'star');
        starRef.addEventListener('click', () => {
            // Spara film som har klickats på och lägg till klass
            saveMovieToLocalStorage(movies);
            starRef.classList.toggle('starClicked')
        });

        // Skapat ett kort som de läggs i
        const cardRef = document.createElement('div')
        cardRef.classList.add('card')

        // Lägger till dom på rätt ställe
        cardRef.appendChild(titleRef)
        cardRef.appendChild(starRef)
        cardRef.appendChild(imageRef)
        cardCointainerRef.appendChild(cardRef)
    })

    } catch (error) {
      console.error('There was a problem:', error);
    }
}

function selectRandomMovies(movies, count) {
    const shuffledMovies = movies.sort(() => Math.random() - 0.5);
    return shuffledMovies.slice(0, count);
}

// Funktion för att söka efter filmer

async function searchMovies(){
    try {
        const response = await fetch('http://www.omdbapi.com/?apikey=d85ec1b9&s=[söksträng]');
        if (!response.ok) {
          throw new Error('Response was not ok');
    }
    const results = await response.json();
    console.log(results);
    




} catch (error) {
    console.error('There was a problem:', error);
  }
}

// Function to save movie to localStorage
function saveMovieToLocalStorage(movie) {
    // Check if localStorage already has saved movies
    let savedMovies = localStorage.getItem('savedMovies');
    if (!savedMovies) {
        // If no saved movies, initialize an empty array
        savedMovies = [];
    } else {
        // If saved movies exist, parse the JSON string to array
        savedMovies = JSON.parse(savedMovies);
    }

    // Add the clicked movie to the saved movies array
    savedMovies.push(movie);

    // Convert the saved movies array back to JSON and store in localStorage
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

    console.log('Movie saved to localStorage:', movie);
}


getMovies();
setupCarousel();