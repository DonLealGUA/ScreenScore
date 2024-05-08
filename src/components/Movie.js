import React from "react";

const Movie = ({ movie,onDeleteMovie}) => {
    const [title, rating] = movie;

    return(
        <li data-grade="${starRating}" data-title="${movieTitle}">
            {title}
            <img src="media/delete.png" alt="Delete movie" class="delete-movie-icon"/>
            {'<img src="media/star.png" alt="Star">'.repeat(parseInt(rating))}
            <button onClick={() => onDeleteMovie(movie)}>Delete</button>
        </li>
)};