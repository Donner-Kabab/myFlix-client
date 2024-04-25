import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col, Button } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  sonct[(showSignupForm, setShowSignupForm)] = useState(false);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://movies-api-qewk.onrender.com/movies", {
      headers: { Authorization: "Bearer ${token}" },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            ImagePath: movie.ImagePath,
            Director: movie.Director,
            Genre: movie.Genre,
            Actors: movie.Actors,
            Featured: movie.Featured,
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  return (
    <>
      {!user ? (
        <Row className="justify-content-md-center">
          {!showSignupForm ? (
            <Col md={5}>
              <LoginView
                onLoggedIn={(user, token) => {
                  setUser(user);
                  setToken(token);
                }}
                onShowSignupForm={() => setShowSignupForm(true)}
              />
            </Col>
          ) : (
            <Col md={5}>
              <SignupView onShowLoginForm={() => setShowSignupForm(false)} />
            </Col>
          )}
        </Row>
      ) : selectedMovie ? (
        <Row className="justify-content-md-center">
          <Col md={12}>
            <MovieView
              movie={selectedMovie}
              onBackClick={() => setSelectedMovie(null)}
            />
          </Col>
          <SimilarMovies
            selectedMovie={selectedMovie}
            movies={movies}
            onSimilarMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        </Row>
      ) : movies.length === 0 ? (
        <Row className="justify-content-md-center">
          <Col>The list is empty!</Col>
        </Row>
      ) : (
        <Row className="justify-content-md-center">
          {movies.map((movie) => (
            <Col className="mb-5" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
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
        </Row>
      )}
    </>
  );
};
