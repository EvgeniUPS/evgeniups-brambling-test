import React, { useEffect } from 'react'

import './Intro.scss'
import video from './video.mp4'

function Intro() {
  useEffect(() => {
    const introVideo = document.querySelector('.intro__video-wrapper')
    if (introVideo) {
      // first load
      if (window.scrollY < window.innerHeight) {
        introVideo.closest('.intro').classList.add('show')
      }
      // scale on scroll
      window.addEventListener('scroll', () => {
        introVideo.closest('.intro').classList.add('show')
        const scrollY = window.scrollY
        const coefficient = 1 + scrollY / 200

        introVideo.style.transform = `translate(-50%, -50%) scale(${coefficient})`
      })
    }
    return () => {}
  }, [])
  return (
    <section className='intro'>
      <div className='container'>
        <div className='intro__inner'>
          {/* <div className="intro__video-wrapper" style="--poster: url('../img/poster.jpg')"> */}
          <div className='intro__video-wrapper'>
            <video
              className='intro__video'
              src={video}
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <span
              className='intro__arrow'
              style={{ backgroundImage: 'url(arrow.svg)' }}
              type='button'
            ></span>
          </div>
        </div>
        <p className='intro__label'>VKV Agency</p>
        <p className='intro__title'>
          <span>Take your time - use</span>
          <span>our services</span>
        </p>
      </div>
    </section>
  )
}

export default Intro
