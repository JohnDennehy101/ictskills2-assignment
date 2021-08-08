import React, { useState } from "react";
import PageTemplate from "../components/templateContentListPage";
import { useQuery } from "react-query";
import { getFavourites } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import {determinePaginationRange} from "../util";

const FavoriteMoviesPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState("movie");
  const [page, setPage] = React.useState(1);
  let title = mediaTypeChosen === "movie" ? "Favourite Movies" : "Favourite TV Shows";

  const { data: content, error: favouritesError, isLoading: favouritesLoading, isError: isFavouritesError } = useQuery(
    [`favourites`, page, mediaTypeChosen ],
    () => getFavourites(mediaTypeChosen, page),
    { keepPreviousData: false, staleTime: 5000 }
  );

  

  if (favouritesLoading) {
    return <Spinner />
  }

  const pageRange = determinePaginationRange(content.length);
  


  const handleModalClose = () => {
    setDrawerOpen(false);
  };
  const handleClose = (e) => {
    setMediaType(e.target.value);
    setDrawerOpen(false);
  };

  return (

    <PageTemplate
      title={title}
      content={content}
      favouritePage={true}
      mediaType={mediaTypeChosen}
      mediaTypeChosen={mediaTypeChosen}
      handleClose={handleClose}
      setDrawerOpen={setDrawerOpen}
      drawerOpen={drawerOpen}
      handleModalClose={handleModalClose}
      pageRange={pageRange}
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
