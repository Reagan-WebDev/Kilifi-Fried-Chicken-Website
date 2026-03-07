import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Kilifi Fried Chicken</h2>
          <p>Serving crispy and delicious chicken near Pwani University.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> Kilifi near Pwani University</p>
          <p><FaPhone /> 0119425260</p>
          <p>🕒 10:00AM - 10:00PM</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Kilifi Fried Chicken. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;