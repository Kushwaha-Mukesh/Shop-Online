import { useDispatch, useSelector } from "react-redux";
import { removeBagItems, setBagItems } from "../store/index";
import { Link } from "react-router-dom";
function HomeItem({ product }) {
  const bagItems = useSelector((store) => store.BagItems);
  const addRemove = bagItems.find((bagItem) => bagItem.id === product.id);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(setBagItems(product));
  };
  const handleRemove = (product) => {
    dispatch(removeBagItems(product));
  };
  return (
    <div
      key={product.id}
      style={{ width: "18rem" }}
      className="productItem card product-item"
    >
      <img
        src={product.images[0]}
        className="card-img-top"
        alt="product image"
      />
      <div className="card-body">
        <Link to={`/product/${product.id}/${product.title}`} className="link">
          <p className="price">
            <span>${product.price}</span>
            <span className="badge rounded-pill bg-danger text-white">
              {product.discountPercentage}% off
            </span>
          </p>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text description">{product.description}</p>
        </Link>
        {addRemove ? (
          <button
            className="btn btn-danger"
            onClick={() => handleRemove(product)}
          >
            Remove From Bag
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => handleAdd(product)}
          >
            Add To Bag
          </button>
        )}
      </div>
    </div>
  );
}

export default HomeItem;
