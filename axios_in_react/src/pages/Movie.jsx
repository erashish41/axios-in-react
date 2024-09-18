
import { useEffect, useState } from "react";
import { Card } from "../component/UI/Card";
import { getMovie } from "../services/GetService";



const Movie = () => {

    const [movie, setMovie] = useState([]);

    const getMovieData = async () =>{
        try {
            const res = await getMovie();
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