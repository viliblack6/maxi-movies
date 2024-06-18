import React, { FC } from 'react'
import { Box } from '@mui/material'
import { INotFoundProps } from './NotFound.types'
import { useStyles } from './NotFound.styles'

const NotFound: FC<INotFoundProps> = ({}) => {
  const { classes } = useStyles()

  return (
    <Box>
        NotFound
    </Box>
  )
}

export default NotFound
