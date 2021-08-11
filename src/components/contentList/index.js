import React, {useState} from "react";
import ContentCard from "../contentCard";
import Grid from "@material-ui/core/Grid";
import {isLoggedInUser} from "../../util";
import {getMustWatchItems, getFavourites } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";


const ContentList = ( {content, action, mediaType}) => {
  const enableQuery = isLoggedInUser() ? true : false;
  let movieCards;
  let mustWatchIds = [];
  let favoriteIds = [];
    const [fullyLoaded, setFullyLoaded] = useState(false);

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
   
  }
  else if (!mustWatchLoading && isLoggedInUser()) {
mustWatchContent.map((mustWatch) => mustWatchIds.push(mustWatch.id));
  }

  if (favoriteLoading) {
     
  }
   else if (!favoriteLoading && isLoggedInUser()) {
favoriteContent.map((favorite) => favoriteIds.push(favorite.id));
  }

  
  if (content.length > 0) {
movieCards = content.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ContentCard key={m.id} content={m} action={action} mediaType={mediaType} mustWatchIds={mustWatchIds} favoriteIds={favoriteIds}/>
    </Grid>
  ));
  }
  else {
    movieCards = <></>
  }
  
  return movieCards;
};

export default ContentList;