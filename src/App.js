import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Main from './components/Main'
import Group from './components/Group'
function App() {
  return (
    <div className="app-header">
      <Navbar />
      <Group />
      <Main />
    </div>
  )
}

export default App
