import "../styles/contact.css";
import restaurant from "../assets/contact/restaurant1.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_b81by4m",
      "template_80pseap",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "uZ2GTLCuKcPJcr6-8"
    )
    .then(() => {
      const userName = formData.name;
      setShowPopup(userName);

      // reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // hide popup after 4 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);

    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message. Try again.");
    });
  };

  return (
    <section className="contact-page">

      {/* SUCCESS POPUP */}

      {showPopup && (
        <div className="success-popup">
          Hello {showPopup}, your email has been successfully submitted to Kilifi Fried Chicken 🍗
        </div>
      )}

      <div className="contact-container">

        <div className="contact-image">
          <img src={restaurant} alt="restaurant interior" />
        </div>

        <div className="contact-content">

          <h1>Contact Us</h1>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input 
              type="text" 
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input 
              type="email" 
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea 
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">SEND</button>

          </form>

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