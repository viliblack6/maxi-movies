import { Dispatch } from 'react'
import {
  ACTIONS,
  Action,
  PayloadLoadData,
} from 'GlobalState/actions'
import { StoreState } from 'GlobalState/GlobalState.types'

export const loadDataAction = (payload: PayloadLoadData): Action => ({
  type: ACTIONS.LOAD_DATA,
  payload,
})


export const loadData = () => {
  return async (dispatch: Dispatch<Action<PayloadLoadData | boolean>>): Promise<void> => {
    try {
      const response = await fetch('/data/sample.json')
      const data: StoreState = await response.json()

      const payload: PayloadLoadData = {
        total: data.total,
        entries: data.entries,
        isLoaded: true,
        hasError: false
      }

      dispatch(loadDataAction(payload))
    } catch (e) {
      dispatch({ type: ACTIONS.ERROR_LOADING_DATA, payload: true })
    }
  }
}
