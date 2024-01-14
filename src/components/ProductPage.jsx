import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeBagItems, setBagItems } from "../store/index";
import { useState } from "react";

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
  const [images, setImages] = useState(productDetail.images[0]);
  return (
    <div className="product_item">
      <div className="images">
        <img src={images} alt="product_images" className="image_box" />
      </div>
      <div className="item_details">
        <h2>{productDetail.title}</h2>
        <h5>Rating: {productDetail.rating}⭐</h5>
        <p className="price">
          <span>Price: ${productDetail.price}</span>
          <span className="badge rounded-pill bg-danger text-white">
            {productDetail.discountPercentage}% off
          </span>
        </p>
        <p>
          Brand: <strong>{productDetail.brand}</strong>
        </p>
        <p>Stock: {productDetail.stock}</p>
        <p>{productDetail.description}</p>
        {productDetail.images.map((image) => (
          <img src={image} onClick={() => setImages(image)} />
        ))}
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
