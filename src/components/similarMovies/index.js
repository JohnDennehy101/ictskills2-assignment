import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
   root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#FFF',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

export default function SimilarMovies({ itemData }) {
  const classes = useStyles();

  console.log(itemData);
  //const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     getMovieReviews(movie.id).then((reviews) => {
//       setReviews(reviews);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
          ))}
      </ImageList>
      </div>
  );
}