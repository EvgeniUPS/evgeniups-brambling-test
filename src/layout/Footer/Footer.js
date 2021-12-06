import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

function Footer() {
  const [footerMenu, setfooterMenu] = useState([])

  useEffect(() => {
    fetch('https://evgeniups-server.herokuapp.com/footerMenu')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setfooterMenu(data)
      })
    return () => {}
  }, [])

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__list'>
          {footerMenu.map(el => (
            <li key={el.id}>
              <Link to={el.link}>{el.label}</Link>
            </li>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
