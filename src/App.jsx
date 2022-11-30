import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import './App.css'
import NextCard from './components/NextCard'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/selected/:id" element={<NextCard />} />
      </Routes>
    </div>
  )
}

export default App
