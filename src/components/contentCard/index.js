import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PlayListAddIcon from "@material-ui/icons/PlaylistAdd";
import { isLoggedInUser } from "../../util";
import { getFavourites, getMustWatchItems } from "../../api/tmdb-api";
import Spinner from "../spinner";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ContentCard({ content, action, mediaType }) {
  const loggedIn = isLoggedInUser();
  let favouriteIds = [];
  let mustWatchIds = [];
  let contextType = mediaType === "movie" ? MoviesContext : TvShowsContext;
  let contentTitle = mediaType === "movie" ? content.title : content.name;
  const [favouriteDataObtained, setFavouriteDataObtained] = useState(false);
  const [fullyLoaded, setFullyLoaded] = useState(false);
  const [savedFavourites, setSavedFavourites] = useState([]);
  const [savedMustWatch, setSavedMustWatch] = useState([]);
  const classes = useStyles();
  let favorites, mustWatch;
  // const { favorites, mustWatch } = useContext(contextType);
  let linkUrl;

  useEffect(() => {
    async function searchForFavourites() {
      let favoritesResult, mustWatchResult;
      if (loggedIn) {
        favoritesResult = await getFavourites(mediaType, 1);
        mustWatchResult = await getMustWatchItems(mediaType, 1);
        favorites = favoritesResult;
        mustWatch = mustWatchResult;
        favorites.map((favourite) => favouriteIds.push(favourite.id));
        mustWatch.map((mustWatch) => mustWatchIds.push(mustWatch.id));

        setSavedFavourites(favouriteIds);
        setSavedMustWatch(mustWatchIds);
        setFavouriteDataObtained(true);
        setFullyLoaded(true);
      } else {
        setFullyLoaded(true);
        setFavouriteDataObtained(true);
      }
    }

    searchForFavourites();
  }, [favouriteDataObtained]);

  if (favouriteDataObtained && savedFavourites) {
    if (savedFavourites.find((id) => id === content.id)) {
      content.favorite = true;
    }
  }
  if (favouriteDataObtained && savedMustWatch) {
    if (savedMustWatch.find((id) => id === content.id)) {
      content.mustWatch = true;
    }
  }

  if (mediaType === "movie") {
    linkUrl = `/movies/${content.id}`;
  } else {
    linkUrl = `/tv/${content.id}`;
  }

  return (
    <Card className={classes.card}>
      {fullyLoaded ? (
        <>
          <CardHeader
            className={classes.header}
            avatar={
              content.favorite && content.mustWatch ? (
                <>
                  <Avatar className={classes.avatar}>
                    <FavoriteIcon />
                  </Avatar>
                  <Avatar className={classes.avatar}>
                    <PlayListAddIcon />
                  </Avatar>
                </>
              ) : content.favorite ? (
                <Avatar className={classes.avatar}>
                  <FavoriteIcon />
                </Avatar>
              ) : content.mustWatch ? (
                <Avatar className={classes.avatar}>
                  <PlayListAddIcon />
                </Avatar>
              ) : null
            }
            title={
              <Typography variant="h5" component="p">
                {contentTitle}{" "}
              </Typography>
            }
          />
          <CardMedia
            className={classes.media}
            image={
              content.poster_path
                ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
                : img
            }
          />
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <CalendarIcon fontSize="small" />
                  {content.release_date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <StarRateIcon fontSize="small" />
                  {"  "} {content.vote_average}{" "}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions disableSpacing>
            {action(content)}
            <Link to={linkUrl}>
              <Button variant="outlined" size="medium" color="primary">
                More Info ...
              </Button>
            </Link>
          </CardActions>
        </>
      ) : (
        <>
         <CardContent>
        <Spinner height={250} />
        </CardContent>
        </>
      )}
    </Card>
  );
}
