import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvShowsContext } from "../../contexts/tvShowsContext"
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchIcon = ({ content, mediaType }) => {
  let contextType = mediaType === 'movie' ? MoviesContext : TvShowsContext;
  const context = useContext(contextType);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addMustWatch(content);
  };
  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;