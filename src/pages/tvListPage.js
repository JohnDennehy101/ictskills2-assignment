import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTvShows, filteredMoviesSearch } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TvListPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover-tv", getTvShows);
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  let tvShows, updatedTvShows;
  if (filter) {
    tvShows = filterData;
  } else {
    tvShows = data.results;
    updatedTvShows = tvShows.map((show) => {
        show.title = show.name;
  delete show.name;
    })
  }

  // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter((m) => m.favorite);
//   localStorage.setItem("favorites", JSON.stringify(favorites));

  let filteredSearchFunction = async (
    release_year,
    average_rating_greater_than,
    average_rating_less_than,
    duration_less_than,
    duration_greater_than,
    original_language,
    sort_category
  ) => {
    let filterApiCall = await filteredMoviesSearch(
      release_year,
      average_rating_greater_than,
      average_rating_less_than,
      duration_less_than,
      duration_greater_than,
      original_language,
      sort_category
    );
    tvShows = filterApiCall.results;
    setFilterData(filterApiCall.results);
    setFilter(true);

    //movies = await
  };
  return (
    <PageTemplate
      title="Discover TV Shows"
      movies={tvShows}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
      filteredMoviesSearch={filteredSearchFunction}
    />
  );
};

export default TvListPage;
