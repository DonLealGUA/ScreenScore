import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <OrderByAlphaButton onOrderByAlpha={orderByAlpha} />
        <div style={{ width: '20px' }}></div> {/* Spacer */}
        <OrderByGradeButton onOrderByGrade={orderByGrade} />
      </div>
    </Col>
  </Row>
</Container>

);


}

export default App;