import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateContentPage";
import IndividualReview from "../components/individualReview";

const ReviewPage = (props) => {
  const {movie, review} = props.location.state
  return (
    <PageTemplate content={movie}>
      <IndividualReview review={review} />
    </PageTemplate>
  );
};

export default withRouter(ReviewPage);