import React from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { MainView } from "../main-view/main-view";
import { MovieCard } from "../movie-card/movie-card";

import { Row, Col, Button } from "react-bootstrap";

export const ProfileView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(user.UserName);
  const [email, setEmail] = useState(user.Email);
  const [birthdate, setBirthdate] = useState(user.Birthdate);
  const [password, setPassword] = useState("");

  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    //get user info
    //update state using setUser and setFavoriteMovies
  }, []);
};
