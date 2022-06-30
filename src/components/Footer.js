/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-grid-1'>
            <img src={process.env.PUBLIC_URL + './images/footer-logo.png'} alt="" />
            <p>Our goal is at the heart of all that we do.</p>
            <div>
                <img src={process.env.PUBLIC_URL + './images/fb.png'} alt="" />
                <img src={process.env.PUBLIC_URL + './images/tweet.png'} alt="" />
                <img src={process.env.PUBLIC_URL + './images/linkin.png'} alt="" />
            </div>
        </div>
        <div className='footer-grid-2'>
            <div>
                <a href="#">Page</a>
                <a href="#">Homepage</a>
                <a href="#">Features</a>
                <a href="#">About Us</a>
                <a href="#">Agents</a>
            </div>
            <div>
                <a href="#">Support</a>
                <a href="#">FAQs</a>
                <a href="#">Support Center</a>
                <a href="#">Security</a>
            </div>
            <div>
                <a href="#">Contact Us</a>
                <p>+234- 70-1449-8006</p>
                <p>homie@gmail.com</p>
                <p>23, Ali express way lagos, Nigeria</p>
            </div>
        </div>
    </div>
  )
}

export default Footer