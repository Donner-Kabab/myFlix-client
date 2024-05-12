import React, { useState } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { MainView } from "../main-view/main-view";
import { MovieCard } from "../movie-card/movie-card";
import { UpdateUser } from "./update-user";
import { FavoriteMovies } from "./favorite-movies";

import { Row, Col, Button } from "react-bootstrap";

export const ProfileView = ({ localUser, movies }) => {
  console.log(movies);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  //const [favoriteMovies, setFavoriteMovies] = useState([]);

  
  const [username, setUsername] = useState(localUser.UserName);
  const [email, setEmail] = useState(localUser.Email);
  const [birthday, setBirthday] = useState(localUser.Birthday);
  const [password, setPassword] = useState("");
const favs = movies.filter((movie) => {
  return storedUser.FavoriteMovies.includes(movie.id);
});
console.log(movies);
  console.log(favs);
  /*const data = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday,
  };*/

  

return (
  <>
    <h2>User Profile</h2>
    <h3>Login/Signup</h3>
    <h3>Favorite Movies</h3>
    {favs && favs.map((movie) => <MovieCard movie={movie} />)}
  </>
);
