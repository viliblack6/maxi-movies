import { cloneDeep } from 'lodash'
import { StoreState, Payload } from 'GlobalState/GlobalState.types'

export const errorLoadingData = (state: StoreState, payload: Payload<boolean>): StoreState => {
  const newState = cloneDeep(state)
  newState.total = 0
  newState.entries = []
  newState.isLoaded = true
  newState.hasError = payload

  return newState
}
