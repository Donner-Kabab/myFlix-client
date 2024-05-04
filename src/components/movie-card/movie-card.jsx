import React from "react";
import { PropTypes } from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  const [addTitle, setAddTitle] = useState("");
  const [delTitle, setDelTitle] = useState("");

  useEffect(() => {
    const addToFavorites = () => {
      fetch(
        `https://movies-api-qewk.onrender.com/movies/users/${
          user.UserName
        }/movies/${encodeURIComponent(movie.title)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Can't add movie, try again.");
          }
          alert("Movie added!");
          window.location.reload();
          return response.json();
        })
        .then((user) => {
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const removeFromFavorites = () => {
      fetch(
        `https://movies-api-qewk.onrender.com/movies/users/${
          user.UserName
        }/movies/${encodeURIComponent(movie.title)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Can't remove movie, try again.");
          }
          alert("Movie removed!");
          window.location.reload();
          return response.json();
        })
        .then((user) => {
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (addTitle) {
      addToFavorites();
    }
    if (deleteTitle) {
      removeFromFavorites();
    }
  }, [addTitle, deleteTitle, token]);

  const handleAddToFavorites = () => {
    setAddTitle(movie.Title);
  };

  const handleRemoveFromFavorites = () => {
    setDelTitle(movie.Title);
  };

  return (
    <>
      <Link
        className="link-card"
        to={`/movies/${encodeURIComponent(movie.id)}`}
      >
        <Card>
          <Card.Img variant="top" src={movie.Image} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Genre.join(", ")}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Card>
        {isFavorite ? (
          <Button variant="primary" onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </Button>
        ) : (
          <Button variant="primary" onClick={handleAddToFavorites}>
            Add to Favorites
          </Button>
        )}
      </Card>
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
