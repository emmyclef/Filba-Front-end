import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import './../../../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default ()=> {
    return (
       <nav className={"navbar navbar-dark bg-dark"}>
           
              <h3>Filba</h3>
              <h3><a href="goo.com">Home</a></h3>
              <h3><a href="ghn.com">Movies</a></h3>        
              <h3><a href="ghn.com">Series</a></h3>
              <h3><a href="ghn.com">Live</a></h3>
              <h3><a href="ghn.com">My list</a></h3>
              <FontAwesomeIcon icon={faSearch} />
            {/* <div className={"navbar"}>
              <svg></svg>
              <svg></svg>
              <avatar></avatar>
            </div> */}
       </nav>
    )
}