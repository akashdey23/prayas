import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email && gender) {
      setIsSignedUp(true);
      alert('Your account was successfully added!');
      setEmail('');
      setGender('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-left">
          <h2>Sign up to never miss an update.</h2>
          <div className="newsletter-signup">
            <input
              type="email"
              placeholder="Enter your Email address*"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="gender-selection">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="men"
                  checked={gender === 'men'}
                  onChange={handleGenderChange}
                />{' '}
                Men
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="women"
                  checked={gender === 'women'}
                  onChange={handleGenderChange}
                />{' '}
                Women
              </label>
            </div>
            <p>
              By clicking Sign up you have read and agreed to our{' '}
              <a href="#">privacy policy</a>
            </p>
            <button onClick={handleSignUp}>Sign up</button>
          </div>
        </div>
        <div className="newsletter-right">
          <h2 style={{ textAlign: "center" }}>Connect with us on social media</h2>
          <div className="social-media-links">
            <a href="https://www.instagram.com/diesel/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/diesel/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.youtube.com/user/DieselOfficial" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
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