import React from "react"
// import Grids from './Grids'
// // import videoData from './videoData'
// import './../../../index.css'

export default class FirstGrid extends React.Component{
    
  constructor(props){
      super(props);
      this.state = {
          items: [],
          isloaded: false,
      }
  }

 componentDidMount() {
    // const apiUrl = 'https://movie-stream-api.herokuapp.com/api/';
    fetch('https://movie-stream-api.herokuapp.com/api/')
      .then((response) => response.json())
      .then((json) => {  
          // console.log(' your data', json);
          this.setState({
              isLoaded: true,
              items: json,
          })
        });
  }

// //   grid = response.map(function(item){
// //       return(<div>
// //            <Grids id= {item.id} name={item.name}  cast1={item.cast1} />
// //       </div>
// //       )
// //   })
//     // const GridComponent = videoData.map(function(item){
//     //    return (
//     //        <Grids id= {item.id} name={item.name}  imgUrl={item.imgUrl} />
//     // )})
    render(){
        const { isloaded, items } = this.state;

        if (!isloaded) {
            return <div>Loading...</div>
        }
        else {

            return (
                <div className="output">
                    {/* Data has been Loaded */}
                    <ul>
                        {items.map(item => (
                            <li key = {item.id}>
                                 Name: {item.name} | Cast: {item.cast1}
                            </li>
                        ))};
                    </ul>
                  {items}

                    {/* {items.map(item => 
                    <Grids name= {item.data.description} cast={item.data.cast1 }/>)} */}
                    
                </div>
            );
        }
    }}
//     // return (nbh
//     //     // <div className="layergrid">
//     //     // //    {/* {componentDidMount} */}\
//     //     // //    {Grids}
//     //     // </div>
//     // )
