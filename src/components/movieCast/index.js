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

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import LiveTvIcon from "@material-ui/icons/LiveTv";
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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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

export default function MovieCast({ cast }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [actorDetail, setActorDetails] = React.useState({});

  const handleClickOpen = async (id) => {
    console.log(id);
    let test = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=2a300a0c508fbced667dcab1a12a860c&language=en-US&page=1`
    );
    let test2 = await test.json();
    console.log(test2);
    setOpen(true);
    setActorDetails({
      name: test2.name,
      from: test2.place_of_birth,
      popularity: test2.popularity,
      biography: test2.biography,
      dateOfBirth: test2.birthday,
      image: test2.profile_path,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

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

      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {actorDetail.name}
        </DialogTitle>
        <DialogContent dividers>
          {/* <Paper component="ul" className={classes.paper}>
 <Chip size="small" padding="10px" className={classes.chip} color="primary" label="Basic shit" />
 <Chip size="small" className={classes.chip} color="primary" label="Basic" />
 <Chip size="small" className={classes.chip} color="primary" label="Basic" />
 </Paper> */}

          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={`https://image.tmdb.org/t/p/w500${actorDetail.image}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Biography"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Summary
                    </Typography>
                    {actorDetail.biography}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Date of Birth"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {actorDetail.dateOfBirth}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar className={classes.green}>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Place of Birth"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {actorDetail.from}
                  </Typography>
                }
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar className={classes.red}>
                <Avatar className={classes.red}>
                  <LiveTvIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Popularity"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {actorDetail.popularity}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
