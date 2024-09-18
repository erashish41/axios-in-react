import axios from "axios";

const api = axios.create({
    baseURL:
    "https://www.omdbapi.com/"
});


export const getMovie = () => {
    return api.get("?i=tt3896198&apikey=1c12799f&s=titanic&page=1")
}

// getMovie is function which is fetched in Movie.jsx and will get the data as
//              const res = await getMovie();