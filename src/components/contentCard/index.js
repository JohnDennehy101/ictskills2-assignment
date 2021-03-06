import React, { useEffect, useState } from "react";
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
import Spinner from "../spinner";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ContentCard({ content, action, mediaType }) {
  let linkUrl, dateDisplay;

  let contentTitle = mediaType === "movie" ? content.title : content.name;
  const [fullyLoaded, setFullyLoaded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setInterval(() => {
      setFullyLoaded(true);
    }, 1000);
  });

  if (mediaType === "movie") {
    linkUrl = `/movies/${content.id}`;
    dateDisplay = content.release_date;
  } else {
    linkUrl = `/tv/${content.id}`;
    dateDisplay = content.first_air_date;;
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
              {!content.review ?
                <>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="p">

                      <CalendarIcon fontSize="small" />
                      {dateDisplay}

                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="p">
                      <StarRateIcon fontSize="small" />
                      {"  "} {content.vote_average}{" "}
                    </Typography>
                  </Grid></> : <><Grid item xs={12}><Typography align="center" color="primary" variant="h6" component="p">Your Rating: {content.rating}</Typography><Typography align="center" color="textSecondary" variant="h6" component="p">Your Review</Typography><Typography variant="h6" align="center" component="p">{content.review}</Typography></Grid></>
              }
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
