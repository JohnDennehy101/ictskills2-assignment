import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import { markAsMustWatch } from "../../api/tmdb-api";

const RemoveFromMustWatchIcon = ({ content, mediaType }) => {
  let contextType = mediaType === "movie" ? MoviesContext : TvShowsContext;
  const context = useContext(contextType);

  const handleRemoveFromMustWatch = async (e) => {
    e.preventDefault();
    await markAsMustWatch(mediaType, content.id, false);
    context.removeFromMustWatch(content.id);
    window.location.reload();
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromMustWatch}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchIcon;
