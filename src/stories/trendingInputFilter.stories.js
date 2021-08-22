import React from "react";
import TrendingInputFilter from "../components/trendingInputFilter";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Trending Input Filter",
  component: TrendingInputFilter,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TrendingInputFilter
      value={"movie"}
      handleChange={undefined}
      menuItems={["movie", "tv"]}
      helperText={"Select the media type"}
    />
  );
};
Basic.storyName = "Default";
