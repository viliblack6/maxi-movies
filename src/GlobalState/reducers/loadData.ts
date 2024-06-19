import { cloneDeep } from 'lodash'
import { StoreState, Payload } from 'GlobalState/GlobalState.types'
import { PayloadLoadData } from 'GlobalState/actions'

export const loadDataReducer = (
  state: StoreState,
  payload: Payload<PayloadLoadData>
): StoreState => {
  if (state.isLoaded) {
    return state
  }

  const newState = cloneDeep(state)
  newState.total = payload.total
  newState.entries = payload.entries
  newState.isLoaded = true

  return newState
}
