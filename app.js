const log = console.log

const website = "https://api.themoviedb.org/3/search/movie"

const APIKEY = "c4bc571471c2807e7f91b7f978e76c8f"

const searchform = document.querySelector('#searchform')

const handleOnSubmit = (event) => {
    event.preventDefault();
    
    const searchInputElement = document.getElementById("searchbox");
    
    const movieName = searchInputElement.value;
    
    if (!movieName) {
        // handleError();
    } else {
        showMovieInfo(movieName);
    }
    };

const findMovieInformation = async (movieName) => {

    const randomPage = Math.ceil(Math.random()*5)

    try {
        const url = `${website}?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&page=${randomPage}&query=${movieName}`
    
        const response = await fetch(url);
    
        if (response.status !== 200) {
        // handleApiError();
        } else {
        const data = await response.json();
        log(url)
        return data;
        }
    } catch {
        // handleApiError();
    }
    };
    const showMovieInfo = async (movieName) => {
    const currentMovieInformation = await findMovieInformation(movieName);
    const imageMaker = `http://image.tmdb.org/t/p/w185`

    const randomResultOne = Math.ceil(Math.random()*20)
    const randomResultTwo = Math.ceil(Math.random()*20)
    const randomResultThree = Math.ceil(Math.random()*20)
    const randomResultFour = Math.ceil(Math.random()*20)
    const randomResultFive = Math.ceil(Math.random()*20)

    const movieContainer = document.getElementById('films')
    movieContainer.innerHTML = `<div id="movieShow1" class="card flex-row hidden"><img class="card-img-left example-card-img-responsive" src="${imageMaker}${currentMovieInformation.results[randomResultOne]?.poster_path}"/>
    <div class="card-body">
    <h4 class="card-title h5 h4-sm">${currentMovieInformation.results[randomResultOne]?.title}</h4>
    <p class="card-text">${currentMovieInformation.results[randomResultOne]?.overview}</p>
    </div>
    </div>
    <div id="movieShow2" class="card flex-row hidden"><img class="card-img-left example-card-img-responsive" src="${imageMaker}${currentMovieInformation.results[randomResultTwo]?.poster_path}"/>
    <div class="card-body">
    <h4 class="card-title h5 h4-sm">${currentMovieInformation.results[randomResultTwo]?.title}</h4>
    <p class="card-text">${currentMovieInformation.results[randomResultTwo]?.overview}</p>
    </div>
    </div>
    <div id="movieShow3" class="card flex-row hidden"><img class="card-img-left example-card-img-responsive" src="${imageMaker}${currentMovieInformation.results[randomResultThree]?.poster_path}"/>
    <div class="card-body">
    <h4 class="card-title h5 h4-sm">${currentMovieInformation.results[randomResultThree]?.title}</h4>
    <p class="card-text">${currentMovieInformation.results[randomResultThree]?.overview}</p>
    </div>
    </div>
    <div id="movieShow4" class="card flex-row hidden"><img class="card-img-left example-card-img-responsive" src="${imageMaker}${currentMovieInformation.results[randomResultFour]?.poster_path}"/>
    <div class="card-body">
    <h4 class="card-title h5 h4-sm">${currentMovieInformation.results[randomResultFour]?.title}</h4>
    <p class="card-text">${currentMovieInformation.results[randomResultFour]?.overview}</p>
    </div>
    </div>
    <div id="movieShow5" class="card flex-row hidden"><img class="card-img-left example-card-img-responsive" src="${imageMaker}${currentMovieInformation.results[randomResultFive]?.poster_path}"/>
    <div class="card-body">
    <h4 class="card-title h5 h4-sm">${currentMovieInformation.results[randomResultFive]?.title}</h4>
    <p class="card-text">${currentMovieInformation.results[randomResultFive]?.overview}</p>
    </div>
    </div>
    <div class="film card"  id="film1"><img src="${imageMaker}${currentMovieInformation.results[randomResultOne]?.poster_path}"><button id="movieButOne" style="margin-top: 1rem;">${currentMovieInformation.results[randomResultOne]?.title}</button></div>
    <div class="film card"  id="film2"><img src="${imageMaker}${currentMovieInformation.results[randomResultTwo]?.poster_path}"><button id="movieButTwo" style="margin-top: 1rem;">${currentMovieInformation.results[randomResultTwo]?.title}</button></div>
    <div class="film card"  id="film3"><img src="${imageMaker}${currentMovieInformation.results[randomResultThree]?.poster_path}"><button id="movieButThree" style="margin-top: 1rem;">${currentMovieInformation.results[randomResultThree]?.title}</button></div>
    <div class="film card"  id="film4"><img src="${imageMaker}${currentMovieInformation.results[randomResultFour]?.poster_path}"><button id="movieButFour" style="margin-top: 1rem;">${currentMovieInformation.results[randomResultFour]?.title}</button></div>
    <div class="film card"  id="film5"><img src="${imageMaker}${currentMovieInformation.results[randomResultFive]?.poster_path}"><button id="movieButFive" style="margin-top: 1rem;">${currentMovieInformation.results[randomResultFive]?.title}</button></div>`
    
    log(movieName)
    log(currentMovieInformation)
    log(`${currentMovieInformation.results[randomResultOne]?.title}, ${imageMaker}${currentMovieInformation.results[randomResultOne]?.poster_path}`)
    log(`${currentMovieInformation.results[randomResultTwo]?.title}, ${imageMaker}${currentMovieInformation.results[randomResultTwo]?.poster_path}`)
    log(`${currentMovieInformation.results[randomResultThree]?.title}, ${imageMaker}${currentMovieInformation.results[randomResultThree]?.poster_path}`)
    log(`${currentMovieInformation.results[randomResultFour]?.title}, ${imageMaker}${currentMovieInformation.results[randomResultFour]?.poster_path}`)
    log(`${currentMovieInformation.results[randomResultFive]?.title}, ${imageMaker}${currentMovieInformation.results[randomResultFive]?.poster_path}`)

    makeButtons()



}

const makeButtons = () => {

    const buttonOne = document.getElementById('movieButOne')
    const buttonTwo = document.getElementById('movieButTwo')
    const buttonThree = document.getElementById('movieButThree')
    const buttonFour = document.getElementById('movieButFour')
    const buttonFive = document.getElementById('movieButFive')

    buttonOne.addEventListener("click", informationPresentOne)
    buttonTwo.addEventListener("click", informationPresentTwo)
    buttonThree.addEventListener("click", informationPresentThree)
    buttonFour.addEventListener("click", informationPresentFour)
    buttonFive.addEventListener("click", informationPresentFive)
}


const hideStuff = () => {

    const hiddenOne = document.getElementById('film1')
    const hiddenTwo = document.getElementById('film2')
    const hiddenThree = document.getElementById('film3')
    const hiddenFour = document.getElementById('film4')
    const hiddenFive = document.getElementById('film5')

    hiddenOne.classList.add('hidden')
    hiddenTwo.classList.add('hidden')
    hiddenThree.classList.add('hidden')
    hiddenFour.classList.add('hidden')
    hiddenFive.classList.add('hidden')

}

const informationPresentOne = () => {
    document.getElementById('movieShow1').classList.remove('hidden')
    hideStuff()
}

const informationPresentTwo = () => {
    document.getElementById('movieShow2').classList.remove('hidden')
    hideStuff()

}

const informationPresentThree = () => {
    document.getElementById('movieShow3').classList.remove('hidden')
    hideStuff()

}

const informationPresentFour = () => {
    document.getElementById('movieShow4').classList.remove('hidden')
    hideStuff()

}

const informationPresentFive = () => {
    document.getElementById('movieShow5').classList.remove('hidden')
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
    // log(`IMDB: ${realWebsite}${currentMovieInformation.imdb_id}`)
    // log(`${imageMaker}${currentMovieInformation.poster_path}`)
    // log(`${currentMovieInformation.overview}`)
