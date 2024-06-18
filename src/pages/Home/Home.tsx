import React, { FC } from 'react'
import { Box } from '@mui/material'
import AppLayout from 'components/AppLayout'
import { IHomeProps } from './Home.types'
import { useStyles } from './Home.styles'

const Home: FC<IHomeProps> = ({}) => {
  const { classes } = useStyles()

  return (
    <AppLayout>
        Home
    </AppLayout>
  )
}

export default Home
