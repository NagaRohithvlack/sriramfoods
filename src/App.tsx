import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import Specials from './components/specials/Specials'
import AboutUsPage from './components/Aboutus/AboutUsPage'
import ContactUsPage from './components/contactus/ContactUsPage'



function App() {


  return (
    <>
      <Home />
      <Specials />
      <AboutUsPage />
      <ContactUsPage />
    </>
  )
}

export default App
