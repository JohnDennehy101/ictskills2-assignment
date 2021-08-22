import React from "react";
import CastComponent from "../components/castComponent";
import SampleCastData from "./sampleCastData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Cast Overview",
  component: CastComponent,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastComponent
      cast={SampleCastData}
      handleClickOpen={undefined}
      mediaType={"movie"}
    />
  );
};
Basic.storyName = "Default";

// export const Exceptional = () => {
//   const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
//   return (
//     <ContentCard
//       content={sampleNoPoster}
//       action={(movie) => <AddToFavoritesIcon content={movie} />}
//       mediaType={'movie'}
//     />
//   );
// };
// Exceptional.storyName = "exception";
