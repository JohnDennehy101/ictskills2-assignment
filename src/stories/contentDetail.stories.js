import React from "react";
import ContentDetail from "../components/contentDetail";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Content Detail Page",
  component: ContentDetail,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => (
  <ContentDetail movie={SampleMovie} mediaType={"movie"} />
);

Basic.storyName = "Default";
