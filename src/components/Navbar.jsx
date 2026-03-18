import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" onClick={closeMenu}>Kilifi Fried Chicken</Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/menu" onClick={closeMenu}>Menu</Link>
        </li>

        <li>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>

      </ul>

      <button 
        className="order-btn"
        onClick={() => navigate("/order")}
      >
        Order Now
      </button>

    </nav>
  );
}

export default Navbar;