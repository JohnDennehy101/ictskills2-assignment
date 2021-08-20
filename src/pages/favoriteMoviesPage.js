import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateContentListPage";
import { useQuery } from "react-query";
import { getFavourites, getUserAccount } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import { determinePaginationRange, isLoggedInUser } from "../util";
import firebase from "../firebase";

const FavoriteMoviesPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mediaTypeChosen, setMediaType] = useState("movie");
  const [page, setPage] = React.useState(1);
  const [reviews, setUserReviews] = useState([]);
  const [userId, setUserId] = useState(undefined);
  let title =
    mediaTypeChosen === "movie" ? "Favourite Movies" : "Favourite TV Shows";
  const sessionId = isLoggedInUser();

  useEffect(() => {
    const fetchData = async () => {
      getUserAccount(sessionId).then((userData) => {
        const itemsRef = firebase
          .database()
          .ref(`${mediaTypeChosen}/${userData.id}`);
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
    fetchData();
  }, [mediaTypeChosen]);

  const {
    data: content,
    error: favouritesError,
    isLoading: favouritesLoading,
    isError: isFavouritesError,
  } = useQuery(
    [`favourites`, page, mediaTypeChosen],
    () => getFavourites(mediaTypeChosen, page),
    { keepPreviousData: false, staleTime: 5000 }
  );

  if (favouritesLoading) {
    return <Spinner />;
  }

  const pageRange = determinePaginationRange(content.length);

  const handleModalClose = () => {
    setDrawerOpen(false);
  };
  const handleClose = (e) => {
    setMediaType(e.target.value);
    setDrawerOpen(false);
  };

  return (
    <PageTemplate
      title={title}
      content={content}
      favouritePage={true}
      mediaType={mediaTypeChosen}
      mediaTypeChosen={mediaTypeChosen}
      handleClose={handleClose}
      setDrawerOpen={setDrawerOpen}
      drawerOpen={drawerOpen}
      handleModalClose={handleModalClose}
      pageRange={pageRange}
      action={(content) => {
        return (
          <>
            <RemoveFromFavorites
              content={content}
              mediaType={mediaTypeChosen}
            />
            <WriteReview
              content={content}
              mediaType={mediaTypeChosen}
              content={content}
              userId={userId}
              reviews={reviews}
            />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;
