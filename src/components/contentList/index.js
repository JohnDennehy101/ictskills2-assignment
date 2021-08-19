import React from "react";
import ContentCard from "../contentCard";
import Grid from "@material-ui/core/Grid";
import { isLoggedInUser } from "../../util";
import { getMustWatchItems, getFavourites } from "../../api/tmdb-api";
import { useQuery } from "react-query";

const ContentList = ({ content, action, mediaType, userContentReviews }) => {
  const enableQuery = isLoggedInUser() ? true : false;
  let movieCards;
  let mustWatchIds = [];
  let favoriteIds = [];
  let userContentReviewIds = [];
  let linkUrl;

  if (userContentReviews) {
    if (userContentReviews.length > 0) {
      for (let review in userContentReviews) {
        userContentReviewIds.push(userContentReviews[review].mediaId);
      }
    }

  }


  const {
    data: favoriteContent,
    error: favoriteError,
    isLoading: favoriteLoading,
    isError: isFavoriteError,
  } = useQuery(
    [`favourites`, mediaType],
    () => getFavourites(mediaType, undefined),
    { keepPreviousData: false, staleTime: 5000, enabled: enableQuery }
  );

  const {
    data: mustWatchContent,
    error: mustWatchError,
    isLoading: mustWatchLoading,
    isError: isMustWatchError,
  } = useQuery(
    [`mustWatch`, mediaType],
    () => getMustWatchItems(mediaType, undefined),
    { keepPreviousData: false, staleTime: 5000, enabled: enableQuery }
  );

  if (mustWatchLoading) {
  } else if (!mustWatchLoading && isLoggedInUser()) {
    mustWatchContent.map((mustWatch) => mustWatchIds.push(mustWatch.id));
  }

  if (favoriteLoading) {
  } else if (!favoriteLoading && isLoggedInUser()) {
    favoriteContent.map((favorite) => favoriteIds.push(favorite.id));
  }

  content.map((individualItem) => {
    if (mustWatchIds.includes(individualItem.id)) {
      individualItem.mustWatch = true;
    }
    if (favoriteIds.includes(individualItem.id)) {
      individualItem.favorite = true;
    }
    if (userContentReviewIds.includes(individualItem.id)) {
      let review = userContentReviews.find((item) => item.mediaId === individualItem.id);
      individualItem.review = review.content;
      individualItem.rating = review.rating;
    }
    
  });

  

  if (content.length > 0) {
    movieCards = content.map((m) => (
      <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <ContentCard
          key={m.id}
          content={m}
          action={action}
          mediaType={mediaType}
        
        />
      </Grid>
    ));
  } else {
    movieCards = <></>;
  }

  return movieCards;
};

export default ContentList;
