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
import { green, red, blue } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
});

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
  plusIcon: {
    cursor: "pointer",
  },
});

export default function MovieCast({ cast, handleClickOpen }) {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        className={classes.similarMoviesTitle}
      >
        Movie Cast
      </Typography>
      <List className={classes.root}>
        {cast.cast.map((castMember) => (
          <ListItem
            alignItems="flex-start"
            key={castMember.id}
            className={classes.individualItem}
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
