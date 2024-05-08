import React, { useState } from 'react';

const Movie = ({ movie, onDeleteMovie }) => {
    const [title, rating] = movie;

    return (
        <li data-grade={`${rating}`} data-title={`${title}`}>
            {title}
            <img src="media/delete.png" alt="Delete movie" className="delete-movie-icon" />
            {'<img src="media/star.png" alt="Star">'.repeat(parseInt(rating))}
            <button onClick={() => onDeleteMovie(movie)}>Delete</button>
        </li>
    );
};

export default Movie;
