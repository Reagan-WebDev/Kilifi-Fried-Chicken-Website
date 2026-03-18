import { useNavigate } from "react-router-dom";
import "../styles/orderbutton.css";

function FloatingOrderButton() {
  const navigate = useNavigate();

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