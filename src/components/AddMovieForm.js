import React, { useState } from "react";
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

const AddMovieForm = ({ onAddMovie}) => {

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (title !== ''){
            if (rating !== '' && rating !== '0') {
                onAddMovie({title,rating: parseInt(rating)})
                setTitle('');
                setRating('0');
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
        <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Lägg till en film</legend>
          <FormGroup>
            <FormLabel htmlFor="title-field">Titel:</FormLabel>
            <FormControl type="text" id="title-field" placeholder="Title här..." value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="rating-field">Betyg:</FormLabel>
            <FormControl as="select" id="rating-field" value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="0">Välj betyg här...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </FormControl>
          </FormGroup>
          <Button type="submit" variant="success" className="mt-3">Spara film</Button>
        </fieldset>
      </Form>
    );
};

export default AddMovieForm;