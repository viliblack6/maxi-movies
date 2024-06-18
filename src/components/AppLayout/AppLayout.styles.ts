import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(theme => ({
  appLayout: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 'calc(100vh - 364px)',
  },
}))
