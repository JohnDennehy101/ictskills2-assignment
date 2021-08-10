import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import { markAsFavourite } from "../../api/tmdb-api";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";

const AddToFavoritesIcon = ({ content, mediaType }) => {
  let history = useHistory();
  let contextType = mediaType === 'movie' ? MoviesContext : TvShowsContext;
  const context = useContext(contextType);

  const handleAddToFavorites = async (e) => {
    e.preventDefault();
    history.push(`/${mediaType}`);
    await markAsFavourite(mediaType, content.id, true);

    context.addToFavorites(content.id);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;