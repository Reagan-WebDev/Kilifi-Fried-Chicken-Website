import "../styles/whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {

  const phoneNumber = "254782545727";

  const message = "Hello Kilifi Fried Chicken, I would like to place an order.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
      <span>Order Now</span>
    </a>
  );
}

export default WhatsappButton;