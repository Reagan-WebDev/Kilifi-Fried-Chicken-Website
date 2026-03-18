import { useState } from "react";
import "../styles/order.css";
import { useEffect } from "react";



const menuItems = [
  // Signature Fried Chicken
  { id: 1, name: "Classic Fried Chicken", price: 250, category: "Signature Fried Chicken" },
  { id: 2, name: "Hot Chicken Wings", price: 280, category: "Signature Fried Chicken" },
  { id: 3, name: "Crispy Chicken Tenders", price: 260, category: "Signature Fried Chicken" },
  { id: 4, name: "Spicy Fried Chicken", price: 270, category: "Signature Fried Chicken" },
  { id: 5, name: "BBQ Chicken Pieces", price: 300, category: "Signature Fried Chicken" },

  // Sides
  { id: 6, name: "French Fries", price: 150, category: "Sides" },
  { id: 7, name: "Loaded Fries", price: 200, category: "Sides" },
  { id: 8, name: "Coleslaw", price: 120, category: "Sides" },
  { id: 9, name: "Mashed Potatoes", price: 180, category: "Sides" },

  // Burgers & Wraps
  { id: 10, name: "Chicken Burger", price: 300, category: "Burgers & Wraps" },
  { id: 11, name: "Spicy Chicken Burger", price: 320, category: "Burgers & Wraps" },
  { id: 12, name: "Chicken Wrap", price: 290, category: "Burgers & Wraps" },
  { id: 13, name: "Double Chicken Burger", price: 380, category: "Burgers & Wraps" },

  // Drinks
  { id: 14, name: "Soda", price: 80, category: "Drinks" },
  { id: 15, name: "Fresh Juice", price: 150, category: "Drinks" },
  { id: 16, name: "Mineral Water", price: 60, category: "Drinks" },
  { id: 17, name: "Iced Tea", price: 120, category: "Drinks" },
  { id: 18, name: "Milkshake", price: 200, category: "Drinks" },
];

function Order() {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
  const [showReceipt, setShowReceipt] = useState(() => {
  return JSON.parse(localStorage.getItem("receipt")) || false;
});
  /*const [showPopup, setShowPopup] = useState(false);*/
  const [showPopup, setShowPopup] = useState(() => {
  const saved = localStorage.getItem("showPopup");
  const startTime = localStorage.getItem("popupStartTime");

  if (saved === "true" && startTime) {
    const elapsed = Date.now() - parseInt(startTime, 10);

    // Only show if less than 4 seconds have passed
    if (elapsed < 4000) {
      return true;
    } else {
      localStorage.removeItem("showPopup");
      localStorage.removeItem("popupStartTime");
    }
  }

  return false;
});

  const categories = [
    "Signature Fried Chicken",
    "Sides",
    "Burgers & Wraps",
    "Drinks"
  ];

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

useEffect(() => {
  localStorage.setItem("receipt", JSON.stringify(showReceipt));
}, [showReceipt]);

useEffect(() => {
  if (showPopup) {
    const startTime = localStorage.getItem("popupStartTime");

    if (startTime) {
      const elapsed = Date.now() - parseInt(startTime, 10);
      const remaining = 4000 - elapsed;

      if (remaining > 0) {
        const timer = setTimeout(() => {
          setShowPopup(false);
          setCart([]);
          setShowReceipt(false);

          localStorage.removeItem("showPopup");
          localStorage.removeItem("popupStartTime");
          localStorage.removeItem("cart");
          localStorage.removeItem("receipt");
        }, remaining);

        return () => clearTimeout(timer);
      } else {
        setShowPopup(false);

        localStorage.removeItem("showPopup");
        localStorage.removeItem("popupStartTime");
      }
    }
  }
}, [showPopup]);

  // ADD ITEM
  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // REMOVE / DECREASE
  const decreaseQty = (item) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing.quantity === 1) {
      setCart(cart.filter(i => i.id !== item.id));
    } else {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      ));
    }
  };

  // TOTAL
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // RECEIPT
  const handleReceipt = () => {
    if (cart.length === 0) return alert("Select items first!");
    setShowReceipt(true);
  };

  // PAYMENT SIMULATION
 /* const handlePayment = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setCart([]);
      setShowReceipt(false);
    }, 4000);
  };*/

  const handlePayment = () => {
  setShowPopup(true);

  // Save popup state + start time
  localStorage.setItem("showPopup", "true");
  localStorage.setItem("popupStartTime", Date.now().toString());
};

  return (
    <section className="order-page">

      {/* POPUP */}
      {showPopup && (
        <div className="order-popup">
          ✅ Your order has been received by Kilifi Fried Chicken 🍗  
          It will be delivered as soon as possible!
        </div>
      )}

      <div className="order-container">

        {/* MENU */}
        <div className="menu-section">
          <h2>Menu</h2>

          {categories.map(category => (
            <div key={category} className="menu-category">
              <h3>{category}</h3>

              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <div key={item.id} className="menu-item">
                    <span>{item.name}</span>
                    <span>KES {item.price}</span>
                    <button onClick={() => addToCart(item)} className="addToCart-btn">Add</button>
                  </div>
                ))
              }
            </div>
          ))}
        </div>

        {/* CART */}
        <div className="cart-section">
          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p>No items selected</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">

                <span>{item.name}</span>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>

                <span>KES {item.price * item.quantity}</span>

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

          {cart.map(item => (
            <p key={item.id}>
              {item.name} x{item.quantity} - KES {item.price * item.quantity}
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