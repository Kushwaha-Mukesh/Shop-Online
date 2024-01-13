import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";
import ProductPage from "./ProductPage";
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
