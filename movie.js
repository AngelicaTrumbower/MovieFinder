const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=72e6749a&s=';
const searchInput = document.getElementById("search__input");
const searchForm = document.getElementById("input__form");

window.addEventListener('load', (event) => {
    
    const searchHomeInput = localStorage.getItem('searchHomeInput');
    console.log('Search term retrieved from local storage:', searchHomeInput);

})



async function onFormSubmit(event) {
    event.preventDefault();

    // const searchHomeInput = localStorage.getItem('searchHomeInput');
    // console.log('Search term retrieved from local storage:', searchHomeInput);

    const searchInput = document.getElementById("search__input").value;
    console.log('form submitted with search term:', searchInput);

    // const searchTerm = searchHomeInput ? searchHomeInput : searchInput;
    
    const apiEnd = `http://www.omdbapi.com/?i=tt3896198&apikey=72e6749a&s=${encodeURIComponent(searchInput)}`;
    console.log('API Endpoint:', apiEnd);

    const movies = await fetch(apiEnd);
    console.log(movies)

    const movieData = await movies.json();
    console.log(movieData)

    const moviesArray = movieData.Search;
    
    for(let i = 0; i < 9; i++) {
        if (moviesArray[i]) {
            const movieContainer = document.getElementById(`movie${i + 1}`);
            if (movieContainer) {
                movieContainer.innerHTML = movieHTML(moviesArray[i]);
            } else {
                console.error(`Element with id 'movie${i + 1}' not found or no data available.`)
            }
        };
    };
    const movieContainer = document.querySelector('.movie__container');
}

function onSearchChange(event) {
    const searchTerm =event.target.value;
    console.log('Search term changed:', searchTerm);
}

function movieHTML(movie) {
    return `<img src="${movie.Poster}">
            <p>Title: ${movie.Title}</p>
            <p>Year: ${movie.Year}</p>`
}