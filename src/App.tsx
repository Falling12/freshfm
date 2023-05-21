import { useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProgramSection from './components/ProgramSection'

function App() {
  const [source, setSource] = useState<string>("mp3")
  const selectSource = (src: string) => {
    setSource(src)
  }

  return (
    <div className="App flex flex-col gap-32 h-full overflow-x-hidden">
      <Header />
      <HeroSection src={source} />
      <ProgramSection />
      <AboutSection />
      <FooterSection selectSource={selectSource}/>
    </div>
  )
}

export default App
