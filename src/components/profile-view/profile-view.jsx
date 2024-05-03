import React from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { MainView } from "../main-view/main-view";
import { MovieCard } from "../movie-card/movie-card";
import { UpdateUser } from "./update-user";
import { FavoriteMovies } from "./favorite-movies";

import { Row, Col, Button } from "react-bootstrap";

export const ProfileView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(user.UserName);
  const [email, setEmail] = useState(user.Email);
  const [birthdate, setBirthdate] = useState(user.Birthdate);
  const [password, setPassword] = useState("");

  const [favMovies, setFavMovies] = useState([]);

  const data = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday,
  };

  //
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
};
