import { useState } from "react";
import "../styles/order.css";

const menuItems = [
  { id: 1, name: "Classic Fried Chicken", price: 250 },
  { id: 2, name: "Hot Chicken Wings", price: 280 },
  { id: 3, name: "Crispy Chicken Tenders", price: 260 },
  { id: 4, name: "Spicy Fried Chicken", price: 270 },
  { id: 5, name: "BBQ Chicken Pieces", price: 300 },
  { id: 6, name: "French Fries", price: 150 },
  { id: 7, name: "Loaded Fries", price: 200 },
  { id: 8, name: "Coleslaw", price: 120 },
  { id: 9, name: "Mashed Potatoes", price: 180 },
  { id: 10, name: "Chicken Burger", price: 300 },
  { id: 11, name: "Spicy Chicken Burger", price: 320 },
  { id: 12, name: "Chicken Wrap", price: 290 },
  { id: 13, name: "Double Chicken Burger", price: 380 },
  { id: 14, name: "Soda", price: 80 },
  { id: 15, name: "Fresh Juice", price: 150 },
  { id: 16, name: "Mineral Water", price: 60 },
  { id: 17, name: "Iced Tea", price: 120 },
  { id: 18, name: "Milkshake", price: 200 },
];

function Order() {

  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Generate receipt
  const handleReceipt = () => {
    if(cart.length === 0) return alert("Select items first!");
    setShowReceipt(true);
  };

  // Simulate payment
  const handlePayment = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setCart([]);
      setShowReceipt(false);
    }, 4000);
  };

  return (
    <section className="order-page">

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="order-popup">
          ✅ Your order has been received by Kilifi Fried Chicken 🍗  
          It will be delivered as soon as possible!
        </div>
      )}

      <div className="order-container">

        {/* LEFT - MENU */}
        <div className="menu-section">
          <h2>Menu</h2>

          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <span>{item.name}</span>
              <span>KES {item.price}</span>
              <button onClick={() => addToCart(item)}>Add</button>
            </div>
          ))}
        </div>

        {/* RIGHT - CART */}
        <div className="cart-section">
          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p>No items selected</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.name}</span>
                <span>KES {item.price}</span>
              </div>
            ))
          )}

          <h3>Total: KES {total}</h3>

          <button onClick={handleReceipt} className="receipt-btn">
            Generate Receipt
          </button>
        </div>

      </div>

      {/* RECEIPT */}
      {showReceipt && (
        <div className="receipt">
          <h2>Receipt</h2>

          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - KES {item.price}
            </p>
          ))}

          <h3>Total: KES {total}</h3>

          <button onClick={handlePayment} className="pay-btn">
            Pay Now
          </button>
        </div>
      )}

    </section>
  );
}

export default Order;