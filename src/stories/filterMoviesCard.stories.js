import React from "react";
import FilterMoviesCard from "../components/filterMoviesCard";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});
let nameFilter,
  genreFilter,
  releaseYearFilter,
  firstAirDate,
  handleChange,
  averageRatingGreaterThanFilter,
  averageRatingLessThanFilter,
  durationGreaterThanFilter,
  durationLessThanFilter,
  originalLanguage,
  sortCategory,
  filteredMoviesSearch,
  getAdvancedFilterResults,
  handleOpen,
  handleFilterClose,
  favouritePage;
let mediaType = "movie";

export default {
  title: "Home Page/FilterMoviesCard",
  component: FilterMoviesCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => {
  return (
    <FilterMoviesCard
      onUserInput={action("filter input")}
      onUserInput={handleChange}
      titleFilter={nameFilter}
      genreFilter={genreFilter}
      releaseYearFilter={releaseYearFilter}
      firstAirDateFilter={firstAirDate}
      averageRatingGreaterThanFilter={averageRatingGreaterThanFilter}
      averageRatingLessThanFilter={averageRatingLessThanFilter}
      durationGreaterThanFilter={durationGreaterThanFilter}
      durationLessThanFilter={durationLessThanFilter}
      originalLanguage={originalLanguage}
      sortCategory={sortCategory}
      filteredMoviesSearch={filteredMoviesSearch}
      advancedSearch={getAdvancedFilterResults}
      modalDisplay={false}
      handleOpen={handleOpen}
      handleClose={handleFilterClose}
      mediaType={mediaType}
      favouritepage={favouritePage}
    />
  );
};
Basic.storyName = "Default";
