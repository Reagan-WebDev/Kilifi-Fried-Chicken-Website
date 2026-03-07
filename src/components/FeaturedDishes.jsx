import DishCard from "./DishCard";
import "../styles/featured.css";

import chicken from "../assets/images/chicken.jpg";
import burger from "../assets/images/burger.jpg";
import wings from "../assets/images/fries.jpg";

function FeaturedDishes() {
  return (
    <section className="featured">

      <h2>Our Popular Dishes</h2>

      <div className="featured-container">

        <DishCard
          image={chicken}
          name="Crispy Fried Chicken"
          price="KSh 250"
        />

        <DishCard
          image={burger}
          name="Chicken Burger"
          price="KSh 300"
        />

        <DishCard
          image={wings}
          name="Fries"
          price="KSh 280"
        />

      </div>

    </section>
  );
}

export default FeaturedDishes;