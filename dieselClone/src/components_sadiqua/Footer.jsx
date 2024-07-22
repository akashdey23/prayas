// src/Footer.jsx
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-left">
          <h2>Sign up to never miss an update.</h2>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter your Email address*" />
            <div className="gender-selection">
              <label>
                <input type="radio" name="gender" value="men" /> Men
              </label>
              <label>
                <input type="radio" name="gender" value="women" /> Women
              </label>
            </div>
            <p>By clicking Sign up you have read and agreed to our <a href="#">privacy policy</a></p>
            <button>Sign up</button>
            
          </div>
        </div>
        <div className="newsletter-right">
          <h2 style={{textAlign:"center"}}>Connect with us on social media</h2>
          <div className="social-media-links">
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">View All</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>COOKIE POLICY & TERMS</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping & Delivery Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Returns & Refund Policy</a></li>
            <li><a href="#">Fees & Payment Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>WORLD OF DIESEL</h4>
          <ul>
            <li><a href="#">About Diesel</a></li>
            <li><a href="#">For Responsible Living</a></li>
            <li><a href="#">Only the Brave Foundation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>STORE LOCATOR</h4>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2021 Diesel Fashion India Reliance Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
