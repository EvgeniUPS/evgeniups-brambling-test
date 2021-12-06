import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './var.scss'
import './App.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import CapabilitiesPage from './pages/CapabilitiesPage/CapabilitiesPage'

function App() {
  useEffect(() => {
    //
    if (
      ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    ) {
      document.querySelector('html').classList.add('ios')
    }

    //
    AOS.init()

    return () => {}
  }, [])
  return (
    <>
      <BrowserRouter basename='/evgeniups-brambling-test/'>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<AboutPage />} />
            <Route path='/capabilities' element={<CapabilitiesPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/contacts' element={<ContactPage />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
