import React, { FC } from 'react'
import { useEffectOnce } from 'react-use'
import AppLayout from 'components/AppLayout'
import { useGlobalState, actions } from '.'

const { loadData } = actions

export const GlobalStateInitialize = (Component: FC): FC => {
  const Wrapper: FC = props => {
    const {
      state: { isLoaded, hasError },
      dispatch,
    } = useGlobalState()

    useEffectOnce(() => {
      if (!isLoaded) {
        void loadData()(dispatch)
      }
    })

    if (isLoaded && hasError) {
      return <AppLayout>Error al obtener data</AppLayout>
    }

    return <Component {...props} />
  }

  return Wrapper
}

export default GlobalStateInitialize
