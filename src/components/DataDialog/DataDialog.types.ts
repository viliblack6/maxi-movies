import { Data } from 'GlobalState/GlobalState.types'

export interface IDataDialogProps {
  data: Data | undefined
  handleCloseDialog: () => void
}

export interface UseDataDialog {
  data: Data | undefined
  handleCoverClick: (item: Data) => void
  handleCloseDialog: () => void
}
