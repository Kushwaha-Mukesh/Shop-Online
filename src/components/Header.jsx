import styles from "./Header.module.css";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { setSearchItems } from "../store/index";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.BagItems);
  const searchItem = useRef();
  function handleSearch(e) {
    if (e.key === "Enter") {
      const search = searchItem.current.value;
      if (search) {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
          .then((res) => res.json())
          .then((data) => {
            dispatch(setSearchItems(data.products));
          });
        navigate("/search");
      }
    }
  }
  return (
    <>
      <div className={styles.header}>
        <div>
          <Link to={"/"}>
            <img src="images/logo.jpg" alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.navigation}>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
        </div>
        <div className={styles.searchDiv}>
          <span className={styles.searchIcon}>
            <CiSearch />
          </span>
          <input
            type="search"
            name="search"
            ref={searchItem}
            onKeyDown={(e) => handleSearch(e)}
            className={styles.search}
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className={styles.rightIcons}>
          <p>
            <span>
              <VscAccount />
            </span>
            <br /> Profile
          </p>
          <p>
            <span>
              <FaRegHeart />
            </span>
            <br /> Wishlist
          </p>
          <p>
            <Link to={"/bag"} className="link">
              <span className="position-relative">
                <BsFillBagCheckFill />
                {bagItems.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {bagItems.length}
                  </span>
                )}
              </span>
              <br /> Bag
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
