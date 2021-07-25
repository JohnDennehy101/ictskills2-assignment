import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTrendingItems } from "../api/tmdb-api";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
 root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 900,
    height: '100vh',
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  link: {
      width: '100%'
  },
  heading: {
      margin: '40px',
      fontWeight: '500'
  }
}));

const TrendingPage = (props) => {
 let trendingInfo = [];
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


  console.log(data);
  data.results.forEach((item, i) => {
      let featuredStatus;
 console.log("index");
 console.log(i);
 console.log("modulo")
      console.log(i % 3);
      if (i % 3 == 0) {
          featuredStatus = true
      }
      else {
          featuredStatus =  false
      }
      trendingInfo.push({
       'img': `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
     'title': `${item.title}`,
     'author': 'author',
     'featured': featuredStatus,
    'id': item.id}
     )
  });


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
        <Container width="90vw">
            <div className={classes.root}>
                <Typography variant="h2" className={classes.heading} gutterBottom>
        Trending {mediaType}s
      </Typography>

      <ImageList rowHeight={200} gap={1} className={classes.imageList}>
        {trendingInfo.map((item) => (
           
          <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
             
            <img src={item.img} alt={item.title} />
             <a href={`/movies/${item.id}`}>
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                  <ChevronRightIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            </a>
          </ImageListItem>
          
        
        ))}
      </ImageList>
    </div>
          
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default TrendingPage;
