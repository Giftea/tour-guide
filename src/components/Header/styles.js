import {alpha,  makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#1853d9',
    padding : '10px 50px',
    [theme.breakpoints.down('md')]: {
      padding : '10px 20px',

    },
  },
  title: {
      display: 'block',
    
  },
  toolbar: {
    display: 'flex',
  },
}));