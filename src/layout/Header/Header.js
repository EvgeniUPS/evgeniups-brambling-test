import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from './logo.svg'

function Header() {
  useEffect(() => {
    const header = document.querySelector('.header')
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      const screenHeight = window.innerHeight

      if (scrollY > screenHeight * 1.5) {
        header.classList.add('bg')
      } else {
        header.classList.remove('bg')
      }
    })
    return () => {}
  }, [])
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className='header__logo logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <button className='header__burger' type='button'>
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
