import React from "react";
import ContentCard from "../contentCard";
import Grid from "@material-ui/core/Grid";

const ContentList = ( {movies, action, mediaType}) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ContentCard key={m.id} movie={m} action={action} mediaType={mediaType}/>
    </Grid>
  ));
  return movieCards;
};

export default ContentList;