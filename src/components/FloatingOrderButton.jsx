import { useNavigate } from "react-router-dom";
import "../styles/orderbutton.css";

function FloatingOrderButton() {
  const navigate = useNavigate();

  return (
    <button 
      className="floating-order-btn"
      onClick={() => navigate("/menu")}
    >
      🍗 Order Now
    </button>
  );
}

export default FloatingOrderButton;