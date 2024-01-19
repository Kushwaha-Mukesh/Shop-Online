/* The code is a React component called `Search`. */
import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";

function Search() {
  const searchItems = useSelector((store) => store.SearchItems);
  return (
    <div className="homeItems">
      {searchItems.map((searchItem) => (
        <HomeItem key={searchItem.id} product={searchItem} />
      ))}
    </div>
  );
}

export default Search;
