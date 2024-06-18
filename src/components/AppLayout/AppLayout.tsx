import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { IAppLayoutProps } from './AppLayout.types'
import { useStyles } from './AppLayout.styles'

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  const { classes } = useStyles()

  return (
    <Box className={classes.appLayout}>
      <Container maxWidth="xl">
        {children}
      </Container>
    </Box>
  )
}

export default AppLayout
