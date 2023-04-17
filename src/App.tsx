import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProgramSection from './components/ProgramSection'

function App() {

  return (
    <div className="App bg-[#181818] flex flex-col gap-32 h-auto">
      <Header />
      <HeroSection />
      <ProgramSection />
    </div>
  )
}

export default App
