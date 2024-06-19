import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(theme => ({
  coverPlaceholder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 190,
    backgroundColor: theme.palette.grey[900],
    backgroundImage: 'url(/assets/placeholder.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginRight: 10,
    cursor: 'pointer',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
}))
