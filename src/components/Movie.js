import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Movie.css'; // Import the CSS file for styles

const Movie = ({ movie, onDeleteMovie }) => {
    const { title, rating } = movie;

    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span>{title}</span>
            <div>
                {[...Array(parseInt(rating))].map((_, index) => ( // Create stars based on the rating
                    <img 
                        key={index} 
                        src="/media/star.png" 
                        alt="Star" 
                        className="star-icon" 
                    />
                ))}
                <img
                    src="/media/delete.png"
                    alt="Delete movie"
                    className="delete-movie-icon"
                    onClick={() => onDeleteMovie(movie)}
                />
            </div>
        </ListGroup.Item>
    );
};

export default Movie;
