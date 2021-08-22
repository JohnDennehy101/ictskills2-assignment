import React from "react";
import TrendingPageTitle from "../components/trendingPageTitle";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Trending Page/Trending Page Title",
  component: TrendingPageTitle,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return <TrendingPageTitle mediaType={"movie"} />;
};
Basic.storyName = "Default";
