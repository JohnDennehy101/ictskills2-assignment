import React from "react";
import SimilarContent from "../components/similarContent";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import SampleMovie from "./sampleData";

const itemData = {
  results: [
    SampleMovie,
    SampleMovie,
    SampleMovie,
    SampleMovie,
    SampleMovie,
    SampleMovie,
    SampleMovie,
    SampleMovie,
    SampleMovie,
  ],
};

export default {
  title: "Similar Content",
  component: SimilarContent,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return <SimilarContent itemData={itemData} mediaType={"movie"} />;
};
Basic.storyName = "Default";
