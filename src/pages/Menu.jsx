import MenuItem from "../components/MenuItem";
import "../styles/menu.css";

import chicken from "../assets/images/chicken.jpg";
import burger from "../assets/images/burger.jpg";
import wings from "../assets/images/wings.jpg";
import fries from "../assets/images/fries.jpg";
import soda from "../assets/images/soda.jpg";

function Menu() {
  return (
    <section className="menu-page">

      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Freshly prepared meals served daily</p>
      </div>

      {/* Chicken Section */}

      <div className="menu-category">
        <h2>Chicken</h2>

        <div className="menu-grid">

          <MenuItem
            image={chicken}
            name="Crispy Fried Chicken"
            price="KSh 250"
          />

          <MenuItem
            image={wings}
            name="Hot Chicken Wings"
            price="KSh 280"
          />

        </div>
      </div>

      {/* Burgers */}

      <div className="menu-category">
        <h2>Burgers</h2>

        <div className="menu-grid">

          <MenuItem
            image={burger}
            name="Chicken Burger"
            price="KSh 300"
          />

        </div>
      </div>

      {/* Sides */}

      <div className="menu-category">
        <h2>Sides</h2>

        <div className="menu-grid">

          <MenuItem
            image={fries}
            name="French Fries"
            price="KSh 150"
          />

        </div>
      </div>

      {/* Drinks */}

      <div className="menu-category">
        <h2>Drinks</h2>

        <div className="menu-grid">

          <MenuItem
            image={soda}
            name="Soda"
            price="KSh 80"
          />

        </div>
      </div>

    </section>
  );
}

export default Menu;