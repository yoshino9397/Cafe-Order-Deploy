import styles from "../styles/CafeList.module.css";
import CafeCard from "./CafeCard";

const CafeList = ({ cafeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST COFFEE IN TOWN</h1>
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

export default CafeList;
