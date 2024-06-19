import {
  loadDataReducer,
  errorLoadingData,
} from 'GlobalState/reducers'
import { ACTIONS } from './actions'
import { Reducer } from './GlobalState.types'

const reducer: Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.LOAD_DATA: {
      return loadDataReducer(state, payload)
    }
    case ACTIONS.ERROR_LOADING_DATA: {
      return errorLoadingData(state, payload)
    }
    default:
      return state
  }
}

export default reducer
