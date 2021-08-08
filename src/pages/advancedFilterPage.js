import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateContentListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { filteredMoviesSearch } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { queryClient } from "../index";
import { existingGuestSession, determinePaginationRange } from "../util";
import { useHistory } from "react-router-dom";

const AdvancedFilterPage = () => {
  let history = useHistory();
  let filterState = history.location.state;
  let mediaType = history.location.pathname.includes("movie") ? "movie" : "tv";

  let favouriteIconDisplay;
  const [page, setPage] = useState(1);
  const guestSession = existingGuestSession();
  const { data, error, isLoading, isError } = useQuery(
    ["advancedFilter", { id: page }],
    () =>
      filteredMoviesSearch(
        filterState.releaseYear,
        filterState.averageRatingGreaterThan,
        filterState.averageRatingLessThan,
        filterState.durationLessThan,
        filterState.durationGreaterThan,
        filterState.originalLanguage,
        filterState.sortCategory,
        undefined,
        page
      ),
    { keepPreviousData: true, staleTime: 5000 }
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(["advancedFilter", page + 1], () =>
        filteredMoviesSearch(
          filterState.releaseYear,
          filterState.averageRatingGreaterThan,
          filterState.averageRatingLessThan,
          filterState.durationLessThan,
          filterState.durationGreaterThan,
          filterState.originalLanguage,
          filterState.sortCategory,
          page + 1
        )
      );
    }
  }, [data, page, queryClient]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  let content = data.results;

  const pageRange = determinePaginationRange(data.total_results);

  if (!guestSession) {
    favouriteIconDisplay = (movie) => {
      return <AddToFavoritesIcon content={movie} mediaType={"movie"} />;
    };
  } else {
    favouriteIconDisplay = (movie) => {
      return null;
    };
  }

  return (
    <PageTemplate
      title={`Advanced Filter`}
      content={content}
      action={favouriteIconDisplay}
      handlePageChange={handlePageChange}
      page={page}
      mediaType={mediaType}
      filterPage={true}
      pageRange={pageRange}
    />
  );
};

export default AdvancedFilterPage;
