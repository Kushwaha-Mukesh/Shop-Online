import { useDispatch, useSelector } from "react-redux";
import {
  removeBagItems,
  removeWishlist,
  setBagItems,
  setWishlist,
} from "../store/index";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
function HomeItem({ product }) {
  const bagItems = useSelector((store) => store.BagItems);
  const wishlists = useSelector((store) => store.Wishlist);
  const addRemove = bagItems.find((bagItem) => bagItem.id === product.id);
  const changeWishlistIcon = wishlists.find(
    (wishlist) => wishlist.id === product.id
  );
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(setBagItems(product));
  };
  const handleRemove = (product) => {
    dispatch(removeBagItems(product));
  };
  const handleAddWishlist = (product) => {
    dispatch(setWishlist(product));
  };
  const handleRemoveWishlist = (product) => {
    dispatch(removeWishlist(product));
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
      <div className="wishlist">
        {changeWishlistIcon ? (
          <FaHeart onClick={() => handleRemoveWishlist(product)} />
        ) : (
          <FaRegHeart onClick={() => handleAddWishlist(product)} />
        )}
      </div>
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
