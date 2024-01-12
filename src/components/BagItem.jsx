import { useDispatch } from "react-redux";
import { removeBagItems } from "../store/index";

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
        <p className="price">
          <span>${bagItem.price}</span>
          <span className="badge rounded-pill bg-danger text-white">
            {bagItem.discountPercentage}% off
          </span>
        </p>
        <h5 className="card-title">{bagItem.title}</h5>
        <p className="card-text description">{bagItem.description}</p>
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
