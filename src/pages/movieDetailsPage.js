import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import SimilarMoviesComponent from "../components/similarMovies";
import { getMovie, getSimilarMovies, getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieCast from "../components/movieCast";
import CastModal from "../components/castModal";
import { getPersonDetail } from "../api/tmdb-api";

const MovieDetailsPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [actorDetail, setActorDetails] = React.useState({});

  const handleClickOpen = async (id) => {
    console.log(id);

    const personDetail = await getPersonDetail(id);

    setOpen(true);
    setActorDetails({
      id: personDetail.id,
      name: personDetail.name,
      from: personDetail.place_of_birth,
      popularity: personDetail.popularity,
      biography: personDetail.biography,
      dateOfBirth: personDetail.birthday,
      image: personDetail.profile_path,
    });
  };
  const handleClose = () => {
    setOpen(false);
    setActorDetails({});
  };
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
  const { data: movieCast } = useQuery(["movieCast", { id: id }], getMovieCast);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie && similarMovies && movieCast ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <SimilarMoviesComponent itemData={similarMovies} />
            <MovieCast cast={movieCast} handleClickOpen={handleClickOpen} />
            <CastModal
              handleClose={handleClose}
              actorDetail={actorDetail}
              open={open}
            />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
