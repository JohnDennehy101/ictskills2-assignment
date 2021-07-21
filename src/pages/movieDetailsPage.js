import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import SimilarMoviesComponent from "../components/similarMovies";
import { getMovie, getSimilarMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieCast from "../components/movieCast";

const MovieDetailsPage = (props) => {
  const { id } = props.match.params;
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovie);
  const { data: similarMovies } = useQuery(
    ["similarMovies", { id: id }],
    getSimilarMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie && similarMovies ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <SimilarMoviesComponent itemData={similarMovies} />
            <MovieCast />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
