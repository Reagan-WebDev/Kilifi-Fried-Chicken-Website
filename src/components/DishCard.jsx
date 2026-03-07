import "../styles/dishcard.css";

function DishCard({ image, name, price }) {
  return (
    <div className="dish-card">
      <img src={image} alt={name} />

      <div className="dish-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default DishCard;