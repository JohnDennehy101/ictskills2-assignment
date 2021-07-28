import React from "react";
import ContentCard from "../contentCard";
import Grid from "@material-ui/core/Grid";

const ContentList = ( {content, action, mediaType}) => {
  let movieCards;
  
  if (content.length > 0) {
movieCards = content.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ContentCard key={m.id} movie={m} action={action} mediaType={mediaType}/>
    </Grid>
  ));
  }
  else {
    movieCards = <></>
  }
  
  return movieCards;
};

export default ContentList;