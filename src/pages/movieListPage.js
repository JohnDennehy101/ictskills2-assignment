import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateContentListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies, filteredMoviesSearch } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { queryClient } from "../index";
import { existingGuestSession } from "../util";

const HomePage = (props) => {
  let favouriteIconDisplay;
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = React.useState(1);
  const guestSession = existingGuestSession();
  
  const { data, error, isLoading, isError } = useQuery(
    ["discover", { id: page }],
    () => getMovies(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(["discover", page + 1], () =>
        getMovies(page + 1)
      );
    }
  }, [data, page, queryClient]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  let movies;
  if (filter) {
    movies = filterData;
  } else {
    movies = data.results;
  }

  if (!guestSession) {
    favouriteIconDisplay = (movie) => {
        return <AddToFavoritesIcon content={movie} mediaType={'movie'} />;
      }
  }
  else {
    favouriteIconDisplay = (movie) => {
return null;
    } 
  }

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

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
    movies = filterApiCall.results;
    setFilterData(filterApiCall.results);
    setFilter(true);
    
  };
  return (
    <PageTemplate
      title="Discover Movies"
      content={movies}
      action={favouriteIconDisplay}
      filteredMoviesSearch={filteredSearchFunction}
      handlePageChange={handlePageChange}
      page={page}
      mediaType={'movie'}
    />
  );
};

export default HomePage;
