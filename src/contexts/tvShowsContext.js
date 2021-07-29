import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )

  const addToFavorites = (tvShow) => {
    setFavorites([...favorites,tvShow.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (tvShow) => {
    setFavorites( favorites.filter(
      (mId) => mId !== tvShow.id
    ) )
  };

  const addReview = (tvShow, review) => {
    setMyReviews( {...myReviews, [tvShow.id]: review } )
  };

  const addMustWatch = (tvShow) => {
      setMustWatch([...mustWatch, tvShow.id]);
  }

  return (
    <TvShowsContext.Provider
      value={{
        favorites,
        mustWatch,
        addToFavorites,
        addMustWatch,
        removeFromFavorites,
        addReview
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowContextProvider;