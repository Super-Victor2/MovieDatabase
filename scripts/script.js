'use strict';

window.addEventListener('load', () => {
    console.log('load');
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

// Få tag på filmerna
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
        const titleRef = document.createElement('h2')
        titleRef.classList.add('movieTitles')
        titleRef.textContent = `${movies.title}`

        // Skapa poster till de 20 bilderna
        const imageRef = document.createElement('img')
        imageRef.src = `${movies.poster}`
        imageRef.classList.add('image')
        imageRef.setAttribute('alt', 'Movie poster')

        // Stjärnan till de 20 bilderna
        const starRef = document.createElement('i');
        starRef.classList.add('fa-solid', 'fa-star', 'star');
        starRef.addEventListener('click', () => {
            starRef.classList.toggle('starClicked')
        });

        // Skapat ett kort som de läggs i
        const cardRef = document.createElement('div')
        cardRef.classList.add('card')

        // Lägger till dom på rätt ställe
        cardRef.appendChild(titleRef);
        cardRef.appendChild(starRef);
        cardRef.appendChild(imageRef);
        cardCointainerRef.appendChild(cardRef);
    })

    } catch (error) {
      console.error('There was a problem:', error);
    }
}

// Randomisera alla filmer
function selectRandomMovies(movies, count) {
    const shuffledMovies = movies.sort(() => Math.random() - 0.5);
    return shuffledMovies.slice(0, count);
}

// Funktion för att söka efter filmer
async function searchMovies() {
    try {
        const searchInput = document.getElementById('searchInput').value;

        const apiUrl = `http://www.omdbapi.com/?apikey=d85ec1b9&s=${encodeURIComponent(searchInput)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Response was not ok');
        }
        
        const data = await response.json();
        console.log(data);

        const movies = data.Search;

        const resultsList = document.querySelector('#resultsList');
        resultsList.innerHTML = '';

        // För varje film skapas ett kort med data
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('results-card');

            const infoCard = document.createElement('div');
            card.appendChild(infoCard);

            card.addEventListener('click', async () => {
                if (infoCard.classList.contains('info-card')) {
                    infoCard.classList.remove('info-card');
                    infoCard.innerHTML = '';
                } else {
                    infoCard.classList.add('info-card');
                    const infoCardTitle = document.createElement('h2');
                    infoCardTitle.classList.add('info-card__title');

                    const infoCardActorTitle = document.createElement('h3');
                    infoCardActorTitle.classList.add('info-card__title');

                    const infoCardActorResult = document.createElement('p');
                    infoCardActorResult.classList.add('info-card__result');

                    const infoCardDirectorTitle = document.createElement('h3');
                    infoCardDirectorTitle.classList.add('info-card__title');

                    const infoCardDirectorResult = document.createElement('p');
                    infoCardDirectorResult.classList.add('info-card__result');

                    const infoCardGenresTitle = document.createElement('h3');
                    infoCardGenresTitle.classList.add('info-card__title');

                    const infoCardGenresResult = document.createElement('p');
                    infoCardGenresResult.classList.add('info-card__result');

                    const infoCardPlot = document.createElement('p');
                    infoCardPlot.classList.add('info-card__plot')

                    infoCard.appendChild(infoCardTitle);
                    infoCard.appendChild(infoCardActorTitle);
                    infoCard.appendChild(infoCardActorResult);
                    infoCard.appendChild(infoCardDirectorTitle);
                    infoCard.appendChild(infoCardDirectorResult);
                    infoCard.appendChild(infoCardGenresTitle);
                    infoCard.appendChild(infoCardGenresResult);
                    infoCard.appendChild(infoCardPlot);
            
                    
                    const imdbId = movie.imdbID; 
            
                    const response = await fetch(`http://www.omdbapi.com/?apikey=d85ec1b9&i=${imdbId}`);
                    const data = await response.json();
            
                    if (data.Response === 'True') {
                        infoCardTitle.textContent = data.Title;
                        
                        infoCardActorResult.textContent = data.Actors;
                        infoCardActorTitle.textContent = "Actors:"

                        infoCardDirectorResult.textContent = data.Director;
                        infoCardDirectorTitle.textContent = "Directors:"

                        infoCardGenresResult.textContent = data.Genre;
                        infoCardGenresTitle.textContent = "Genres:"

                        infoCardPlot.textContent = data.Plot
                    } else {
                        console.error('Error fetching movie information:', data.Error);
                    }
                }
            });
            
            const title = document.createElement('h2');
            title.classList.add('movieTitles')
            title.textContent = movie.Title;

            const poster = document.createElement('img');
            poster.src = movie.Poster;

            
            card.appendChild(title);
            card.appendChild(poster);

            resultsList.appendChild(card);
        });

        
        

    } catch (error) {
        console.error('There was a problem:', error);
    }
}

// Switchar mellan none och block
const displaySection = document.querySelector('#d-none');
document.getElementById('searchBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    searchMovies();
    displaySection.style.display = "block";
});

getMovies();
setupCarousel();