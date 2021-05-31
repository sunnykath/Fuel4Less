import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropdownComponent(props) {
  const classes = useStyles();

  const {station , stationsList, handleChange} = props;

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="DropdownComponent">MyStations</InputLabel>
        <Select
          labelId="DropdownComponent"
          id="DropdownComponent"
          value={station.name}
          onChange={handleChange}
        >
        {stationsList.map((station) => (
          <MenuItem key={station.name} value={station.name}>
            {station.name}
          </MenuItem>
        ))}
          {/* <MenuItem value={'Z Quay'}>Z Quay</MenuItem>
          <MenuItem value={'Z Panmure'}>Z Panmure</MenuItem>
          <MenuItem value={'Z Royal Oak'}>Z Royal Oak</MenuItem> */}
        </Select>
      </FormControl>
      
    </div>
  );
}
