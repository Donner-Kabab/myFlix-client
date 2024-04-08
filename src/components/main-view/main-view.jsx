import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Eloquent JavaScript",
      image: "https://image.jpg",
      director: "Kevin Bacon",
    },
    {
      id: 2,
      title: "Mastering JavaScript Functional Programming",
      image: "https://image.jpg",
      director: "Kevin Bacon",
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      image: "https://image.jpg",
      director: "Kevin Bacon",
    },
    {
      id: 4,
      title: "JavaScript: The Definitive Guide",
      image: "https://image.jpg",
      director: "Kevin Bacon",
    },
    {
      id: 5,
      title: "The Road to React",
      image: "https://image.jpg",
      director: "Kevin Bacon",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
