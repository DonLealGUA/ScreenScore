import React, { useState } from 'react';
import Movie from './Movie';
import { ListGroup } from 'react-bootstrap';

const Movies = ({ movies,onDeleteMovie}) => {
    return(
        <ListGroup>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} />
      ))}
    </ListGroup>
    );
}

export default Movies;