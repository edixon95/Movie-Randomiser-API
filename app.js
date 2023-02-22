const website = "https://api.themoviedb.org/3/search/movie"

const APIKEY = "c4bc571471c2807e7f91b7f978e76c8f"

const searchform = document.querySelector('#searchform')

const handleOnSubmit = (event) => {
    event.preventDefault();
    
    const searchInput = document.getElementById("searchbox");
    
    const movieName = searchInput.value.trim();
    
    if (!movieName) {
        // handleError();
    } else {
        showMovieInfo(movieName);
    }
    };

const findMovieInformation = async (movieName) => {

    try {
        const url = `${website}?api_key=${APIKEY}&language=en-US&include_adult=false&page=1&query=${movieName}`
    
        const response = await fetch(url);
    
        if (response.status !== 200) {
            throw new Error(`API Error, response status = ${response.status}`)
        } else {
        const data = await response.json();
        // console.log(url)
        return data.results;
        }
    } catch (e) {
        console.error(e.message);
    }
    };
    
const showMovieInfo = async (movieName) => {
    const resultsArray = await findMovieInformation(movieName);
    const imageMaker = `http://image.tmdb.org/t/p/w185`


    const movieContainer = document.querySelector('#films')
    const index = 1

    movieContainer.innerHTML = resultsArray.map( movie => {
        return`
    <div class="card-body">
        <h4 class="card-title h5 h4-sm">${movie.title}</h4>
        <p class="card-text">${movie.overview}</p>
    </div>
    <div class="film card" id="${'film'+index}">
        <img src="${imageMaker}${movie.poster_path}">
        <button class="movieButton" style="margin-top: 1rem;" data-movieid="${movie.id}">${movie.title}</button>
    </div>
    `}).join('\n')

    makeButtons()



}

const makeButtons = () => {
    const buttons = [...document.querySelectorAll('.movieButton')]
    buttons.map( 
        button => button.addEventListener("click",informationPresent)
        )
}


const hideStuff = () => {

    const hidden = document.querySelector('.filmButton')
    hidden.classList.toggle('hidden')

}

const informationPresent = (event) => {
    const movieid = event.target
    // const movieInfoContainer = document.querySelector('.movieShow')
    console.log(movieid)
    
    // movieInfoContainer.classList.remove('hidden')

    hideStuff()
}

searchform.addEventListener("submit", handleOnSubmit);


    // // Image construction
    // http://image.tmdb.org/t/p/ - File path
    // w185/ - size
    // pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg - .poster_path
    
    // see the following
    // https://api.themoviedb.org/3/configuration?api_key=c4bc571471c2807e7f91b7f978e76c8f
    
    
    // log (`Movie title: ${currentMovieInformation.original_title}`)
    // log (`Release date: ${currentMovieInformation.release_date}`)
    // log (`Genres: ${currentMovieInformation.genres[0].name}, ${currentMovieInformation.genres[1].name}, ${currentMovieInformation.genres[2].name}`)
    // console.log(`IMDB: ${realWebsite}${currentMovieInformation.imdb_id}`)
    // console.log(`${imageMaker}${currentMovieInformation.poster_path}`)
    // console.log(`${currentMovieInformation.overview}`)
