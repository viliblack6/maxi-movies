import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useGlobalState } from 'GlobalState/GlobalState'
import AppLayout from 'components/AppLayout'
import CoverPlaceholder from 'components/CoverPlaceholder'
import { ISeriesProps } from './Series.types'
import { useStyles } from './Series.styles'

const Series: FC<ISeriesProps> = ({}) => {
  const { classes } = useStyles()
  const { state: { entries } } = useGlobalState()

  return (
    <AppLayout>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {entries
          .filter(x => x.programType === 'series')
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

export default Series
