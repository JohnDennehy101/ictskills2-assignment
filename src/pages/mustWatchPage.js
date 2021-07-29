import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateContentListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getMovie, getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";
import WriteReview from "../components/cardIcons/writeReview";



const MustWatchPage = () => {
  let contextType;
   const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState('movie');
  // contentIds = mediaTypeChosen === 'movie' ? movieIds : tvShowIds;
  contextType = mediaTypeChosen === 'movie' ? MoviesContext : TvShowsContext;
  let apiCall = mediaTypeChosen === 'movie' ? getMovie : getTvShow;
  let title = mediaTypeChosen === 'movie' ? "Must Watch Upcoming Movies" : "Must Watch Upcoming TV Shows"

  const {mustWatch: content } = useContext(contextType);
  const handleModalClose = () => {
    setDrawerOpen(false);
  };
  const handleClose = (e) => {
    setMediaType(e.target.value);
    setDrawerOpen(false);
  };

  

  // Create an array of queries and run in parallel.
  const mustWatchQueries = useQueries(
    content.map((contentId) => {
      return {
        queryKey: [mediaTypeChosen, { id: contentId }],
        queryFn: apiCall,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const mustWatchContent = mustWatchQueries.map((q) => q.data);

  

   return (

   
    <PageTemplate
      title={title}
      content={mustWatchContent}
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
            <RemoveFromMustWatch mediaType={mediaTypeChosen} content={content} />
          </>
        );
      }}
    />
  );
};

export default MustWatchPage;