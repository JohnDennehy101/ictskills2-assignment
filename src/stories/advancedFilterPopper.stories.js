import React from "react";
import AdvancedFilterPopper from "../components/advancedFilterPopper";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import Grid from "@material-ui/core/Grid";

const tableRows = [
  {
    title: "Release Year",
    value: 2016,
  },
  { title: "Original Language", value: "French" },
];

export default {
  title: "Advanced Filter Page/Advanced Filter Display Popper",
  component: AdvancedFilterPopper,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <Grid container spacing={5}>
      <AdvancedFilterPopper
        anchorEl={true}
        tableRows={tableRows}
        id={"transitions-popper"}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
