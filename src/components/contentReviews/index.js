import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {
  getMovieReviews,
  getTvReviews,
  getUserAccount,
} from "../../api/tmdb-api";
import { excerpt, isLoggedInUser } from "../../util";
import firebase from "../../firebase";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
  tableMobile: {
    width: 100,
  },
});

export default function ContentReviews({ movie, mediaType }) {
  let apiCall = mediaType === "movie" ? getMovieReviews : getTvReviews;
  const sessionId = isLoggedInUser();
  let allReviews = [];
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [userId, setUserId] = useState(undefined);
  const [reviews, setReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);

  const tableStyle = isMobile ? classes.tableMobile : classes.table;

  useEffect(() => {
    apiCall(movie.id).then((reviews) => {
      setReviews(reviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      getUserAccount(sessionId).then((userData) => {
        const itemsRef = firebase.database().ref(`${mediaType}/${userData.id}`);
        setUserId(userData.id);

        itemsRef.once("value", (snapshot) => {
          let items = snapshot.val();
          let reviewArray = [];
          for (let item in items) {
            reviewArray.push({
              firebaseId: item,
              author: items[item].author,
              mediaId: items[item].mediaId,
              content: items[item].content,
              rating: items[item].rating,
            });
          }
          setUserReviews(reviewArray);
        });
      });
    };

    if (sessionId) {
      fetchData();
    }
  }, [mediaType]);

  allReviews = [...reviews];

  if (userReviews.length > 0) {
    let userReviewCheck = userReviews.find(
      (review) => review.mediaId === movie.id
    );
    console.log(userReviewCheck);
    if (userReviewCheck) {
      allReviews = [
        ...reviews,
        {
          id: userReviewCheck.firebaseId,
          author: userReviewCheck.author,
          content: userReviewCheck.content,
          userReview: true,
        },
      ];
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table className={tableStyle} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allReviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell>{excerpt(r.content)}</TableCell>
              <TableCell>
                {!r.userReview ? (
                  <Link
                    to={{
                      pathname: `/reviews/${r.id}`,
                      state: {
                        review: r,
                        movie: movie,
                      },
                    }}
                  >
                    Full Review
                  </Link>
                ) : (
                  <Link
                    to={{
                      pathname: `/content/reviewed`,
                    }}
                  >
                    Full Review
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
