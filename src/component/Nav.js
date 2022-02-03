
import {
   
    Link
  } from "react-router-dom";

import { useState } from "react"
import { useHistory} from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";



const Nav = () => {
    const history = useHistory();
    const [FormData, setFormData] = useState({
        Search: "",
        
    });
    

    const FormHandeller = (e) => {
        if (e.target.name === "search") {
            setFormData({
                Search: e.target.value
            });

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
       
            history.push({
              pathname : "/spesific",
              state : FormData
            });
          
    };
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Movie APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Movies</Link>
                        </li> 
                        <li className="nav-item">
                  <ChangeLanguage />
              </li>
                    </ul>
                    <form className="d-flex" onSubmit={(e)=>{handleSubmit(e)}}>
                        <input className="form-control me-2" type="search" onChange={(e) => FormHandeller(e)} name="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Nav;