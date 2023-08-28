import './App.css'
import { Route, Routes, HashRouter } from 'react-router-dom'
import HomePage from './pages/home'
import BlogListPage from './pages/blog'
import { Box } from '@mui/material'

function App() {
  return (
    <Box>
      <HashRouter basename='/'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
        </Routes>
      </HashRouter>
    </Box>
  )
}

export default App
