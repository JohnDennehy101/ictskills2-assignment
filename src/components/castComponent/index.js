import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  inline: {
    display: "inline",
    padding: "10px 10px 0px 0px",
  },
  individualItem: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  individualItemMobile: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    cursor: "pointer",
  },
});

export default function CastComponent({ cast, handleClickOpen, mediaType }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  let title = mediaType === 'movie' ? 'Movie' : 'TV Show'
  let individualItemStyling = isMobile ? classes.individualItemMobile : classes.individualItem


  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        className={classes.similarMoviesTitle}
      >
        {title} Cast
      </Typography>
      <List className={classes.root}>
        {cast.cast.map((castMember) => (
          <ListItem
            alignItems="flex-start"
            key={castMember.id}
            className={individualItemStyling}
          >
            <ListItemAvatar>
              <Avatar
                alt={castMember.name}
                src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={castMember.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Character:
                  </Typography>
                  {castMember.character}
                </React.Fragment>
              }
            />
            <AddIcon
              className={classes.plusIcon}
              onClick={() => handleClickOpen(castMember.id)}
            />
          </ListItem>
        ))}
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
}
