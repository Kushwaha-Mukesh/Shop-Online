import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";
function HomeItems() {
  const products = useSelector((store) => store.ProductItem);
  return (
    <div className="homeItems">
      {products.map((product) => (
        <HomeItem product={product} />
      ))}
    </div>
  );
}

export default HomeItems;
