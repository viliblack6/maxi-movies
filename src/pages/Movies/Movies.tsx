import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useGlobalState } from 'GlobalState/GlobalState'
import AppLayout from 'components/AppLayout'
import CoverPlaceholder from 'components/CoverPlaceholder'
import DataDialog from 'components/DataDialog'
import { useDataDialog } from 'components/DataDialog/DataDialog.hook'
import { IMoviesProps } from './Movies.types'

const Movies: FC<IMoviesProps> = ({}) => {
  const { state: { entries } } = useGlobalState()
  const { data, handleCloseDialog, handleCoverClick } = useDataDialog()

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
                  onTitleClick={(): void => handleCoverClick(x)}
                />
              </Box>
            )
          })}
        <DataDialog data={data} handleCloseDialog={handleCloseDialog} />
      </Box>
    </AppLayout>
  )
}

export default Movies
