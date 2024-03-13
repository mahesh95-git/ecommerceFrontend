import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-10">
      <footer className="footer" id="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping Information</Link>
              </li>
              <li>
                <Link to="/returns">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              In this project, aimed at revolutionizing the way you shop for
              clothes online! We understand the frustrations many users
              encounter when navigating through various online clothing
              websites. Therefore, our mission is to make your online shopping
              experience not only effortless but also enjoyable.
            </p>
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
  );
}

export default Footer;
