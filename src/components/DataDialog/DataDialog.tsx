import React, { FC } from 'react'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import { IDataDialogProps } from './DataDialog.types'

const DataDialog: FC<IDataDialogProps> = ({ data, handleCloseDialog }) => {

  return (
    <Dialog open={Boolean(data)} onClose={handleCloseDialog}>
      <DialogTitle>{data?.title ?? ''}</DialogTitle>
      <DialogContent>
        <p>Title: {data?.title ?? ''}</p>
        <p>Description: {data?.description ?? ''}</p>
        <p>Yelease year: {data?.releaseYear ?? ''}</p>
        Cover:
        <img src={data?.images['Poster Art'].url} width="140px" height="190px" />
      </DialogContent>
    </Dialog>
  )
}

export default DataDialog
