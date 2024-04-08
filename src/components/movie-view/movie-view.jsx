import { MovieCard } from "../movie-card/movie-card.jsx";

export const MovieView = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Image: </span>
        <span>{movie.image}</span>
      </div>
      <button>Back</button>
    </div>
  );
};
