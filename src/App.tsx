import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from 'pages/Home'
import Movies from 'pages/Movies'
import Series from 'pages/Series'
import NotFound from 'pages/NotFound'
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import './index.css'

function App() {
  return (
    <Box>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AppFooter />
    </Box>
  )
}

export default App
