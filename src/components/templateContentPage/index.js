import React from "react";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import HeaderContent from "../headerContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import GridListTile from "@material-ui/core/GridListTile";
import { getMovieImages, getTvShowImages } from "../../api/tmdb-api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const TemplateContentPage = ({ content, children, mediaType }) => {
  const classes = useStyles();
  let apiCall;

  if (mediaType === 'movie') {
    apiCall = getMovieImages
  }
  else {
    apiCall = getTvShowImages
  }
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: content.id }], 
    apiCall
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters;

  return (
    <>
      <HeaderContent movie={content} mediaType={mediaType} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.root}>
            <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              {images.map((image) => (
                <GridListTile
                  key={image.file_path}
                  className={classes.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </GridListTile>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateContentPage;
