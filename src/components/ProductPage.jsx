import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeBagItems, setBagItems } from "../store/index";

function ProductPage() {
  const { id } = useParams();
  const homeItems = useSelector((store) => store.ProductItem);
  const productDetail = homeItems.find((item) => item.id === Number(id));
  const bagItems = useSelector((store) => store.BagItems);
  const addRemove = bagItems.find((bagItem) => bagItem.id === Number(id));
  const dispatch = useDispatch();
  const handleAdd = (productDetail) => {
    dispatch(setBagItems(productDetail));
  };
  const handleRemove = (productDetail) => {
    dispatch(removeBagItems(productDetail));
  };
  return (
    <div className="product_item">
      <div className="images">
        <img src={productDetail.images[0]} alt="product_images" />
      </div>
      <div className="item_details">
        <p>{productDetail.title}</p>
        <p>{productDetail.rating}⭐</p>
        <p>
          <span>${productDetail.price}</span>
          <span> {productDetail.discountPercentage}%</span>
        </p>
        <p>{productDetail.brand}</p>
        <p>{productDetail.stock}</p>
        <p>{productDetail.description}</p>
        {productDetail.images.map((image) => (
          <img
            src={image}
            style={{ width: "5rem", margin: "0 10px 10px 0", height: "5rem" }}
          />
        ))}{" "}
        <br />
        {addRemove ? (
          <button
            className="btn btn-danger"
            onClick={() => handleRemove(productDetail)}
          >
            Remove From Bag
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => handleAdd(productDetail)}
          >
            Add To Bag
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
