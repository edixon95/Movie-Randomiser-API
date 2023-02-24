const website = "https://api.themoviedb.org/3/search/movie"

const APIKEY = "c4bc571471c2807e7f91b7f978e76c8f"

const searchform = document.querySelector('#searchform')

const handleOnSubmit = (event) => {
    event.preventDefault();
    
    const searchInput = document.getElementById("searchbox");
    
    const movieName = searchInput.value.trim();

    const movieInfoContainer = document.querySelector('#infoContainer')
    const movieInfoContainerTop = document.querySelector('#infoContainerTop')
    
    if (!movieName) {
        // handleError();
    } else {
        showMovieInfo(movieName);
        movieInfoContainer.innerHTML = ""
        movieInfoContainerTop.innerHTML = ""
    }
    };

const findMovieInformation = async (movieName) => {
    const randomPage = Math.ceil(Math.random()*5)

    try {
        const url = `${website}?api_key=${APIKEY}&language=en-US&include_adult=false&page=${randomPage}&query=${movieName}`
    
        const response = await fetch(url);
    
        if (response.status !== 200) {
            throw new Error(`API Error, response status = ${response.status}`)
        } else {
        const data = await response.json();
        // console.log(url)
        return data.results.splice(0, 5);
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
    
    movieContainer.innerHTML = resultsArray.filter((movie) => {return movie.title}).map( movie => {
        return`
    <div class="film card centerthis" id="${'film'+index}">
        <img src="${movie.poster_path?`${imageMaker}${movie.poster_path}`: "https://via.placeholder.com/185x278?text=No+Image+Found"}">
        <button
        class="movieButton" 
        style="margin-top: 1rem;" 
        data-movietitle="${movie.title}"
        data-movieoverview="${movie.overview}"
        >
        ${movie.title}
        </button>
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

const movieInfoComponent = (movie) => {
    return `
    <div class="card-body">
    <h4 class=card-title h5 h4-sm">${movie.title}</h4>
    <p class=card-text">${movie.overview}</p>
    </div>
    `
}

const informationPresent = (event) => {
    const movieInfoContainer = document.querySelector('#infoContainer')
    const movieInfoContainerTop = document.querySelector('#infoContainerTop')
    
    const title = event.target.getAttribute("data-movietitle")
    const overview = event.target.getAttribute("data-movieoverview")
    
    movieInfoContainer.innerHTML = movieInfoComponent({title, overview})
    movieInfoContainerTop.innerHTML = movieInfoComponent({title, overview})
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
