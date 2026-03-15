import "../styles/menu.css";

function Menu() {
  return (
    <section className="menu-page">

      <div className="menu-container">

        <div className="menu-title">
          <h1>Kilifi Fried Chicken</h1>
          <p>Freshly Prepared Meals Served Daily</p>
        </div>

        <div className="menu-divider"></div>

        <div className="menu-columns">

          {/* LEFT COLUMN */}
          <div className="menu-column">

            <div className="menu-category">
              <h2>Signature Fried Chicken</h2>

              <div className="menu-item">
                <span>Classic Buttermilk Fried Chicken</span>
                <span>KSh 250</span>
              </div>

              <div className="menu-item">
                <span>Hot Chicken Wings</span>
                <span>KSh 280</span>
              </div>

              <div className="menu-item">
                <span>Crispy Chicken Tenders</span>
                <span>KSh 260</span>
              </div>

            </div>


            <div className="menu-category">
              <h2>Gourmet Sides</h2>

              <div className="menu-item">
                <span>French Fries</span>
                <span>KSh 150</span>
              </div>

              <div className="menu-item">
                <span>Loaded Fries</span>
                <span>KSh 200</span>
              </div>

            </div>

          </div>


          {/* RIGHT COLUMN */}

          <div className="menu-column">

            <div className="menu-category">
              <h2>Burgers</h2>

              <div className="menu-item">
                <span>Chicken Burger</span>
                <span>KSh 300</span>
              </div>

              <div className="menu-item">
                <span>Spicy Chicken Burger</span>
                <span>KSh 320</span>
              </div>

            </div>


            <div className="menu-category">
              <h2>Drinks</h2>

              <div className="menu-item">
                <span>Soda</span>
                <span>KSh 80</span>
              </div>

              <div className="menu-item">
                <span>Fresh Juice</span>
                <span>KSh 150</span>
              </div>

              <div className="menu-item">
                <span>Mineral Water</span>
                <span>KSh 60</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Menu;