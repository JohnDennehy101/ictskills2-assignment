import React, { useState } from "react";
import PageTemplate from "../components/templateContentListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQuery } from "react-query";
import { getMustWatchItems } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";
import { existingGuestSession } from "../util";

const MustWatchPage = () => {
  let contextType, removeMustWatch;
  const [page, setPage] = React.useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState("movie");
  contextType = mediaTypeChosen === "movie" ? MoviesContext : TvShowsContext;
  let title =
    mediaTypeChosen === "movie"
      ? "Must Watch Upcoming Movies"
      : "Must Watch Upcoming TV Shows";
  const guestSession = existingGuestSession();

  const {
    data: content,
    error: mustWatchError,
    isLoading: mustWatchLoading,
    isError: isMustWatchError,
  } = useQuery(
    [`mustWatch`, page, mediaTypeChosen],
    () => getMustWatchItems(mediaTypeChosen, page),
    { keepPreviousData: false, staleTime: 5000 }
  );

  if (mustWatchLoading) {
    return <Spinner />;
  }

  const handleModalClose = () => {
    setDrawerOpen(false);
  };
  const handleClose = (e) => {
    setMediaType(e.target.value);
    setDrawerOpen(false);
  };

  if (!guestSession) {
    removeMustWatch = (content) => {
      return (
        <>
          <RemoveFromMustWatch mediaType={mediaTypeChosen} content={content} />
        </>
      );
    };
  } else {
    removeMustWatch = null;
  }

  return (
    <PageTemplate
      title={title}
      content={content}
      favouritePage={true}
      mediaType={mediaTypeChosen}
      mediaTypeChosen={mediaTypeChosen}
      handleClose={handleClose}
      pag={page}
      setDrawerOpen={setDrawerOpen}
      drawerOpen={drawerOpen}
      handleModalClose={handleModalClose}
      action={removeMustWatch}
    />
  );
};

export default MustWatchPage;
