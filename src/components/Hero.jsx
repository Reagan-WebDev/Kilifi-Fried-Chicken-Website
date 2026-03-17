import "../styles/hero.css";
import heroImage from "../assets/images/background3.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <img src={heroImage} alt="Fried Chicken" className="hero-image" />

      <div className="hero-content">
        <h1>Kilifi Fried Chicken</h1>
        <p>Crispy. Fresh. Unforgettable.</p>

        <div className="hero-buttons">
          <Link to="/menu" className="menu-btn">View Menu</Link>
          <button className="order-btn">Order Now</button>
        </div>
      </div>

    </section>
  );
}

export default Hero;