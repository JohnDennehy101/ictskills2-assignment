import React from "react";
import ContentList from "../components/contentList";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query"; 

export default {
  title: "Content List",
  component: ContentList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

export const Basic = () => {
  const movies = [
    { ...SampleMovie, favorite: true, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
    { ...SampleMovie, id: 5 },
  ];
  return (
      <QueryClientProvider client={queryClient}>
    <Grid container spacing={5}>
      <ContentList
        content={movies}
        mediaType={"movie"}
        userContentReviews={[]} 
        action={(movie) => (
          <AddToFavoritesIcon content={movie} mediaType={"movie"} />
        )}
      />
    </Grid>
    </QueryClientProvider>
  );
};
Basic.storyName = "Default";
