import React from "react";
import TrendingImageList from "../components/trendingImageList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

const trendingInfo = [ {
    "img": "https://image.tmdb.org/t/p/w500/bwBmo4I3fqMsVvVtamyVJHXGnLF.jpg",
    "title": "Jungle Cruise",
    "author": "author",
    "featured": true,
    "id": 451048
},
{
    "img": "https://image.tmdb.org/t/p/w500/yeNH8w3yEAfZxHsTig2pG8B13vN.jpg",
    "title": "The Last Mercenary",
    "author": "author",
    "featured": false,
    "id": 729720
},
{
    "img": "https://image.tmdb.org/t/p/w500/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg",
    "title": "Jolt",
    "author": "author",
    "featured": false,
    "id": 617502
},
{
    "img": "https://image.tmdb.org/t/p/w500/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg",
    "title": "Jolt",
    "author": "author",
    "featured": true,
    "id": 617502
},
{
    "img": "https://image.tmdb.org/t/p/w500/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg",
    "title": "Jolt",
    "author": "author",
    "featured": false,
    "id": 617502
},
{
    "img": "https://image.tmdb.org/t/p/w500/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg",
    "title": "Jolt",
    "author": "author",
    "featured": false,
    "id": 617502
}
]


export default {
  title: "Trending Image List",
  component: TrendingImageList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
   
      <TrendingImageList trendingInfo={trendingInfo} moreDetailUrl={'/movies'} />
 
  );
};
Basic.storyName = "Default";
