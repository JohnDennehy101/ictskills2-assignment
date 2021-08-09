import React from "react";
import HeaderContentList from "../components/headerContentList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Content Page Header",
  component: HeaderContentList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <HeaderContentList title="Discover Movies" mediaType={'movie'} />;

Basic.storyName = "Default";
