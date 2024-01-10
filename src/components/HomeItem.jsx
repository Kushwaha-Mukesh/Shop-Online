import styles from "./HomeItem.module.css";
function HomeItem({ products }) {
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
              <button className="btn btn-success">Add To Bag</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeItem;
