import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTrendingItems } from "../api/tmdb-api";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";


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

const TrendingPage = (props) => {
 
    const [mediaType, setMediaType] = React.useState('movie');
    const [timeFrame, setTimeFrame] = React.useState('day');
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    ["trending"],
    () => getTrendingItems(mediaType, timeFrame)
  );
  

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

  return (
    <>
      {data ? (
        <Container width="80vw">
          
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default TrendingPage;
