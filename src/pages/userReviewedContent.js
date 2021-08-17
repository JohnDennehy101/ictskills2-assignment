import React, { useState } from "react";
import PageTemplate from "../components/templateContentListPage";
import { useQuery } from "react-query";
import { getReviewed } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromReviewed from "../components/cardIcons/removeFromReviewed";
import WriteReview from "../components/cardIcons/writeReview";
import {determinePaginationRange} from "../util";

const UserReviewedContent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState("movie");
  const [page, setPage] = React.useState(1);
  let title = mediaTypeChosen === "movie" ? "Reviewed Movies" : "Reviewed TV Shows";

  const { data: content, error: reviewedError, isLoading: reviewedLoading, isError: isReviewedError } = useQuery(
    [`reviewed`, page, mediaTypeChosen ],
    () => getReviewed(mediaTypeChosen, page),
    { keepPreviousData: false, staleTime: 5000 }
  );

  

  if (reviewedLoading) {
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
            <RemoveFromReviewed
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

export default UserReviewedContent;
