import React, { useState } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { MainView } from "../main-view/main-view";
import { MovieCard } from "../movie-card/movie-card";
import { UpdateUser } from "./update-user";
import { FavoriteMovies } from "./favorite-movies";

import { Row, Col, Button } from "react-bootstrap";

export const ProfileView = ({ localUser }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(localUser.UserName);
  const [email, setEmail] = useState(localUser.Email);
  const [birthday, setBirthday] = useState(localUser.Birthday);
  const [password, setPassword] = useState("");

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const data = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday,
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://movies-api-qewk.onrender.com/users", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Updtate Completed");
        window.location.reload();
      } else {
        alert("Change failed: ${data.error.message}");
      }
    });
  }
};

return (
  <>
    <h2>User Profile</h2>
    <h3>Login/Signup</h3>
    <h3>Favorite Movies</h3>
  </>
);
