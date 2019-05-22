import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            {' '}
            <strong>I'm Patric Khiev,  <br /> a full stack developer,
            <br />
            dog lover, and car enthusiast.</strong>
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
