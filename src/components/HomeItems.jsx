/* The code is defining a React functional component called `HomeItems`. */
import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";
function HomeItems() {
  const products = useSelector((store) => store.ProductItem);
  return (
    <div className="homeItems">
      {products.map((product) => (
        <HomeItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default HomeItems;
