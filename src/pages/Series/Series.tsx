import React, { FC } from 'react'
import { Box } from '@mui/material'
import { ISeriesProps } from './Series.types'
import { useStyles } from './Series.styles'

const Series: FC<ISeriesProps> = ({}) => {
  const { classes } = useStyles()

  return (
    <Box>
        Series
    </Box>
  )
}

export default Series
