import React, { useState } from "react";
import {markAsFavourite} from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )

  const addToFavorites = async (id) => {
    setFavorites([...favorites, id])
  };
  // We will use this function in a later section
  const removeFromFavorites = async (id) => {
    setFavorites( favorites.filter(
      (mId) => mId !== id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addMustWatch = (movie) => {
      setMustWatch([...mustWatch, movie.id]);
  }

   const removeFromMustWatch = (movie) => {
      setMustWatch( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  }

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch,
        myReviews,
        addToFavorites,
        addMustWatch,
        removeFromMustWatch,
        removeFromFavorites,
        addReview
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;