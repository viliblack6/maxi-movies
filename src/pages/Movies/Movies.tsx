import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useGlobalState } from 'GlobalState/GlobalState'
import AppLayout from 'components/AppLayout'
import CoverPlaceholder from 'components/CoverPlaceholder'
import { IMoviesProps } from './Movies.types'
import { useStyles } from './Movies.styles'

const Movies: FC<IMoviesProps> = ({}) => {
  const { classes } = useStyles()
  const { state: { entries } } = useGlobalState()

  return (
    <AppLayout>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {entries
          .filter(x => x.programType === 'movie')
          .slice(0, 20)
          .map((x, i) => {
            return (
              <Box key={`serie-${i}`} marginRight="20px" marginBottom="20px">
                <CoverPlaceholder
                  title={x.title}
                  coverPath={x.images['Poster Art'].url}
                  onClick={() => console.log("Hola")}
                />
              </Box>
            )
          })}
      </Box>
    </AppLayout>
  )
}

export default Movies
