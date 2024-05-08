import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie}) => {

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (title !== ''){
            if (rating !== '' && rating !== '0') {
                onAddMovie({title,rating: parseInt(rating)})
                setTitle('');
                setRating('');
            }else{
                alert("Please enter a Movie rating");
                return;
            }
        }else{
            alert("Please enter a Movie rating");
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Lägg till en film</legend>
                <label htmlFor="title-field">Titel:</label>
                <input type="text" id="title-field" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="rating-field">Betyg:</label>
                <select type="text" id="rating-field"value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                <input type="submit" class="btn btn-success mt-3" value="Spara film"/>
            </fieldset>
        </form>
    );
};

export default AddMovieForm;