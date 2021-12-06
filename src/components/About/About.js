import React from 'react'
import './About.scss'
import './Card.scss'
import card1 from './card-1.jpg'
import card2 from './card-2.jpg'
import card3 from './card-3.jpg'
import one from './one.svg'
import two from './two.svg'
import three from './three.svg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about__description' data-aos='fade-up'>
          <div className='about__title t1'>About our trading services</div>
          <div className='about__text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada ut urna, semper tristique elementum
              scelerisque nullam. Augue ultrices ultrices mattis leo et urna tincidunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada ut urna, semper tristique elementum
              scelerisque nullam. Augue ultrices ultrices mattis leo et urna tincidunt.
            </p>
          </div>
        </div>
        <div className='about__inner'>
          {/* <!-- 1 --> */}
          <div className='about__card-wrapper' data-aos='fade-up'>
            <div className='about__card card'>
              <div className='card__number'>
                <img src={one} alt='1' />
              </div>
              <picture className='card__image'>
                {/* <!-- <source srcset="img/card-1.webp" type="image/webp"> --> */}
                <img src={card1} alt='' />
              </picture>
              <div className='card__description'>
                <div className='card__title t2'>equipment trade</div>
                <Link to='/' className='card__link'>
                  View Service
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- 2 --> */}
          <div className='about__card-wrapper' data-aos='fade-up'>
            <div className='about__card card'>
              <div className='card__number'>
                <img src={two} alt='2' />
              </div>
              <picture className='card__image'>
                {/* <!-- <source srcset="img/card-1.webp" type="image/webp"/> --> */}
                <img src={card2} alt='' />
              </picture>
              <div className='card__description'>
                <div className='card__title t2'>trade in refined products and petrochemicals</div>
                <Link to='/' className='card__link'>
                  View Service
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- 3 --> */}
          <div className='about__card-wrapper' data-aos='fade-up'>
            <div className='about__card card'>
              <div className='card__number'>
                <img src={three} alt='3' />
              </div>
              <picture className='card__image'>
                {/* <!-- <source srcset="img/card-1.webp" type="image/webp"> --> */}
                <img src={card3} alt='' />
              </picture>
              <div className='card__description'>
                <div className='card__title t2'>textile trade</div>
                <Link to='/' className='card__link'>
                  View Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
