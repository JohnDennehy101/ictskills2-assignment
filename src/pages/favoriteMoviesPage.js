import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateContentListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getMovie, getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  let contextType;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState("movie");
  contextType = mediaTypeChosen === "movie" ? MoviesContext : TvShowsContext;
  let apiCall = mediaTypeChosen === "movie" ? getMovie : getTvShow;
  let title = mediaTypeChosen === "movie" ? "Favourite Movies" : "Favourite TV Shows";

  const { favorites: content } = useContext(contextType);
  const handleModalClose = () => {
    setDrawerOpen(false);
  };
  const handleClose = (e) => {
    setMediaType(e.target.value);
    setDrawerOpen(false);
  };

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    content.map((contentId) => {
      return {
        queryKey: [mediaTypeChosen, { id: contentId }],
        queryFn: apiCall,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const favoriteMovies = favoriteMovieQueries.map((q) => q.data);

  console.log(favoriteMovies);

  return (
    <PageTemplate
      title={title}
      content={favoriteMovies}
      favouritePage={true}
      mediaType={mediaTypeChosen}
      mediaTypeChosen={mediaTypeChosen}
      handleClose={handleClose}
      setDrawerOpen={setDrawerOpen}
      drawerOpen={drawerOpen}
      handleModalClose={handleModalClose}
      action={(content) => {
        return (
          <>
            <RemoveFromFavorites
              content={content}
              mediaType={mediaTypeChosen}
            />
            <WriteReview content={content} mediaType={mediaTypeChosen} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;
