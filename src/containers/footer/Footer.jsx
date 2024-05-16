import React from 'react'
import './footer.css';
import gpt3logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3logo} alt="logo" />
            <p>University of Columbia, 224 Lane 5, Coloumbia</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
            <p></p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policiy</p>
            <p>Contact</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>University of Columbia, 224 Lane 5, Coloumbia</p>
            <p>093-12346221</p>
            <p><a href='https://github.com/VickyDev810/Learning-React'>GitHub</a></p>
          </div>
      </div>
      <div className="gpt3__footer-copyright">
          <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
