import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
 root: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inline: {
    display: 'inline',
    padding: '10px 10px 0px 0px'
  },
  individualItem: {
      width: '33%',
      justifyContent: 'center',
      alignItems: 'center'
  },
});

export default function MovieCast ({ cast }) {
  const classes = useStyles();

  return (
      <>
       <Typography
        variant="h5"
        component="h3"
        className={classes.similarMoviesTitle}
      >
        Movie Cast
      </Typography>
     <List className={classes.root}>
         {cast.cast.map((castMember) => (
      <ListItem alignItems="flex-start" className={classes.individualItem}>
        <ListItemAvatar>
          <Avatar alt={castMember.name} src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`} />
        </ListItemAvatar>
        <ListItemText
          primary={castMember.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Character:  
              </Typography>
              {castMember.character}
            </React.Fragment>
          }
        />
      </ListItem>
         ))}
      <Divider variant="inset" component="li" />
    </List>
    </>
  );
}
