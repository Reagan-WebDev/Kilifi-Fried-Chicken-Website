import "../styles/contact.css";
import restaurant from "../assets/contact/restaurant1.jpg";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* LEFT IMAGE */}

        <div className="contact-image">
          <img src={restaurant} alt="restaurant interior" />
        </div>

        {/* RIGHT FORM */}

        <div className="contact-content">

          <h1>Contact Us</h1>

          <form className="contact-form">

            <input type="text" placeholder="Name" />

            <input type="email" placeholder="Email Address" />

            <textarea placeholder="Message"></textarea>

            <button type="submit">SEND</button>

          </form>

          {/* Location */}

          <div className="contact-info">

            <h2>Our Location</h2>
            <p>Kilifi Town, Kilifi County, Kenya</p>

            <h2>Business Hours</h2>

            <p>Monday - Thursday : 9:00 AM - 10:00 PM</p>
            <p>Friday - Sunday : 9:00 AM - 11:00 PM</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;