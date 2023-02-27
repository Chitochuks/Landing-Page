import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
        <Navbar />
        <div className='name'>
            <h1><span>Launch Your App </span>with Confidence and Creativity</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, doloribus.</p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header