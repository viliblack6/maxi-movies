import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AppLayout from 'components/AppLayout'
import CoverPlaceholder from 'components/CoverPlaceholder'
import { useStyles } from './Home.styles'

const Home: FC = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()

  const handleSeriesClick = (): void => navigate('/series')
  const handleMoviesClick = (): void => navigate('/movies')

  return (
    <AppLayout>
      <Box className={classes.home}>
        <CoverPlaceholder title='SERIES' onClick={handleSeriesClick} />
        <CoverPlaceholder title='MOVIES' onClick={handleMoviesClick} />
      </Box>
    </AppLayout>
  )
}

export default Home
