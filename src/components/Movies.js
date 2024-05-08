import React from "react";
import Movie from '/Movie';

const Movie = ({ movies,onDeleteMovie}) => {
    return(
        <ul>
            {movies.map((movie) => (
             <Movie key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} />
            ))}    
        </ul>
    );
}