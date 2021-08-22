import React from "react";
import ReviewForm from "../components/reviewForm";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import SampleMovie from "./sampleData";

export default {
  title: "Review Form",
  component: ReviewForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ReviewForm content={SampleMovie} history={undefined} mediaType={"movie"} />
  );
};
Basic.storyName = "Default";
