import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";
function HomeItems() {
  const products = useSelector((store) => store.ProductItem);
  return (
    <div className="homeItems">
      <HomeItem products={products} />
    </div>
  );
}

export default HomeItems;
