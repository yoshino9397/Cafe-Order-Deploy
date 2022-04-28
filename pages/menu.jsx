import axios from "axios";
import styles from "../styles/Menu.module.css";
import CafeCard from "../components/CafeCard";

const Menu = ({ cafeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ENJOY OUR MENU!</h1>
      <p className={styles.desc}>
        Coffee is our soul. Focusing on the minute; being meticulous over every
        detail. Everything we do is considered to give an unparalleled
        experience of simplicity with substance.
      </p>
      <div className={styles.wrapper}>
        {cafeList.map((cafe) => (
          <CafeCard key={cafe._id} cafe={cafe} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.URL}/api/products`);
  return {
    props: {
      cafeList: res.data,
    },
  };
};

export default Menu;
