import React, { FC } from 'react'
import { Box, AppBar, Container, Toolbar, Typography, Button } from '@mui/material'
import { IAppHeaderProps } from './AppHeader.types'
import { useStyles } from './AppHeader.styles'

const AppHeader: FC<IAppHeaderProps> = ({}) => {
  const { classes } = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
            <Typography className={classes.title}>DEMO Streaming</Typography>
            <Box display="flex">
              <Button variant='contained' className={classes.btnLogin}>Log in</Button>
              <Button variant='contained' className={classes.btnTrial}>Start your free trial</Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
      <Toolbar className={classes.subToolbar}>
        <Container maxWidth="xl">
            <Typography className={classes.subtitle}>Popular Titles</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
