import React from "react"
import './../../../index.css'

export default function Grids (props){
    console.log(props)
    //  const id = props.id
     const name = props.name
     const imgUrl = props.imgUrl
    return (
        <div  className="grid">
            <img src={imgUrl} alt="whaterw.jpg"/>
            <h3>{name}</h3>
        </div>
    )
}