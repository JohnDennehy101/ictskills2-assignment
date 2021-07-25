import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPersonCredits, getPersonDetail } from "../api/tmdb-api";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import img from "../images/film-poster-placeholder.png";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import CastMemberAvatar from "../components/castMemberAvatar";
import CastMemberIndividualInfo from "../components/castMemberIndividualInfo";
import CastMemberBiography from "../components/castMemberBiography";

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

const columns = [
  { id: "poster", label: "Poster", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 170 },
  { id: "character", label: "Character", minWidth: 100 },
  {
    id: "overview",
    label: "Summary",
    minWidth: 220,
    align: "left",
  },
  {
    id: "release_date",
    label: "Release Date",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "average_rating",
    label: "Average Rating",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "type",
    label: "Media Type",
    minWidth: 170,
    align: "left",
  },
  {
    id: "id",
    label: "id",
    minWidth: 0,
    align: "left",
  },
];

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

const CastMemberInfoPage = (props) => {
  let rows = [];
  let age;
  let currentDate = new Date();

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data, error, isLoading, isError } = useQuery(
    ["personCredits", props.match.params.id],
    () => getPersonCredits(props.match.params.id)
  );
  const { data: personDetail, isLoading: personDetailLoading } = useQuery(
    ["personDetail", props.match.params.id],
    () => getPersonDetail(props.match.params.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
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

  if (!personDetailLoading) {
    age =
      currentDate.getFullYear() - new Date(personDetail.birthday).getFullYear();
  }

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
              <CastMemberAvatar personDetail={personDetail} />

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

              <CastMemberBiography biography={personDetail.biography} />

              <Typography className={classes.title} variant="h3" gutterBottom>
                Appears In
              </Typography>
              <Grid item xs={12}>
                <Paper className={classes.root}>
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  let valueImageCheck = undefined;
                                  let imageNullCheck = undefined;
                                  let buttonCheck = undefined;

                                  if (column.id === "poster") {
                                    valueImageCheck = true;
                                    if (value.includes("null")) {
                                      imageNullCheck = true;
                                    }
                                  } else if (column.id === "id") {
                                    valueImageCheck = true;
                                    buttonCheck = true;
                                    imageNullCheck = true;
                                  }

                                  return (
                                    <>
                                      {valueImageCheck === undefined ? (
                                        <TableCell
                                          key={column.id}
                                          align={column.align}
                                        >
                                          {column.format &&
                                          typeof value === "number"
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                      ) : imageNullCheck === undefined ? (
                                        <TableCell>
                                          <img
                                            width="200px"
                                            height="125px"
                                            src={`https://image.tmdb.org/t/p/w500${value}`}
                                          />
                                        </TableCell>
                                      ) : buttonCheck === undefined ? (
                                        <TableCell>
                                          <img
                                            width="200px"
                                            height="125px"
                                            src={img}
                                          />
                                        </TableCell>
                                      ) : (
                                        <TableCell>
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            href={`/movies/${value}`}
                                          >
                                            More Info
                                          </Button>
                                        </TableCell>
                                      )}
                                    </>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </Grid>
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
