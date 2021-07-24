import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPersonCredits, getPersonDetail } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import movieDetailsPage from "./movieDetailsPage";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import img from "../images/film-poster-placeholder.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: "12vw",
    height: "20vh",
    margin: "20px auto",
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
];

function createData(
  poster,
  title,
  character,
  overview,
  release_date,
  average_rating,
  type
) {
  return {
    poster,
    title,
    character,
    overview,
    release_date,
    average_rating,
    type,
  };
}

const CastMemberInfoPage = (props) => {
  let rows = [];

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log(props);
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

  console.log(data.cast);
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
        item.media_type
      )
    );
  });

  console.log(rows);

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
              <Grid item xs={12}>
                <Typography className={classes.title} variant="h3" gutterBottom>
                  {personDetail.name}
                </Typography>

                <Avatar
                  alt={personDetail.name}
                  src={`https://image.tmdb.org/t/p/w500${personDetail.profile_path}`}
                  className={classes.large}
                />
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <HomeIcon color="primary" fontSize="large"/>

              <Typography className={classes.title} variant="h5" gutterBottom>
                {personDetail.place_of_birth}
              </Typography>
                </Paper>
                
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <FavoriteIcon color="primary" fontSize="large" />
                <Typography className={classes.title} variant="h5" gutterBottom>
                {personDetail.popularity}
              </Typography>
                </Paper>
                
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <PersonPinIcon color="primary" fontSize="large"/>
                <Typography className={classes.title} variant="h5" gutterBottom>
                {personDetail.birthday}
              </Typography>
                </Paper>
                
              </Grid>
              

              <Typography className={classes.title} variant="h3" gutterBottom>
                Biography
              </Typography>
              <Grid item xs={12}>
                <Paper>
                  <Typography
                    className={classes.title}
                    variant="subtitle1"
                    gutterBottom
                  >
                    {personDetail.biography}
                  </Typography>
                </Paper>
              </Grid>

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

                                  if (column.id === "poster") {
                                    valueImageCheck = true;
                                    if (value.includes("null")) {
                                      imageNullCheck = true;
                                    }
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
                                      ) : (
                                        <TableCell>
                                          <img
                                            width="200px"
                                            height="125px"
                                            src={img}
                                          />
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
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CastMemberInfoPage;