import "./Shop.css";
import { shop } from "../../lib/shopList"; //this is the list of shop upgrades array of objects imported from a js file

export default function shopDisplay({ onPurchase }) {
  return (
    <div className="shop-front">
      {shop.map((item) => (
        <ul
          className="listbox"
          key={item.id}
          onClick={() => onPurchase(item.cost, item.increase)}
        >
          <li className="upgrade-list">{item.name}</li>
          <li className="upgrade-list">Cost: {item.cost}</li>
          <li className="upgrade-list">Bonus: {item.increase}</li>
        </ul>
      ))}
    </div>
  );
}
