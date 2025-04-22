import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Ambience from './components/Ambience'
import Locations from './components/Locations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Locations />
        <Ambience />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
