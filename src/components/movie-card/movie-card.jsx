import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  console.log(movie);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  console.log(
    "https://movies-api-qewk.onrender.com/users/" +
      user.Username +
      "/movies/" +
      movie.id
  );
  const addToFavorites = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(
      `https://movies-api-qewk.onrender.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("date", data);
      });
  };
  return (
    <>
      <img src={movie.ImagePath} width="100" height="100" />
      <Link
        className="link-card"
        to={`/movies/${encodeURIComponent(movie.id)}`}
      >
        <Card>
          <Card.Img variant="top" src={movie.Image} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Genre.Name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Button variant="primary" type="button" onClick={addToFavorites}>
        Add to Favorites
      </Button>
    </>
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
};
