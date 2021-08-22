import React from "react";
import CastMemberCredits from "../components/castMemberCredits";
import SampleCastCredits from "./sampleCastCredits";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Cast Member Credits",
  component: CastMemberCredits,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastMemberCredits
      page={1}
      rowsPerPage={20}
      rows={SampleCastCredits}
      handleChangePage={undefined}
      handleChangeRowsPerPage={undefined}
    />
  );
};
Basic.storyName = "Default";
