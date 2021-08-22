import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { green, red, blue } from "@material-ui/core/colors";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";

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

export default function CastModal({ handleClose, actorDetail, open }) {
  const classes = useStyles();
  let infoDetailAvailable =
    actorDetail !== undefined && actorDetail.biography !== "";

  return (
    <>
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
          {infoDetailAvailable ? (
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
          ) : (
            <Alert variant="outlined" severity="info">
              No further information available for this cast member.
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
          {infoDetailAvailable ? (
            <Button autoFocus color="primary">
              <Link href={`/person/credits/${actorDetail.id}`}>
                Full Details
              </Link>
            </Button>
          ) : (
            <></>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
