import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/pages/frontend/Home'
import Books from './components/pages/backend/books/Books'
import Settings from './components/pages/backend/settings/Settings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin/books" element={<Books/>}/>
        <Route path="/admin/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  )
}

export default App