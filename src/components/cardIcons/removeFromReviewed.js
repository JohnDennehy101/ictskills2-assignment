import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import { unReviewContent } from "../../api/tmdb-api";
import firebase from "../../firebase";

const RemoveFromReviewedIcon = ({ content, mediaType, userId, reviews }) => {
  let contentReview = reviews.find((review) => review.mediaId === content.id);
  let contextType = mediaType === "movie" ? MoviesContext : TvShowsContext;
  const context = useContext(contextType);

  const handleRemoveFromReviewed = async (e) => {
    e.preventDefault();
    await unReviewContent(mediaType, content.id);
    const itemRef = firebase
      .database()
      .ref(`/${mediaType}/${userId}/${contentReview.firebaseId}`);
    itemRef.remove();
    window.location.reload();
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromReviewed}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromReviewedIcon;
