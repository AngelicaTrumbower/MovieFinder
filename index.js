const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=72e6749a&s=';


document.getElementById("input__form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const searchHomeInput = document.getElementById("input").value;

    localStorage.setItem("searchHomeInput", searchHomeInput);
    console.log(searchHomeInput);
});

function showMoviesPage(event) {
    window.location.href = `${window.location.origin}/movies.html`;
}