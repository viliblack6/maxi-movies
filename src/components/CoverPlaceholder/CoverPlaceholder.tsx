import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { ICoverPlaceholderProps } from './CoverPlaceholder.types'
import { useStyles } from './CoverPlaceholder.styles'

const CoverPlaceholder: FC<ICoverPlaceholderProps> = ({ title, coverPath, onClick, onTitleClick }) => {
  const { classes } = useStyles()

  return (
    <>
      <Box className={classes.coverPlaceholder} onClick={onClick}>
        {title && !coverPath && (<Typography className={classes.title}>{title}</Typography>)}
        {title && coverPath && (<img src={coverPath} width="100%" height="100%" />)}
      </Box>
      {coverPath && (
        <Box maxWidth="140px">
          <Typography
            variant="body2"
            maxWidth="100%"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontWeight="100"
            onClick={onTitleClick}
          >
            {title}
          </Typography>
        </Box>
      )}
    </>
  )
}

export default CoverPlaceholder
