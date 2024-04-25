import { PropTypes } from "prop-types";
import { Button, Card } from "react-bootstrap";

import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100 position-relative">
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <div className="flex-grow-1 d-flex align-items-end justify-content-between">
          <small className="fw-lighter">{movie.Genre.Name}</small>
          <Button className="stretched-link p-0" onClick={() => onMovieClick(movie)} variant="link">
            Open
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

//define the props
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    ImagePath: PropTypes.string,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
