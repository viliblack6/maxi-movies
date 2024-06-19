import React, { useState } from 'react'
import { Data } from 'GlobalState/GlobalState.types'
import { UseDataDialog } from './DataDialog.types'

export const useDataDialog = (): UseDataDialog => {
  const [data, setData] = useState<Data | undefined>(undefined)

  const handleCoverClick = (item: Data): void => setData(item)
  const handleCloseDialog = (): void => setData(undefined)

  return {
    data,
    handleCoverClick,
    handleCloseDialog,
  }
}
