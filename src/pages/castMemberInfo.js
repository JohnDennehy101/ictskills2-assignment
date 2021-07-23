import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPersonCredits } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const CastMemberInfoPage = (props) => {
    console.log(props)
const { data, error, isLoading, isError } = useQuery(["person", props.match.params.id], 
() => getPersonCredits(props.match.params.id));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log(data);

  return (

    <>
     
    </>
  );
};

export default CastMemberInfoPage;
