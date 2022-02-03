



import React from "react";
import { useSelector } from "react-redux";
import Card from '../component/Cards';

const Favlist = () => {

    const name = useSelector((state) => state.Name);
    const imag = useSelector((state) => state.image);
    const overview = useSelector((state) => state.overview);
    const id = useSelector((state) => state.id);
    const show = useSelector((state) => state.show);
    const movList = useSelector((state) => state.movies);


    return (
        <>


            {/* <div className="row">
                <>
                    {
                        <div className="container col-2" key={id} style={{ backgroundcolor: "rgb(36, 35, 35)" }}>
                            <Card imag={imag} title={name} overview={overview} id={id} /><br />
                        </div> }
                </>
            </div> */}
            {movList.map((mov) => {
                    return (
                        <>
                        
                       <div className="container col-2" key={mov.id}style={{ backgroundcolor: "rgb(36, 35, 35)"}}>
                           <Card imag={`https://image.tmdb.org/t/p/w500${mov.backdrop_path}`} title={mov.original_title} overview={mov.overview} id={mov.id} /><br/>
                       </div>
                       
                       </>
                    );
                })}
        </>

    );
}
export default Favlist;
