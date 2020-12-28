import React from "react"
import './../../../index.css'

export default function Category (){

  return(
      <div>
          <div className="category">
                <div className="cat-op">
                    <img  alt="movie"/>
                    <h3>Movies</h3>
                </div>
                <div >
                    <img alt="Serie"/>
                    <h3>Series</h3>
                </div>
                <div>
                    <img alt="stream"/>
                    <h3>Live Stream</h3>
                </div>
                <div>
                    
                    <h3>Premiers</h3>
                </div>      
           </div>
      <    hr/>
      </div>
  )
}