import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import About from './Components/About'
import Loader from './Components/Loader'
import Education from './Components/Education'

const App = () => {
  return (
    <>
    <Loader/>
    <Header/>
    <Home/>
    <About/>
    <Experience/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App