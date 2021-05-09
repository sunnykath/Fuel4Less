import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropdownComponent() {
  const classes = useStyles();
  const [stations, setStations] = React.useState('');

  const handleChange = (event) => {
    setStations(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="DropdownComponent">MyStations</InputLabel>
        <Select
          labelId="DropdownComponent"
          id="DropdownComponent"
          value={stations}
          onChange={handleChange}
        >
          <MenuItem value={'Z Quay'}>Z Quay</MenuItem>
          <MenuItem value={'Z Panmure'}>Z Panmure</MenuItem>
          <MenuItem value={'Z Royal Oak'}>Z Royal Oak</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}
