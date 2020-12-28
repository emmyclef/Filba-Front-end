import React from 'react';

export default function Hero(props) {
    
    console.log(props.movie)
    const title = props.movie.title
    const overview = props.movie.Overview
    const date = props.movie.Date

    return (
        <div className={"trend"}>
             <img src="jjj.com" alt="movie.mov"/>
             <h3>title: {`${title}`}</h3>
             <h3>Overview: {`${overview}`}</h3>
             <h3>Date: {`${date}`}</h3>
             {/* <h3>Review</h3> */}
        </div>
    )
}
