import React from "react";
import ContentReviews from "../components/contentReviews";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Content Reviews",
  component: ContentReviews,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <Grid container spacing={5}>
      <ContentReviews movie={SampleMovie} mediaType={"movie"} />
    </Grid>
  );
};
Basic.storyName = "Default";
