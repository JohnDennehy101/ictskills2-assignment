import React from "react";
import { withRouter } from "react-router-dom";
import ContentDetail from "../components/contentDetail";
import PageTemplate from "../components/templateContentPage";
import SimilarContent from "../components/similarContent";
import { getMovie, getSimilarMovies, getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import CastComponent from "../components/castComponent";
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
          <PageTemplate content={movie} mediaType={'movie'}>
            <ContentDetail movie={movie} mediaType={'movie'} />
            <SimilarContent itemData={similarMovies} mediaType={'movie'} />
            <CastComponent cast={movieCast} handleClickOpen={handleClickOpen} mediaType={'movie'} />
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
