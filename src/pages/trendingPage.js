import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTrendingItems } from "../api/tmdb-api";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TrendingInputFilter from "../components/trendingInputFilter";
import TrendingImageList from "../components/trendingImageList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridParent: {
    flexGrow: 1,
  },
  heading: {
    margin: "40px auto",
    fontWeight: "500",
    width: "100%",
    textAlign: "center",
  },
  selectGrid: {
    margin: "10px auto",
    width: "100%",
    textAlign: "center",
  },
}));

const TrendingPage = (props) => {
  let trendingInfo = [];
  let moreDetailUrl;
  const [time, setTime] = React.useState("day");
  const [mediaType, setMediaType] = React.useState("movie");

  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    ["trending", time, mediaType],
    () => getTrendingItems(mediaType, time)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (mediaType === "movie" || mediaType === "tv") {
    moreDetailUrl = "/movies";
  } else {
    moreDetailUrl = "/person/credits";
  }
  data.results.forEach((item, i) => {
    let featuredStatus;
    let title;
    let imagePath = item.backdrop_path;
    if (i % 3 == 0) {
      featuredStatus = true;
    } else {
      featuredStatus = false;
    }

    if (mediaType === "tv") {
      title = item.name;
    } else if (mediaType === "movie") {
      title = item.title;
    } else {
      title = item.name;
      imagePath = item.profile_path;
    }
    trendingInfo.push({
      img: `https://image.tmdb.org/t/p/w500${imagePath}`,
      title: `${title}`,
      author: "author",
      featured: featuredStatus,
      id: item.id,
    });
  });

  const handleChange = async (event) => {
    if (
      event.target.value === "tv" ||
      event.target.value === "movie" ||
      event.target.value === "person"
    ) {
      setMediaType(event.target.value);
    } else {
      setTime(event.target.value);
    }
  };

  return (
    <>
      {data ? (
        <Container width="90vw">
          <div className={classes.root}>
            {mediaType === "movie" ? (
              <Typography variant="h2" className={classes.heading} gutterBottom>
                Trending {mediaType}s
              </Typography>
            ) : mediaType === "tv" ? (
              <Typography variant="h2" className={classes.heading} gutterBottom>
                Trending {mediaType.toUpperCase()} shows
              </Typography>
            ) : (
              <Typography variant="h2" className={classes.heading} gutterBottom>
                Trending People
              </Typography>
            )}

            <div className={classes.gridParent}>
              <Grid container spacing={3}>
                <Grid item xs={12} className={classes.selectGrid}>
                  <TrendingInputFilter
                    labelValue={"Media Type"}
                    value={mediaType}
                    handleChange={handleChange}
                    menuItems={["tv", "movie", "person"]}
                    helperText={"Select the media type"}
                  />
                  <TrendingInputFilter
                    labelValue={"Timeframe"}
                    value={time}
                    handleChange={handleChange}
                    menuItems={["day", "week"]}
                    helperText={"Select the timeframe"}
                  />
                </Grid>

                <Grid item xs={12}>
                    <TrendingImageList trendingInfo={trendingInfo} moreDetailUrl={moreDetailUrl} />
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default TrendingPage;
