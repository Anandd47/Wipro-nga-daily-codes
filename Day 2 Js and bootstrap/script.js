// here we can create a expternal javascript file and link it to html file
// Declare a array  of Famous movies of all time 
//   In JS when we should use const and let keywords to declare variables instead of var keyword
//Situation Use
//Variable value will change (like counters, loops) let
//Value should stay constant const
//For legacy or old JS code only var//


const famousMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump"
];  
// Function to display famous movies in the console
function displayFamousMovies() {
    console.log("Famous Movies of All Time:");
    famousMovies.forEach(movie => {
        console.log("- " + movie);
    });
}
// Call the function to display movies
displayFamousMovies();