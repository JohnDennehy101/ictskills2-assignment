import React from "react";
import CastMemberAvatar from "../components/castMemberAvatar";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

const personDetail =   {
            "adult": false,
            "gender": 2,
            "id": 73421,
            "known_for_department": "Acting",
            "name": "Joaquin Phoenix",
            "original_name": "Joaquin Phoenix",
            "popularity": 6.54,
            "profile_path": "/nXMzvVF6xR3OXOedozfOcoA20xh.jpg",
            "cast_id": 2,
            "character": "Bobby Green",
            "credit_id": "52fe432ac3a36847f803f6f7",
            "order": 0
        };

export default {
  title: "Cast Member Avatar",
  component: CastMemberAvatar,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastMemberAvatar personDetail={personDetail}/>
  );
};
Basic.storyName = "Default";
