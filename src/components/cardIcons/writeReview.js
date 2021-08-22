import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ content, mediaType, userId, reviews }) => {
  return (
    <Link
      to={{
        pathname: `/reviews/${mediaType}/form`,
        state: {
          contentId: content.id,
          userId: userId,
          reviews: reviews,
        },
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;
