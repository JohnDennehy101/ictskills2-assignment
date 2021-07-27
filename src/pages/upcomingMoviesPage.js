import React, {useContext } from "react";
import PageTemplate from "../components/templateContentListPage";
import { getUpComingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToMustWatch from '../components/cardIcons/addToMustWatch';

const HomePage = (props) => {
  //Caching changes added in earlier step for upcoming movies
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpComingMovies);

 if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (movieId) => true 


  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      selectFavorite={addToFavorites}
      action={(movie) => {
          return <AddToMustWatch movie={movie}/>
        }}
    />
  );
};
export default HomePage;