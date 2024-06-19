import React, { FC } from 'react'
import { useEffectOnce } from 'react-use'
import { useGlobalState, actions } from '.'

const { loadData } = actions

export const GlobalStateInitialize = (Component: FC): FC => {
  const Wrapper: FC = props => {
    const {
      state: { isLoaded },
      dispatch,
    } = useGlobalState()
    

    useEffectOnce(() => {
      if (!isLoaded) {
        void loadData()(dispatch)
      }
    })


    return <Component {...props} />
  }

  return Wrapper
}

export default GlobalStateInitialize
