import styles from "./Header.module.css";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img src="images/logo.jpg" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.navigation}>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
        </div>
        <div>
          <span>
            <CiSearch />
          </span>
          <input
            type="search"
            name="search"
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
            <span>
              <BsFillBagCheckFill />
            </span>
            <br /> Bag
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
