import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import SimilarMoviesComponent from "../components/similarMovies";
import { getTvShow, getSimilarTvShows, getTvCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieCast from "../components/movieCast";
import CastModal from "../components/castModal";
import { getPersonDetail } from "../api/tmdb-api";

const MovieDetailsPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [actorDetail, setActorDetails] = React.useState({});

  const handleClickOpen = async (id) => {
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
    data: tvShow,
    error,
    isLoading,
    isError,
  } = useQuery(["tv", { id: id }], getTvShow);
  const { data: similarTvShows } = useQuery(
    ["similarTvShows", { id: id }],
    getSimilarTvShows
  );
  const { data: tvShowCast } = useQuery(["tvShowCast", { id: id }], getTvCast);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvShow && similarTvShows && tvShowCast ? (
        <>
          <PageTemplate movie={tvShow}>
            <MovieDetails movie={tvShow} />
            <SimilarMoviesComponent itemData={similarTvShows} />
            <MovieCast cast={tvShowCast} handleClickOpen={handleClickOpen} />
            <CastModal
              handleClose={handleClose}
              actorDetail={actorDetail}
              open={open}
            />
          </PageTemplate>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
