import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(theme => ({
  appFooter: {
    backgroundColor: theme.palette.grey[800],
    minHeight: 160,
  },
}))
