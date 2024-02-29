let users = [
    {
        title: "The Shawshank Redemption",
        imdbid: "tt0111161",
        poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/NmzuHjWmXOc"
    },
    {
        title: "The Godfather",
        imdbid: "tt0068646",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/rqGJyUB1Q3s"
    },
    {
        title: "The Dark Knight",
        imdbid: "tt0468569",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        title: "The Godfather Part II",
        imdbid: "tt0071562",
        poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/9O1Iy9od7-A"
    },
    {
        title: "12 Angry Men",
        imdbid: "tt0050083",
        poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/TEN-2uTi2c0"
    },
    {
        title: "Schindler's List",
        imdbid: "tt0108052",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/gG22XNhtnoY"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        imdbid: "tt0167260",
        poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/y2rYRu8UW8M"
    },
    {
        title: "Pulp Fiction",
        imdbid: "tt0110912",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/5ZAhzsi1ybM"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        imdbid: "tt0120737",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/_e8QGuG50ro"
    },
    {
        title: "Thunder Road",
        imdbid: "tt7738450",
        poster: "https://m.media-amazon.com/images/M/MV5BMjYyNGUzMDAtNzUwNC00OWY5LWIxZGQtZjJlYWU1ODY5YjYxXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_SX300.jpg",
        trailer_link: "https://www.youtube.com/embed/JTjYRFZOf4I"
    },
    {
        title: "Forrest Gump",
        imdbid: "tt0109830",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/bLvqoHBptjg"
    },
    {
        title: "Fight Club",
        imdbid: "tt0137523",
        poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/qtRKdVHc-cE"
    },
    {
        title: "The Lord of the Rings: The Two Towers",
        imdbid: "tt0167261",
        poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/hYcw5ksV8YQ"
    }, 
    {
        title: "Inception",
        imdbid: "tt1375666",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        imdbid: "tt0080684",
        poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/JNwNXF9Y6kY"
    },
    {
        title: "The Matrix",
        imdbid: "tt0133093",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        title: "Goodfellas",
        imdbid: "tt0099685",
        poster: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/2ilzidi_J8Q"
    }, 
    {
        title: "Spider-Man: Across the Spider-Verse",
        imdbid: "tt9362722",
        poster: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/shW9i6k8cB0"
    }, 
    {
        title: "Interstellar",
        imdbid: "tt0816692",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/4T4wxDnTYLg"
    },
    {
        title: "One Flew Over the Cuckoo's Nest",
        imdbid: "tt0073486",
        poster: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
        trailer_link: "https://www.youtube.com/embed/OXrcDonY-B8"
    }
]