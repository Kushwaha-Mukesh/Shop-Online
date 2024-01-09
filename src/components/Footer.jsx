import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiReturnArrow } from "react-icons/gi";
import { BsGooglePlay } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerNavigation}>
          <div className={styles.navlink}>
            <h5>ONLINE SHOPPING</h5>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Cards</a>
          </div>
          <div className={styles.navlink}>
            <h5>USEFUL LINKS</h5>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Site Map</a>
            <a href="#">Corporate Information</a>
            <a href="#">Whitehat</a>
            <a href="#">Cleartrip</a>
          </div>
          <div className={styles.navlink}>
            <h5>CUSTOMER POLICIES</h5>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Grievance Officer</a>
          </div>
        </div>
        <div className={styles.commitment}>
          <div className={styles.guarantee}>
            <span>
              <VscWorkspaceTrusted />
            </span>
            <p>
              <strong>100% ORIGINAL</strong> guarantee for <br />
              all products at shopOnline.com
            </p>
          </div>
          <div className={styles.guarantee}>
            <span>
              <GiReturnArrow />
            </span>
            <p>
              <strong>Return within 14 days</strong> of <br />
              receiving your order
            </p>
          </div>
        </div>
        <div>
          <div className={styles.contact}>
            <div className={styles.mobileApp}>
              <h5>SHOP ONLINE ON MOBILE</h5>

              <a href="">
                <BsGooglePlay />
              </a>
              <a href="">
                <IoLogoApple />
              </a>
            </div>
            <div>
              <h5>KEEP IN TOUCH</h5>
              <div className={styles.socialMedia}>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <RiTwitterXLine />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
