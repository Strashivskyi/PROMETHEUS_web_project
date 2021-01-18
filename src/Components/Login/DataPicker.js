import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 26, 
    marginTop: '30px',
  },
  textField: {
    width: '100%',
    marginLeft: '20%',
    marginRight: '20%',            
    fontWeight: 500,
    fontSize: 26
  }
}));

const DataPicker = () => {
    const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        color='secondary'
        size = 'medium'

        
      />
    </form>)
};

export default DataPicker;