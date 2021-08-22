import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPersonCredits, getPersonDetail } from "../api/tmdb-api";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CastMemberAvatar from "../components/castMemberAvatar";
import CastMemberIndividualInfo from "../components/castMemberIndividualInfo";
import CastMemberBiography from "../components/castMemberBiography";
import CastMemberCredits from "../components/castMemberCredits";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: "center",
    margin: "20px 10px",
  },
  root2: {
    width: "100%",
  },
  container: {
    maxHeight: 840,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2,
  },
}));

const CastMemberInfoPage = (props) => {
  let rows = [];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { data, error, isLoading, isError } = useQuery(
    ["personCredits", props.match.params.id],
    () => getPersonCredits(props.match.params.id)
  );
  const { data: personDetail } = useQuery(
    ["personDetail", props.match.params.id],
    () => getPersonDetail(props.match.params.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  function createData(
    poster,
    title,
    character,
    overview,
    release_date,
    average_rating,
    type,
    id
  ) {
    return {
      poster,
      title,
      character,
      overview,
      release_date,
      average_rating,
      type,
      id,
    };
  }

  data.cast.forEach((item) => {
    let title = "";
    if ("name" in item) {
      title = item["name"];
    } else {
      title = item["title"];
    }
    rows.push(
      createData(
        `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        title,
        item.character,
        item.overview,
        item.release_date,
        item.vote_average,
        item.media_type,
        item.id
      )
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {personDetail ? (
        <Container width="80vw">
          <div className={classes.root}>
            <Grid container spacing={3}>
              <CastMemberAvatar isMobile={isMobile} personDetail={personDetail} />

              <CastMemberIndividualInfo
                type={"placeOfBirth"}
                personDetail={personDetail}
                icon={<HomeIcon color="primary" fontSize="large" />}
              />
              <CastMemberIndividualInfo
                type={"popularity"}
                personDetail={personDetail}
                icon={<FavoriteIcon color="primary" fontSize="large" />}
              />
              <CastMemberIndividualInfo
                type={"dateOfBirth"}
                personDetail={personDetail}
                icon={<PersonPinIcon color="primary" fontSize="large" />}
              />

              <CastMemberBiography isMobile={isMobile} biography={personDetail.biography} />
              {rows.length > 0 ? (
                <CastMemberCredits
                  isMobile={isMobile}
                  data={data}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  rows={rows}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
              ) : (
                <Spinner />
              )}
            </Grid>
          </div>
          <Fab
            color="secondary"
            variant="extended"
            className={classes.fab}
            onClick={() => props.history.goBack()}
          >
            <ArrowBackIcon />
            Back To Movie
          </Fab>
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CastMemberInfoPage;
