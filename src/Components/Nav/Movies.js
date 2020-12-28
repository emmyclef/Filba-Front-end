import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 340,
//     width: 300,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

export default function Movies() {
  // const [spacing, ] = React.useState(2);
  // const classes = useStyles();

  const [movies, setMovies] = useState([]); 
  const Movies = async (e) => {
    e.preventDefault();
      const url ="https://api.themoviedb.org/3/movie/67/lists?api_key=faa789bc98eebc4bf7179249076a8b9a&language=en-US&page=1";

      try {
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data.results);
        setMovies(data.results);
      }catch(err){
        console.error(err);
      }
    }
  return (
    <div className="movie-list">
      this is a list of movie
      <div>
          <Movies/>
      </div>
      
    {movies.filter(movie => movie.poster_path).map(movie => (
        <div className="card" key={movie.id}>
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div className='card--content'>
            <h3 className="card--title">{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p className="card--desc">{movie.overview}</p>
            </div>

        </div>
      ))}
    </div>
  )
    // // <Grid container className={classes.root} spacing={2}>
    // //   <Grid item xs={12}>
    // //         <Grid container justify="center" spacing={spacing}>
    // //             {[0, 1, 2,3,4,5,6,7,8].map((value) => (
    // //                 <Grid key={value} item>
    // //                     <img src='#' alt="img"/>
    // //                     <Paper className={classes.paper} />
    // //                     Mulan
    // //                 </Grid>
    // //             ))}
    // //         </Grid>
    // //   </Grid>
    //   /* <Grid item xs={12}>
    //     <Paper className={classes.control}>
    //       <Grid container>
    //         <Grid item>
    //           <FormLabel>spacing</FormLabel>
    //           <RadioGroup
    //             name="spacing"
    //             aria-label="spacing"
    //             value={spacing.toString()}
    //             onChange={handleChange}
    //             row
    //           >
    //             {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
    //               <FormControlLabel
    //                 key={value}
    //                 value={value.toString()}
    //                 control={<Radio />}
    //                 label={value.toString()}
    //               />
    //             ))}
    //           </RadioGroup>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </Grid> 
    // // </Grid>
}
