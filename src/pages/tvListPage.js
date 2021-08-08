import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateContentListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTvShows, filteredMoviesSearch } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { queryClient } from "../index";
import { existingGuestSession, determinePaginationRange } from "../util";

const TvListPage = (props) => {
  let favouriteIconDisplay;
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = React.useState(1);
  const guestSession = existingGuestSession();

  const { data, error, isLoading, isError } = useQuery(
    ["discover-tv", { id: page }],
    () => getTvShows(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(["discover-tv", page + 1], () =>
        getTvShows(page + 1)
      );
    }
  }, [data, page, queryClient]);

  if (!guestSession) {
    favouriteIconDisplay = (movie) => {
      return <AddToFavoritesIcon content={movie} mediaType={"tv"} />;
    };
  } else {
    favouriteIconDisplay = (movie) => {
      return null;
    };
  }

  if (isLoading) {
    return <Spinner />;
  }

  const pageRange = determinePaginationRange(data.total_results);

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
      show.release_date = show.first_air_date;
    });
  }

  let filteredSearchFunction = async (
    release_year,
    average_rating_greater_than,
    average_rating_less_than,
    duration_less_than,
    duration_greater_than,
    original_language,
    sort_category,
    mediaType,
    first_air_date_year
  ) => {
    let filterApiCall = await filteredMoviesSearch(
      release_year,
      average_rating_greater_than,
      average_rating_less_than,
      duration_less_than,
      duration_greater_than,
      original_language,
      sort_category,
      mediaType,
      first_air_date_year
    );
    tvShows = filterApiCall.results;
    setFilterData(filterApiCall.results);
    setFilter(true);

  };
  return (
    <PageTemplate
      title="Discover TV Shows"
      content={tvShows}
      action={favouriteIconDisplay}
      filteredMoviesSearch={filteredSearchFunction}
      handlePageChange={handlePageChange}
      page={page}
      mediaType={"tv"}
      pageRange={pageRange}
    />
  );
};

export default TvListPage;
