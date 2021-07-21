import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from "@material-ui/core";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
  root: {
    margin: "30px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#eeeeee",
  },
  image: {
    cursor: "pointer",
    objectFit: "cover",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: "#FFF",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  similarMoviesTitle: {
    margin: "20px 0",
  },
});

export default function SimilarMovies({ itemData }) {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        className={classes.similarMoviesTitle}
      >
        Similar Movies
      </Typography>
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={2.5}>
          {itemData.results.map((item) => (
            <ImageListItem key={item.id} className={classes.image}>
              <a href={`/movies/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              </a>
              <ImageListItemBar
                title={item.title}
                subtitle={<span>Average Rating: {item.vote_average}</span>}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`}>
                    <LocalMoviesIcon className={classes.title} />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}
