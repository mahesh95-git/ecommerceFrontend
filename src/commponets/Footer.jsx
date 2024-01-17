import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-10'>
      <footer className="footer">
      <div className="footer-container">
      

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/shipping">Shipping Information</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
