import React from "react";
import IndividualReview from "../components/individualReview";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
const TestReview = {
    "author": "Peter89Spencer",
    "author_details": {
        "name": "",
        "username": "Peter89Spencer",
        "avatar_path": "/https://secure.gravatar.com/avatar/dadb1b759a8516c815cdcc58abcefc85.jpg",
        "rating": 8
    },
    "content": "The Suicide Squad...\r\n...stayed true to the hype of the anti-hero teams in DC.\r\n\r\nI feel like it wasn't really a sequel but rather a reboot and ignoring the first film.\r\nThe action was insane and BLOODY brilliant, with a stellar cast. And they LITERALLY killed off the first team at the very start of the film! To be honest, I wasn't really surprised as I didn't see more of them in later scenes of the trailer. But I was surprised they killed off Captain Boomerang - he was basically the primary member of the team! And I especially wanted to see more character build up with Savant, learn more of his backstory. Instead, he just turned out to be a totally wuss that's only good at killing small birds! But what shocked me the most was Rick Flagg's death!\r\n\r\nStill, Idris Elba and John Cena were fucking awesome as Bloodsport and Peacemaker, respectively. And King Shark was hilariously awesome. Funnier that Groot because at least he says more than three words - although, \"hand\" would have to be my favourite moment!\r\n\r\nI did had mixed feelings from the start, but then I started to really get into it all!",
    "created_at": "2021-07-30T23:37:33.102Z",
    "id": "61048d3d688cd0007f215a28",
    "updated_at": "2021-07-30T23:37:33.102Z",
    "url": "https://www.themoviedb.org/review/61048d3d688cd0007f215a28"
};



export default {
  title: "Individual Review",
  component: IndividualReview,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
 
      <IndividualReview review={TestReview} /> 
 
  );
};
Basic.storyName = "Default";
