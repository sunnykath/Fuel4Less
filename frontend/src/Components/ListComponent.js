import { CardMedia } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import WcIcon from '@material-ui/icons/Wc';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    flexGrow: 1
    // display: 'inline-block'
  },
  pos: {
    marginBottom: 0,
    alignContent: "flex-end"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  iconDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  media: {
    height: 100,
    width: 80,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

function ListComponent({items}) {
  const classes = useStyles();
  
  return(
    items ? items.map((item, index) =>
      <div key={index} style={{paddingBottom:20}}>
        <Card className={classes.root} variant="outlined" >
          <CardMedia className={classes.media}
              image={"http://localhost:3000/" + item.displayPicture}
              title={item.name}
            />
          <div className={classes.details}> 
          <CardContent >
          
            <div style={{display:"flex"}}>
              <Typography display="inline" className={classes.title} variant="h7" component="h2" align="left">
                {item.name}
              </Typography>
              <Typography display="inline" className={classes.pos} variant="h7" component="h2" align="right" color="textSecondary">
                {item.distance} km
              </Typography>
            </div>
            <Typography className={classes.pos} variant="h4" component="h2" align="left" color="textSecondary">
              ${item.price}
            </Typography>
            <div className={classes.iconDisplay} > 
              <LocalCafeIcon className={classes.icon} color={item.amenities[0] ? "enable" : "disabled"}/>
              <LocalCarWashIcon className={classes.icon} color={item.amenities[1] ? "enable" : "disabled"}/>
              <WcIcon className={classes.icon} color={item.amenities[2] ? "enable" : "disabled"}/>
            </div>
          </CardContent>
          </div>
          
        </Card>
      </div>
    ): <div>
        <Card className={classes.root} variant="outlined" >
          <Typography className={classes.title} variant="h5" component="h2" align="left">
              There are no petrol stations
            </Typography>
        </Card>
      </div>
  )
}

//<LocalCafeIcon className={classes.icon} color={item.amenities[0] ? "enable" : "disabled"}/>
//<LocalCarWashIcon className={classes.icon} color={item.amenities[1] ? "enable" : "disabled"}/>
//<WcIcon className={classes.icon} color={item.amenities[2] ? "enable" : "disabled"}/>
export default ListComponent;