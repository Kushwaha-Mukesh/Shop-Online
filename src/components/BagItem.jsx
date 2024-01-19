/**
 * The BagItem component is a React component that renders a card displaying information about a
 * product in a shopping bag, including an image, price, title, description, and a button to remove the
 * item from the bag.
 * @returns The `BagItem` component is returning a JSX element that represents a card displaying
 * information about a bag item. It includes an image, price, discount percentage, title, description,
 * and a button to remove the item from the bag.
 */
import { useDispatch } from "react-redux";
import { removeBagItems } from "../store/index";
import { Link } from "react-router-dom";

function BagItem({ bagItem }) {
  const dispatch = useDispatch();
  function handleRemove(bagItem) {
    dispatch(removeBagItems(bagItem));
  }
  return (
    <div
      key={bagItem.id}
      style={{ width: "18rem" }}
      className="card product-item productItem"
    >
      <img
        src={bagItem.images[0]}
        className="card-img-top"
        alt="product image"
      />
      <div className="card-body">
        <Link to={`/product/${bagItem.id}/${bagItem.title}`} className="link">
          <p className="price">
            <span>${bagItem.price}</span>
            <span className="badge rounded-pill bg-danger text-white">
              {bagItem.discountPercentage}% off
            </span>
          </p>
          <h5 className="card-title">{bagItem.title}</h5>
          <p className="card-text description">{bagItem.description}</p>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleRemove(bagItem)}
        >
          Remove From Bag
        </button>
      </div>
    </div>
  );
}

export default BagItem;
