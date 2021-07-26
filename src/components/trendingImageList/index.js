// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function TrendingImageList({
  trendingInfo,
  moreDetailUrl
}) {
  const useStyles = makeStyles((theme) => ({
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
  }));

  const classes = useStyles();
  return (
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
  );
}
