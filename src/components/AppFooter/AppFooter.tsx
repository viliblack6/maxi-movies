import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { useStyles } from './AppFooter.styles'

const AppFooter: FC = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.appFooter}>
      <Container maxWidth="xl">
      </Container>
    </Box>
  )
}

export default AppFooter
