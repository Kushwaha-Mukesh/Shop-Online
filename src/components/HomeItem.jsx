import { useDispatch, useSelector } from "react-redux";
import {
  removeBagItems,
  setAddRemoveButton,
  setBagItems,
} from "../store/index";
import styles from "./HomeItem.module.css";
function HomeItem({ products }) {
  const addRemove = useSelector((store) => store.addRemoveButton);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(setBagItems(product));
  };
  const handleRemove = (product) => {
    dispatch(removeBagItems(product));
  };
  return (
    <>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{ width: "18rem" }}
            className={`${styles.productItem} card product-item`}
          >
            <img
              src={product.images[0]}
              className="card-img-top"
              alt="product image"
            />
            <div className="card-body">
              <p className={styles.price}>
                <span>${product.price}</span>
                <span className="badge rounded-pill bg-danger text-white">
                  {product.discountPercentage}% off
                </span>
              </p>
              <h5 className="card-title">{product.title}</h5>
              <p className={`card-text ${styles.description}`}>
                {product.description}
              </p>
              {addRemove ? (
                <button
                  className="btn btn-success"
                  onClick={() => handleAdd(product)}
                >
                  Add To Bag
                </button>
              ) : (
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(product)}
                >
                  Remove From Bag
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeItem;
