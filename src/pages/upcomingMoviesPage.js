import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpComingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpComingMovies)  

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
          return <PlaylistAddIcon />
        }}
    />
  );
};
export default HomePage;