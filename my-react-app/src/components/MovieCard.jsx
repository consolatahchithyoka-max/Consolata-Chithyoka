import react from "react";
import { Link } from "react-router-dom";
import { moviesData } from "../data/moviesData";
import MCard from "./Card";
import { Grid } from '@mui/material';

export const MovieCard = () => {
    const moviesdata = moviesData.results
    return(
        <>
            <h1>Movie list in movie cards</h1>
            <Link to="/">Go Back</Link>
            <Grid container spacing={4} sx={{ p: 4,  }} justifyContent="center">
                {moviesdata.map(moviedata => (<MCard title={moviedata.title} description={moviedata.overview} image={moviedata.poster_path} rating={moviedata.vote_average} genre={moviedata.genre_ids} year={moviedata.release_date}  />))}
            </Grid>
        </>
    )
}

export default MovieCard;
