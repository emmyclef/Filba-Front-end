import React from "react"
import Grids from './Grids'
import videoData from './videoData'

export default function SecondGrid() {
   const videoComponent = videoData.map(function(item){
       return (
           <Grids id= {item.id} name={item.name} imgUrl={item.imgUrl}/>
       )
   })

    return (
        <div className="layergrider">
           {videoComponent}
        </div>
    )
}