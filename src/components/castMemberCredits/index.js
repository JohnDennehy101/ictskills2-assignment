import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import img from "../../images/film-poster-placeholder.png";
import Button from "@material-ui/core/Button";

export default function CastMemberCredits({
  page,
  rowsPerPage,
  rows,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: "center",
      margin: "20px 10px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
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

  const classes = useStyles();
  return (
    <>
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
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
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
                                  <img width="200px" height="125px" src={img} />
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
    </>
  );
}
