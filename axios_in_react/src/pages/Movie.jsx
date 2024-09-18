import axios from "axios"
import { useEffect, useState } from "react";
import { Card } from "../component/UI/Card";



const Movie = () => {

    const [movie, setMovie] = useState([]);

    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const getMovieData = async () =>{
        try {
            const res = await axios.get(API);
            console.log(res.data.Search);
            setMovie(res.data.Search);
        }catch(error) {
            console.error("Error message", error.message);
            console.error("Error message", error.response.status);
            console.error("Error message", error.response.data);
        }
    }

    useEffect(() => {
        getMovieData();
    },[])

    return (
        <ul className="container grid grid-four--cols">
            {
                movie.map((currElm) => {
                    return <Card key={currElm.imdbID} movieData={currElm}/>
                })
            }
        </ul>
    )
}
export default Movie;