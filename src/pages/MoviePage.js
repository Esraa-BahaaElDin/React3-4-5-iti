
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Card from '../component/Cards';
import { getMov } from "../Store/getmovieaction";

const MoviePage = () => {
    const [movieList, setMovieList] = useState([]);
    const movList = useSelector((state) => state.movies);
    const dispatch = useDispatch();


        useEffect(() => {
          dispatch(getMov());
        }, []);
      
  

    return (
        <>
            <div className="row">                
                {movList.map((mov) => {
                    return (
                        <>
                        
                       <div className="container col-2" key={mov.id}style={{ backgroundcolor: "rgb(36, 35, 35)"}}>
                           <Card imag={`https://image.tmdb.org/t/p/w500${mov.backdrop_path}`} title={mov.original_title} overview={mov.overview} id={mov.id} /><br/>
                       </div>
                       
                       </>
                    );
                })}

            </div>
        </>

    );
}
export default MoviePage;
