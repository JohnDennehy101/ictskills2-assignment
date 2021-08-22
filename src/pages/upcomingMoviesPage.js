import React, { useState } from "react";
import PageTemplate from "../components/templateContentListPage";
import { getUpComingMovies, getUpComingTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToMustWatch from "../components/cardIcons/addToMustWatch";
import { existingGuestSession } from "../util";

const HomePage = (props) => {
  //Caching changes added in earlier step for upcoming movies
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState("movie");
  const [page, setPage] = React.useState(1);
  // const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpComingMovies);
  let title =
    mediaTypeChosen === "movie" ? "Upcoming Movies" : "Upcoming TV Shows";
  const guestSession = existingGuestSession();
  let addMustWatch;

  const { data, error, isLoading, isError } = useQuery(
    [`discover-movies`, { id: page }],
    () => getUpComingMovies(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  const { data: tvApiCallData } = useQuery(
    [`discover-tv`, { id: page }],
    () => getUpComingTvShows(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  const handleModalClose = () => {
    setDrawerOpen(false);
  };
  const handleClose = (e) => {
    setMediaType(e.target.value);
    setDrawerOpen(false);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (!guestSession) {
    addMustWatch = (movie) => {
      return <AddToMustWatch content={movie} mediaType={mediaTypeChosen} />;
    };
  } else { 
    addMustWatch = (movie) => {
      return null};
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  let upcomingContent;
  if (mediaTypeChosen === "movie") {
    upcomingContent = data.results;
  } else {
    upcomingContent = tvApiCallData.results;
  }

  const favorites = upcomingContent.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  return (
    <PageTemplate
      title={title}
      content={upcomingContent}
      favouritePage={true}
      mediaType={mediaTypeChosen}
      mediaTypeChosen={mediaTypeChosen}
      handleClose={handleClose}
      setDrawerOpen={setDrawerOpen}
      drawerOpen={drawerOpen}
      handleModalClose={handleModalClose}
      selectFavorite={addToFavorites}
      handlePageChange={handlePageChange}
      page={page}
      action={addMustWatch}
    />
  );
};
export default HomePage;
