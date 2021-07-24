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
    width: "10vw",
    height: "30vh",
    margin: "20px auto",
  },
  title: {
    textAlign: "center",
    margin: "20px 0px",
  },
  root2: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
}));

const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "character", label: "Character", minWidth: 100 },
  {
    id: "overview",
    label: "Summary",
    minWidth: 170,
    align: "right",
  },
  {
    id: "release_date",
    label: "Release Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "average_rating",
    label: "Average Rating",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "type",
    label: "Media Type",
    minWidth: 170,
    align: "right",
  },
];

function createData(
  title,
  character,
  overview,
  release_date,
  average_vote,
  media_type
) {
  return { title, character, overview, release_date, average_vote, media_type };
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

              <Grid item xs={12}>
                <Typography
                  className={classes.title}
                  variant="subtitle1"
                  gutterBottom
                >
                  {personDetail.biography}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                {/* <Paper className={classes.paper}>xs=6</Paper> */}
                <Avatar
                  alt={personDetail.name}
                  src={`https://image.tmdb.org/t/p/w500${personDetail.profile_path}`}
                  className={classes.large}
                />
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>

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
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
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
