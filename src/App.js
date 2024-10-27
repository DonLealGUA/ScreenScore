import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovieForm from './components/AddMovieForm';
import Movies from './components/Movies';
import OrderByNameButton from './components/OrderByNameButton';
import OrderByGradeButton from './components/OrderByGradeButton';
import './App.css'; // Import custom CSS for styling

function App() {
    const [movies, setMovie] = useState([]); // State hook to manage movies array

    // Adds a new movie to the list
    const addMovie = (newMovie) => {
        setMovie([...movies, newMovie]);
    };

    // Delete a movie from the list
    const deleteMovie = (movieToDelete) => {
        setMovie(movies.filter((movie) => movie !== movieToDelete));
    };

    // Orders movies by name
    const orderByName = () => {
        setMovie([...movies.sort((a, b) => a.title.localeCompare(b.title))]);
    };

    // Orders movies by rating
    const orderByGrade = () => {
        setMovie([...movies.sort((a, b) => b.rating - a.rating)]);
    };

    return (
        <Container className="app-container">
            <Row className="text-center">
                <Col>
                    <h1 className="app-title">🎬 ScreenScore 🎬</h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <AddMovieForm onAddMovie={addMovie} />
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <h2 className="app-subtitle">Inlagda Filmer</h2>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Movies movies={movies} onDeleteMovie={deleteMovie} />
                </Col>
            </Row>
            <Row className="text-center " style={{ marginTop: '30px' }}>
                <Col>
                  <div className="d-flex justify-content-between sort-button-container">
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
