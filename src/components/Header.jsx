import styles from "./Header.module.css";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { setSearchItems } from "../store/index";

function Header() {
  const [showHamLink, setShowHamLink] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.BagItems);
  const wishlist = useSelector((store) => store.Wishlist);
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
          <Link to={"/category/men"} className="link">
            Men
          </Link>
          <Link to={"/category/women"} className="link">
            Women
          </Link>
          <Link to={"/category/automotive"} className="link">
            Automotive
          </Link>
          <Link to={"/category/homeLiving"} className="link">
            Home & Living
          </Link>
          <Link to={"/category/beauty"} className="link">
            Beauty
          </Link>
          <Link to={"/category/electronics"} className="link">
            Electronics
          </Link>
        </div>
        <div className={styles.searchDiv}>
          <label>
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
          </label>
        </div>
        <div className={styles.rightIcons}>
          <p>
            <span>
              <VscAccount />
            </span>
            <br /> Profile
          </p>
          <p>
            <Link to={"/wishlist"} className="link">
              <span>
                {wishlist.length === 0 ? <FaRegHeart /> : <FaHeart />}
              </span>
              <br /> Wishlist
            </Link>
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
        <div className={styles.hamburger}>
          <GiHamburgerMenu onClick={() => setShowHamLink(!showHamLink)} />
          <div
            className={
              showHamLink
                ? styles.hamburgerNavigation
                : styles.showhamburgerNavigation
            }
          >
            <Link to={"/category/men"} className="link">
              Men
            </Link>
            <Link to={"/category/women"} className="link">
              Women
            </Link>
            <Link to={"/category/automotive"} className="link">
              Automotive
            </Link>
            <Link to={"/category/homeLiving"} className="link">
              Home & Living
            </Link>
            <Link to={"/category/beauty"} className="link">
              Beauty
            </Link>
            <Link to={"/category/electronics"} className="link">
              Electronics
            </Link>
            <Link to={"#"} className="link">
              <span>
                <VscAccount />
                Profile
              </span>
            </Link>
            <Link to={"/wishlist"} className="link">
              <span>
                {wishlist.length === 0 ? <FaRegHeart /> : <FaHeart />}
                Wishlist
              </span>
            </Link>
            <Link to={"/bag"} className="link">
              <span className="position-relative">
                <BsFillBagCheckFill />
                {bagItems.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {bagItems.length}
                  </span>
                )}
                Bag
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
