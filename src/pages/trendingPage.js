import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
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

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { queryClient } from "../index";

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
  const [time, setTime] = React.useState("day");
  const [mediaType, setMediaType] = React.useState("movie");

  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(["trending"], () =>
    getTrendingItems(mediaType, time)
  );

  const { mutateAsync, isError: testing } = useMutation(getTrendingItems);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
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
      let test1 = await mutateAsync(event.target.value, time);

      queryClient.setQueryData(["trending"], test1);

      setMediaType(event.target.value);
    } else {
      let test2 = await mutateAsync(mediaType, event.target.value);

      queryClient.setQueryData(["trending"], test2);
   

      setTime(event.target.value);


    }

   
  };

  return (
    <>
      {data ? (
        <Container width="90vw">
          <div className={classes.root}>
            <Typography variant="h2" className={classes.heading} gutterBottom>
              Trending {mediaType}s {time}
            </Typography>

            <div className={classes.gridParent}>
              <Grid container spacing={3}>
                <Grid item xs={12} className={classes.selectGrid}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Media Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={mediaType}
                      onChange={handleChange}
                    >
                      <MenuItem value={"movie"}>Movie</MenuItem>
                      <MenuItem value={"tv"}>TV</MenuItem>
                      <MenuItem value={"person"}>Person</MenuItem>
                    </Select>
                    <FormHelperText>Select the media type</FormHelperText>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label-2">
                      time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label-2"
                      id="demo-simple-select-helper-2"
                      value={time}
                      onChange={handleChange}
                    >
                      <MenuItem value={"day"}>Day</MenuItem>
                      <MenuItem value={"week"}>Week</MenuItem>
                    </Select>
                    <FormHelperText>Select the time</FormHelperText>
                  </FormControl>
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
                        <a href={`/movies/${item.id}`}>
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
