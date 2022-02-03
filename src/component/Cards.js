import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { setFav } from "../Store/actions";
import DeleteIcon from '@material-ui/icons/Delete';



const Card = (params, imag, title, overview, id) => {

    const [fill, setfill] = useState({
        show: true
    });
    const show = useSelector((state) => state.show);
    const dispatch = useDispatch();

    const changemoviedata = () => {
        
        dispatch(setFav({
            Name: params.title, image: `https://image.tmdb.org/t/p/w500${params.imag}`, overview: params.overview
            , id: params.id,show:true
        }));
       
    };

    return (
        <div className="card text-center bg-dark" style={{ width: "18rem", height: "17.5rem", color: "white" }}>
            <img src={params.imag} className="card-img-top" alt="immm"></img>
            <div className="card-body text-center" style={{ width: "18rem", height: "25rem", backgroundcolor: "rgb(36, 35, 35)" }}>
                <h5 className="card-title " style={{ backgroundcolor: "black" }}>{params.title}</h5>
                {/* <p className="card-text">{params.overview}</p> */}
                <Link to={`/Movie_Details/${params.id}`} className="btn btn-primary">Ditals</Link>
                <IconButton onClick={
                    () => {
                        setfill(!fill)
                        if(fill){changemoviedata();}else{
                            dispatch(setFav({
                                Name: "", image: ``, overview: ""
                                , id: "",show:false
                            }));
                        }
                            
                    }
                } >
                    {!fill ? <StarIcon color="primary" /> : <StarBorderIcon />}
                   
                </IconButton>
                <IconButton onClick={
                    () => {
                        dispatch(setFav({
                            Name: "", image: ``, overview: ""
                            , id: "",show:false
                        }));
                            
                    }
                } >
                    {<DeleteIcon />}
                   
                </IconButton>
            </div>
        </div>
    );
}
export default Card;