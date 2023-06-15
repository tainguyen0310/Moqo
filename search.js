const axios = require('axios');

const keyword ="Spider-Man: Across the Spider-Verse"
const api_key = "14e906c9d6b22d9c2075880ee5f7423e"
//search for a movie
async function searchMovie(keyword) {
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${api_key}`)
        const movieData = response.data;
        console.log('Movie info:');
        console.log("name:",movieData.results[0].title);
        console.log("id:",movieData.results[0].id);
        console.log("release date:",movieData.results[0].release_date);
        console.log("overview:",movieData.results[0].overview);
    }
    catch(error){
        console.log(error);
    }
}

searchMovie(keyword);