import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import useForm from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import { withRouter } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import firebase from "../../firebase";
import { getUserAccount, reviewContent } from "../../api/tmdb-api";
import { isLoggedInUser, ratingOptions } from "../../util";

const ratings = ratingOptions();

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: theme.spacing(2),
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
}));

const ReviewForm = ({ content, history, mediaType, existingReview }) => {
  const sessionId = isLoggedInUser();
  let contextType;
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  contextType = mediaType === "movie" ? MoviesContext : TvShowsContext;

  let context = useContext(contextType);
  const [rating, setRating] = useState(3);
  const [open, setOpen] = React.useState(false);
  const [userId, setUserAccountId] = useState(undefined);
  const [author, setAuthor] = useState("");
  const [reviewContentText, setContent] = useState("");

  const itemsRef = firebase.database().ref(`${mediaType}/${userId}`);

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setAuthor(existingReview.author);
      setContent(existingReview.content);
    }
  }, []);

  useEffect(() => {
    getUserAccount(sessionId).then((userData) => {
      setAuthor(userData.name);
      setUserAccountId(userData.id);
    });
  });

  const handleSnackClose = (event) => {
    setOpen(false);
    history.push("/content/reviewed");
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const onSubmit = async (review) => {
    console.log(content);
    review.mediaId = content.id;
    review.rating = rating;
    review.accountId = userId;
    review.mediaType = mediaType;
    if (existingReview) {
      itemsRef.child(existingReview.firebaseId).update({
        author: review.author,
        rating: rating,
        content: review.content,
      });
    } else {
      itemsRef.push(review);
    }

    context.addReview(content, review);
    await reviewContent(mediaType, content.id, rating);
    setOpen(true);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const resetReviewFields = () => {
    setAuthor("");
    setContent("");
  };

  return (
    <Box component="div" className={classes.root}>
      <Typography component="h2" variant="h3">
        Write a review
      </Typography>
      <Snackbar
        className={classes.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <MuiAlert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for submitting a review
          </Typography>
        </MuiAlert>
      </Snackbar>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="author"
          value={author}
          onChange={handleAuthorChange}
          label="Author's name"
          name="author"
          value={author}
          autoFocus
          inputRef={register({ required: "Author name required" })}
        />
        {errors.author && (
          <Typography variant="h6" component="p">
            {errors.author.message}
          </Typography>
        )}

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={reviewContentText}
          onChange={handleContentChange}
          name="content"
          label="Review text"
          id="content"
          multiline
          rows={10}
          inputRef={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" },
          })}
        />
        {errors.content && (
          <Typography variant="h6" component="p">
            {errors.content.message}
          </Typography>
        )}
        <TextField
          id="select-rating"
          select
          variant="outlined"
          label="Rating Select"
          value={rating}
          onChange={handleRatingChange}
          helperText="Don't forget your rating"
        >
          {ratings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={resetReviewFields}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default withRouter(ReviewForm);
