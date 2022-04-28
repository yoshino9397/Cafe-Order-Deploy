import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { CgShoppingCart, CgMenu } from "react-icons/cg";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image
              src={`${process.env.REACT_APP_PUBLIC_FOLDER}logo.jpg`}
              alt=""
              width="150px"
              height="130px"
            />
          </div>
          <div className={styles.menuIcon}>
            <CgMenu color="white" fontSize="40px" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>Cafe Lynx</div>
            <div className={styles.text}>In New York</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.listItem}>Homepage</li>
            </Link>
            <Link href="/menu" passHref>
              <li className={styles.listItem}>Menu</li>
            </Link>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <CgShoppingCart fontSize="42px" color="white" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
