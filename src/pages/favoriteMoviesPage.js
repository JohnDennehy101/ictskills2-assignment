import React, { useState } from "react";
import PageTemplate from "../components/templateContentListPage";
import { useQuery } from "react-query";
import { getFavourites } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  let contextType;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState("movie");
  const [page, setPage] = React.useState(1);
  let title = mediaTypeChosen === "movie" ? "Favourite Movies" : "Favourite TV Shows";

  const { data: content, error: favouritesError, isLoading: favouritesLoading, isError: isFavouritesError } = useQuery(
    ["favourites", { id: page }],
    () => getFavourites(mediaTypeChosen, page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  console.log(content);

  if (favouritesLoading) {
    return <Spinner />
  }

  


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
