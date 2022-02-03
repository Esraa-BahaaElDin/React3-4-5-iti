

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

export default function Details() {
  const params = useParams();
  const [move, setmove] = useState({});

  console.log(params);


  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`,{
        params: {
            api_key: "89456c5be0303bc3142d4c97a3431887"
          },
    })
      .then((res) => setmove(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div className="text-center bg-light">
      
      <h1>Details OF MOVIE WITH ID {params.id}</h1>
      <h3>TITLE : {move.original_title}</h3>
      <h3>DESC : {move.overview}</h3>
      <h3>Date : {move.release_date}</h3>
    
  </div>;
}
