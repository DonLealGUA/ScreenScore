import React, { useState } from 'react';
import Movie from './Movie';

const Movies = ({ movies,onDeleteMovie}) => {
    return(
        <ul>
            {movies.map((movie) => (
             <Movie key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} />
            ))}    
        </ul>
    );
}

export default Movies;