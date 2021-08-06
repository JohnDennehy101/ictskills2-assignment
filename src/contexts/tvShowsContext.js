import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )

  const addToFavorites = (id) => {
    setFavorites([...favorites,id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (id) => {
    setFavorites( favorites.filter(
      (mId) => mId !== id
    ) )
  };

  const addReview = (tvShow, review) => {
    setMyReviews( {...myReviews, [tvShow.id]: review } )
  };

  const addMustWatch = (id) => {
      setMustWatch([...mustWatch, id]);
  }

   const removeFromMustWatch = (id) => {
      setMustWatch( mustWatch.filter(
      (mId) => mId !== id
    ) )
  }

  return (
    <TvShowsContext.Provider
      value={{
        favorites,
        mustWatch,
        addToFavorites,
        addMustWatch,
        removeFromMustWatch,
        removeFromFavorites,
        addReview
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;