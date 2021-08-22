import React from "react";
import AdvancedFilterModal from "../components/advancedFilterModal";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import Grid from "@material-ui/core/Grid";

let firstYear = 2021;
let lastYear = 1920;
let yearOptions = [];

while (firstYear > lastYear) {
  yearOptions.push(firstYear);
  firstYear--;
}

export default {
  title: "Content List Page/Advanced Filter Modal",
  component: AdvancedFilterModal,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <Grid container spacing={5}>
      <AdvancedFilterModal
        yearOptions={yearOptions}
        averageRatingGreaterThanOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        averageRatingLessThanOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        durationGreaterThanOptions={[
          5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
          95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150,
        ]}
        durationLessThanOptions={[
          5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
          95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150,
        ]}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
