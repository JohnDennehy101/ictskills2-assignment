import React from "react";
import PageTemplate from "../components/templateContentPage";
import ReviewForm from "../components/reviewForm";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie, getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  console.log(props);
  const { contentId } = props.location.state;
  const { pathname } = props.location;

  let movieCheck = pathname.includes('movie') ? true : false;
  console.log(movieCheck);

  let apiCall = movieCheck === true ? getMovie : getTvShow;

  console.log(contentId);
  const { data: content, error, isLoading, isError } = useQuery(
    ["content", { id: contentId }],
    apiCall
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate content={content}>
      <ReviewForm content={content} />
    </PageTemplate>
  );
};

export default withRouter(WriteReviewPage);