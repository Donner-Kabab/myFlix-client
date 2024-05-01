import React, { useState, useEffect } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";

const profileView = () => {
  const [user, setUser] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    //get user info
    //update state using setUser and setFavoriteMovies
  }, []);
};
