import { useNavigate, useLocation } from "react-router-dom";
import "../styles/orderbutton.css";

function FloatingOrderButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/order") {
    return null;
  }

  return (
    <button 
      className="floating-order-btn"
      onClick={() => navigate("/order")}
    >
      🍗 Order Now
    </button>
  );
}

export default FloatingOrderButton;