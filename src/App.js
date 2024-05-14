import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovieForm from './components/AddMovieForm';
import Movies from './components/Movies';
import OrderByNameButton from './components/OrderByNameButton';
import OrderByGradeButton from './components/OrderByGradeButton';
function App() {
    const [movies,setMovie] = useState([]); // State hook to manage movies array

// Adds a new movie to the list
const addMovie = (newMovie) => {
    setMovie([...movies,newMovie]);
};

// Delete a movie from the list
const deleteMovie = (movieToDelete) => {
    setMovie(movies.filter(movie=> movie !== movieToDelete));
};

// Orders movies by name 
const orderByName = () => {
    setMovie([...movies.sort((a,b) => a.title.localeCompare(b.title))]);
};

// Orders movies by rating
const orderByGrade = () => {
    setMovie([...movies.sort((a,b) => b.rating - a.rating)]);
};

return(
<Container>
  <Row>
    <Col>
      <h1>ScreenScore</h1>
    </Col>
  </Row>
  <Row>
    <Col>
      <AddMovieForm onAddMovie={addMovie} />
    </Col>
  </Row>
  <Row>
    <Col>
      <h2 style={{ marginTop: '20px' }}>Inlagda Filmer</h2>
    </Col>
  </Row>
  <Row>
    <Col>
      <Movies movies={movies} onDeleteMovie={deleteMovie} />
    </Col>
  </Row>
  <Row>
    <Col>
      <div className="d-flex justify-content-between">
        <OrderByNameButton onOrderByName={orderByName} />
        <div style={{ width: '20px' }}></div> 
        <OrderByGradeButton onOrderByGrade={orderByGrade} />
      </div>
    </Col>
  </Row>
</Container>

);


}

export default App;