import React, { createElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import GlobalStateProvider from './GlobalState'
import { GlobalStateInitialize } from './GlobalState/GlobalState.initialize'
import Home from 'pages/Home'
import Movies from 'pages/Movies'
import Series from 'pages/Series'
import NotFound from 'pages/NotFound'
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import './index.css'

function App() {
  return (
    <GlobalStateProvider>
      <Box>
        <AppHeader />
        <Routes>
          <Route path="/" element={createElement(GlobalStateInitialize(Home))} />
          <Route path="/movies" element={createElement(GlobalStateInitialize(Movies))} />
          <Route path="/series" element={createElement(GlobalStateInitialize(Series))} />
          <Route path="*" element={createElement(GlobalStateInitialize(NotFound))} />
        </Routes>
        <AppFooter />
      </Box>
    </GlobalStateProvider>
  )
}

export default App
