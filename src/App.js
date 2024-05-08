import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddMovieForm from './components/AddMovieForm';
import Movies from './components/Movies';
import OrderByAlphaButton from './components/OrderByAlphaButton';
import OrderByGradeButton from './components/OrderByGradeButton';
function App() {
    const [movies,setMovie] = useState([]);

const addMovie = (newMovie) => {
    setMovie([...movies,newMovie]);
};

const deleteMovie = (movieToDelete) => {
    setMovie(movies.filter(movie=> movie !== movieToDelete));
};


const orderByAlpha = () => {
    setMovie([...movies.sort((a,b) => a.title.localeCompare(b.title))]);
};


const orderByGrade = () => {
    setMovie([...movies.sort((a,b) => b.rating - a.rating)]);
};

return(
<Container>
      <Row>
        <Col>
          <h1>Min filmlista</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddMovieForm onAddMovie={addMovie} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Movies movies={movies} onDeleteMovie={deleteMovie} />
        </Col>
      </Row>
      <Row>
        <Col>
          <OrderByAlphaButton onOrderByAlpha={orderByAlpha} />
        </Col>
        <Col>
          <OrderByGradeButton onOrderByGrade={orderByGrade} />
        </Col>
      </Row>
    </Container>
);


}

export default App;