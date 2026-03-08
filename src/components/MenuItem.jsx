import "../styles/menuitem.css";

function MenuItem({ image, name, price }) {
  return (
    <div className="menu-item">

      <img src={image} alt={name} />

      <div className="menu-item-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>

    </div>
  );
}

export default MenuItem;