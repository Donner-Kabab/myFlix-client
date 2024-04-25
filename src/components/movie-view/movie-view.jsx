import { MovieCard } from "../movie-card/movie-card.jsx";
import { Row, Col, Button } from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.ImagePath} width="250" height="250" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
