import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(theme => ({
  subToolbar: {
    backgroundColor: theme.palette.grey[800],
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 400,
  },
  btnLogin: {
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover' :{
      boxShadow: 'none',
    },
  },
  btnTrial: {
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: theme.palette.grey[800],
    borderRadius: 0,
    '&:hover' :{
      backgroundColor: theme.palette.grey[800],
      boxShadow: 'none',
    },
  },
}))
