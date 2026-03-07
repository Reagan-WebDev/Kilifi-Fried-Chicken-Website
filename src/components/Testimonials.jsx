import "../styles/testimonials.css";

function Testimonials() {

  const reviews = [
    {
      name: "Brian",
      text: "The best fried chicken in Kilifi! Crispy, flavorful and always fresh.",
    },
    {
      name: "Mary",
      text: "I love the chicken burger here. Perfect place to grab food after classes at Pwani University.",
    },
    {
      name: "Kevin",
      text: "Great food, great prices, and friendly service. Highly recommend Kilifi Fried Chicken!",
    }
  ];

  return (
    <section className="testimonials">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-container">

        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>

            <div className="stars">★★★★★</div>

            <p>"{review.text}"</p>

            <h4>- {review.name}</h4>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;