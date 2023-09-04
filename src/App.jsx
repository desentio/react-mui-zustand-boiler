import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/home'
import BlogListPage from './pages/blog'
import Config from './pages/config'
import { Box } from '@mui/material'

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
