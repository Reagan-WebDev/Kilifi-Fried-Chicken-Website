import "../styles/about.css";

import about1 from "../assets/about/about1.jpg";
import about2 from "../assets/about/about2.jpg";

function About() {
  return (
    <section className="about-page">

      <div className="about-header">
        <h1>About Us</h1>
      </div>

      {/* Section 1 */}

      <div className="about-section">

        <div className="about-image">
          <img src={about1} alt="restaurant food" loading="lazy" />
        </div>

        <div className="about-text">
          <h2>Our Story</h2>

          <p>
            Kilifi Fried Chicken was founded with one simple goal —
            to serve delicious, freshly prepared chicken meals to the
            Kilifi community. We believe great food brings people together.
          </p>

          <p>
            Every meal is carefully prepared using fresh ingredients
            and our signature spices to deliver the perfect taste
            that keeps our customers coming back.
          </p>
        </div>

      </div>


      {/* Section 2 */}

      <div className="about-section reverse">

        <div className="about-image">
          <img src={about2} alt="restaurant interior" loading="lazy" />
        </div>

        <div className="about-text">
          <h2>Our Mission</h2>

          <p>
            Our mission is to provide high quality meals, fast service,
            and a welcoming environment for families and friends.
          </p>

          <p>
            Whether you are dining in, ordering takeaway, or enjoying
            our food with friends, we strive to deliver an unforgettable
            experience every time.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;