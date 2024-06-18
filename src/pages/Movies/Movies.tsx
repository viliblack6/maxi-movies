import React, { FC } from 'react'
import { Box } from '@mui/material'
import { IMoviesProps } from './Movies.types'
import { useStyles } from './Movies.styles'

const Movies: FC<IMoviesProps> = ({}) => {
  const { classes } = useStyles()

  return (
    <Box>
        Movies
    </Box>
  )
}

export default Movies
