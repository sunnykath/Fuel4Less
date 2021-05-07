import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'; 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  /* will need to add on click handler for buttons, both list and favourite */
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="first">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="First Item" />
        </ListItem>
        
        <ListItemSecondaryAction>
            <IconButton edge = "end" aria-label="favourite">
            <FavoriteBorderIcon/>
            </IconButton>
        </ListItemSecondaryAction>
        </List>

        <List component="nav" aria-label="second">

        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Second Item" />
        </ListItem>

        <ListItemSecondaryAction>
            <IconButton edge = "end" aria-label="favourite">
            <FavoriteBorderIcon/>
            </IconButton>
        </ListItemSecondaryAction>


      </List>

    </div>
  );
}
