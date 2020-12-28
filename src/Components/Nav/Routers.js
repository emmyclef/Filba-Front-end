import React, { Component } from 'react';
 
// import {BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
 
// import {Header, Navigation} from './Layout/Layout';
import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";
// import Movies from './Movies';
import Hero from './Layout/Hero'
import FirstGrid from './Layout/FirstGrid'
import SecondGrid from './Layout/SecondGrid'
import Category from './Layout/Category'
import ButtonCat from  './Layout/ButtonCat'
import CenterMovies from './Layout/CenterMovies'
import SearchMovies from './SearchMovie';
import Footer from './Layout/Footer';
import "../../index.css"
import "../../App.css"
import '../../Styles.css'
// import SearchResult from './SearchResult';

 
class Router extends Component {
    
 
    render() { 
        return (  
            <BrowserRouter>
 
                <div >
                    <Header />

                    <div className="row justify-content-center">
                        <Navigation />
                        
                    </div>
                    {/* <SearchResult/> */}
                    
               
                    <SearchMovies/>
                 
                   <div>
                     {/* <Movies/> */}
                   </div>
                    <div className="hero">
                        <Hero movie={{"title": "John Wick", "Overview":"interesting", "Date":"24-2-17"}}/>
                        {/* <Hero movie={{"title": "ffff Wick", "Overview":"interesting", "Date":"4-2-17"}}/>
                        <Hero movie={{"title": "srtyfnJohn Wick", "Overview":"interesting", "Date":"9-2-10"}}/> */}
                    </div>

                    {/* <div className="firstgridder"> */}
                         <FirstGrid/>
                         <SecondGrid/>
                    {/* </div> */}
                    <Category/> 
                    <ButtonCat/>
                    <CenterMovies/>
                    <CenterMovies/>
                    <Footer/>
                </div>        
            </BrowserRouter>
        
        );
    }
} 
export default Router;