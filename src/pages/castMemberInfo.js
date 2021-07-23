import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPersonCredits } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const CastMemberInfoPage = (props) => {
    console.log(props);
const { data, error, isLoading, isError } = useQuery("castMember", getPersonCredits(props.match.params.id));


//   const [filter, setFilter] = useState(false);
//   const [filterData, setFilterData] = useState([]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
//   let movies;
//   if (filter) {
//     movies = filterData;
//   } else {
//     movies = data.results;
//   }

  // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter((m) => m.favorite);
//   localStorage.setItem("favorites", JSON.stringify(favorites));

//   let filteredSearchFunction = async (
//     release_year,
//     average_rating_greater_than,
//     average_rating_less_than,
//     duration_less_than,
//     duration_greater_than,
//     original_language,
//     sort_category
//   ) => {
//     let filterApiCall = await filteredMoviesSearch(
//       release_year,
//       average_rating_greater_than,
//       average_rating_less_than,
//       duration_less_than,
//       duration_greater_than,
//       original_language,
//       sort_category
//     );
//     movies = filterApiCall.results;
//     setFilterData(filterApiCall.results);
//     setFilter(true);

    //movies = await
  //};
  return (
    // <PageTemplate
    //   title="Discover Movies"
    //   movies={movies}
    //   action={(movie) => {
    //     return <AddToFavoritesIcon movie={movie} />;
    //   }}
    //   filteredMoviesSearch={filteredSearchFunction}
    // />
    <>
    </>
  );
};

export default CastMemberInfoPage;
