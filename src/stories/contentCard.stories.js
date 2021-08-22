import React from "react";
import ContentCard from "../components/contentCard";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Content List Page/ContentCard",
  component: ContentCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ContentCard
      content={SampleMovie}
      action={(movie) => <AddToFavoritesIcon content={movie} />}
      mediaType={"movie"}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <ContentCard
      content={sampleNoPoster}
      action={(movie) => <AddToFavoritesIcon content={movie} />}
      mediaType={"movie"}
    />
  );
};
Exceptional.storyName = "exception";
