import React from 'react'
import './Contacts.scss'
import map from './map.svg'
import phone from './phone.svg'
import mail from './mail.svg'
import { Link } from 'react-router-dom'

function Contacts() {
  return (
    <section className='contacts'>
      <div className='container'>
        <div className='contacts__inner' data-aos='fade-up'>
          <div className='contacts__title t1'>Contact us</div>
          <div className='contacts__description'>
            <p>
              Suspendisse diam convallis arcu ornare aliquet eget. Accumsan metus nam justo, in fringilla elementum.
              Urna, enim eget ut pellentesque nam. Nulla vitae, eu integer suscipit amet, eget tellus. Mauris sit eget
              nisl id pulvinar. Suscipit purus ut posuere dolor eget. Iaculis amet, massa mattis eleifend posuere ut
              pulvinar sit.
            </p>
          </div>
          <ul className='contacts__list'>
            <li>
              <Link to='/contacts'>
                <img src={map} alt='map point' />
                <span>Suite 1, 5 Percy Street, Fitzrovia, Istanbul, W1T 1DG, Turkey</span>
              </Link>
            </li>
            <li>
              <a href='tel:+900000000'>
                <img src={phone} alt='phone' />
                <span>+90 000 00 00</span>
              </a>
            </li>
            <li>
              <a href='mailto:our@email.com'>
                <img src={mail} alt='mail' />
                <span>our@email.com</span>
              </a>
            </li>
          </ul>
          <div className='contacts__map'>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13894.602585087056!2d28.99247884113574!3d40.95757982733959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2z0KHRgtCw0LzQsdGD0LssINCi0YPRgNGG0LjRjw!5e0!3m2!1sru!2sua!4v1638724678525!5m2!1sru!2sua'
              allowFullScreen=''
              loading='lazy'></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
