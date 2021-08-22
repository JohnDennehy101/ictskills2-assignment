import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Spinner from "../spinner";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function AdvancedFilterPopper({ anchorEl, tableRows, id }) {
  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 350,
    },
    tableHead: {
      fontWeight: 700,
    },
    popper: {
      padding: theme.spacing(2, 4, 3),

      flexDirection: "column",
      backgroundColor: "#EFEFEF",
    },
  }));

  const popperOpen = Boolean(anchorEl);
  //const id = open ? "transitions-popper" : undefined;

  const classes = useStyles();
  return (
    <Popper id={id} open={popperOpen} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <div className={classes.popper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className={classes.tableHead}>
                    Filter Property
                  </TableCell>
                  <TableCell align="left" className={classes.tableHead}>
                    Value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows ? (
                  tableRows.map((row) => (
                    <TableRow key={row.title}>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="left">{row.value}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Spinner />
                )}
              </TableBody>
            </Table>
          </div>
        </Fade>
      )}
    </Popper>
  );
}
