import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) return;
  }
    fetch("https://movies-api-qewk.onrender.com/movies", {
      headers: { Authorization: "Bearer ${token}" },
    }))
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      }); 
  }, [token];
        console.log(data);
        if (data && data.docs && Array.isArray(data.docs)) {
          const moviesFromApi = data.docs.map((doc) => {
            return {
              id: doc.key,
              title: doc.title,
              director: doc.director_name?.[0],
            };
          });
          setMovies(moviesFromApi);
        } else {
          console.error("Invalid data structure received from API");
        }
      .catch((error) => {
        console.error("Error fetching data:", error); 
      }
    
  if (!user) {
    return (
      <LoginView
        onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}
      />
      )
      or 
      <SignupView />
    );
  

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
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear(); 
        }}
      >
        Logout
      </button>
    </div>
  );
}
