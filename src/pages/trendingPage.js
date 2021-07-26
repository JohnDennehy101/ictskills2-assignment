import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTrendingItems } from "../api/tmdb-api";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TrendingInputFilter from "../components/trendingInputFilter";

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
  imageList: {
    width: 900,
    height: "100vh",
    margin: "10px auto !important",
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  link: {
    width: "100%",
  },
  heading: {
    margin: "40px auto",
    fontWeight: "500",
    width: "100%",
    textAlign: "center",
  },
  formControl: {
    margin: "20px",
    width: "250px",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
                  <ImageList
                    rowHeight={200}
                    gap={1}
                    className={classes.imageList}
                  >
                    {trendingInfo.map((item) => (
                      <ImageListItem
                        key={item.img}
                        cols={item.featured ? 2 : 1}
                        rows={item.featured ? 2 : 1}
                      >
                        <img src={item.img} alt={item.title} />
                        <a href={`${moreDetailUrl}/${item.id}`}>
                          <ImageListItemBar
                            title={item.title}
                            position="top"
                            actionIcon={
                              <IconButton
                                aria-label={`star ${item.title}`}
                                className={classes.icon}
                              >
                                <ChevronRightIcon />
                              </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                          />
                        </a>
                      </ImageListItem>
                    ))}
                  </ImageList>
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
