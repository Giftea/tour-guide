import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../../assets/TRAVEL TOUR.svg'
import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
           <img src={logo} alt = 'Tour Guide' />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;