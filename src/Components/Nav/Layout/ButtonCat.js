import React from "react"
// import './../../../index.css'

export default function ButtonCat (){

    return (
        <div>
            <div className="features">
                <button style={{"background-color":"red", "font-size": "16px"}}>Trending</button>
                <button style={{"background-color":"grey"}}>Popular</button>
                <button style={{"background-color":"grey"}}>Premieres</button>
                <button style={{"background-color":"red"}}>Adventure</button>
                <button style={{"background-color":"grey"}}>Drama</button>
                <button style={{"background-color":"grey"}}>Horror</button>
            </div>
        </div>
    )
}