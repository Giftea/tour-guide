import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  body: {
    padding: '50px',
    [theme.breakpoints.down('md')]: {
        padding : '0',
  
      },
  },
}));