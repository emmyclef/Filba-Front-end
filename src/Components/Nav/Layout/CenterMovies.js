import React from "react"
import Grids from "./Grids"
import videoData from './videoData'

export default function CenterMovies(){
  
    const mainVideo = videoData.map(function(item){
        return(
            <Grids name={item.name} imgUrl={item.imgUrl}/>
        )
    })

    return (
        <div className="layergrid">
            {mainVideo}
        </div>
    )
}