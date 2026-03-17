import "../styles/about.css";
import restaurant from "../assets/images/restaurant.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-image">
          <img src={restaurant} alt="Kilifi Fried Chicken Restaurant" />
        </div>

        <div className="about-text">

          <h2>Our Story</h2>

          <p>
            Kilifi Fried Chicken was created to bring delicious crispy chicken
            to the heart of Kilifi. Located near Pwani University, we serve
            freshly prepared meals made with quality ingredients and a special
            blend of spices.
          </p>

          <p>
            Our goal is simple — to provide a place where friends, families,
            and students can enjoy great food, great flavor, and a welcoming
            atmosphere.
          </p>

          <Link to="/about" className="about-btn">
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;