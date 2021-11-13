import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Main from './components/Main'
import Group from './components/Group'
import Footer from './components/Footer'
function App() {
  return (
    <div className="app-header">
      <Navbar />
      <Group />
      <Main />
      <Footer />
    </div>
  )
}

export default App
