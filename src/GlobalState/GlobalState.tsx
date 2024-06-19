import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  FC,
  Dispatch,
  Reducer,
  ReducerAction,
} from 'react'
import reducer from './GlobalState.reducer'
import { StoreState } from './GlobalState.types'
import { Action } from './actions'

export const initialState: StoreState = {
  total: 0,
  entries: [],
  isLoaded: false,
  hasError: false,
}

type UseGlobalState = {
  state: StoreState
  dispatch: Dispatch<Action>
}

export const useState = <R extends Reducer<any, any>>(): {
  state: StoreState
  dispatch: Dispatch<ReducerAction<R>>
} => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}

export const GlobalState = createContext<UseGlobalState>({} as UseGlobalState)

export const GlobalStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { state, dispatch } = useState()

  return <GlobalState.Provider value={{ state, dispatch }}>{children}</GlobalState.Provider>
}

export const useGlobalState = (): UseGlobalState => useContext(GlobalState)

export default GlobalStateProvider
