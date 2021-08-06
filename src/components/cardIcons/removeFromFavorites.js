import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromFavoritesIcon = ({ content, mediaType}) => {
  let contextType = mediaType === 'movie' ? MoviesContext : TvShowsContext;
  const context = useContext(contextType);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFromFavorites(mediaType, content.id, false);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;