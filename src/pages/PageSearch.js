
import { useEffect, useState } from "react";
import axios from 'axios';
import Card from '../component/Cards';

const Search = (prop) => {
    const [movieList, setMovieList] = useState([]);
    console.log(prop.location.state)
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=89456c5be0303bc3142d4c97a3431887&query=${prop.location.state.Search}`,{
                params: {
                    api_key: "89456c5be0303bc3142d4c97a3431887"
                  },
            })
            .then((res) => setMovieList(res.data.results))
            .catch((err) => console.log(err));
    }, []);
console.log(movieList)
    return (
        <>
           

            <div className="row">                
                {movieList.map((movieList) => {
                    return (
                        <>
                        
                       <div className="container col-2" key={movieList.id}style={{ backgroundcolor: "rgb(36, 35, 35)"}}>
                           <Card imag={`https://image.tmdb.org/t/p/w500${movieList.backdrop_path}`} title={movieList.original_title} overview={movieList.overview} id={movieList.id} /><br/>
                       </div>
                       
                       </>
                    );
                })}

            </div>
        </>

    );
}
export default Search;
