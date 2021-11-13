import React from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
function App() {
  return (
    <div className="app-header">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
