import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";

function Wishlist() {
  const wishlists = useSelector((store) => store.Wishlist);
  return (
    <div className="homeItems">
      {wishlists.map((wishlist) => (
        <HomeItem key={wishlist.id} product={wishlist} />
      ))}
    </div>
  );
}

export default Wishlist;
