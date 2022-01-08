import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Tour Guide ✈️
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;