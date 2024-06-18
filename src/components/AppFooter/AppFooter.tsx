import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { IAppFooterProps } from './AppFooter.types'
import { useStyles } from './AppFooter.styles'

const AppFooter: FC<IAppFooterProps> = ({}) => {
  const { classes } = useStyles()

  return (
    <Box>
      <Container maxWidth="xl">
        AppFooter
      </Container>
    </Box>
  )
}

export default AppFooter
